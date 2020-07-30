---
title: "Running ASP.NET Core in Docker on a Raspberry Pi"
date: "2020-04-10"
description: ""
---

# Introduction

One of my most recent personal projects has been to create a dashboard application to be utilised around the home. It uses VueJS as the front-end technology, which is supported by an ASP.NET Core 2.1 Web API. Unfortunately, I had to downgrade from ASP.NET 3.1 to 2.1 for reasons explained [later in the post](#problems-with-grpc).

Some of the functionality of the API requires it to be on the local network and not cloud-hosted, and I had a Raspberry Pi which wasn't being put to any good use, so I thought it would be an ideal hosting platform for the application.

This post aims to explain the process of publishing an ASP.NET Core application to a Raspberry Pi 2, and running it within Docker for easier deployment and more consistent runtime behaviour.

## Why Docker?

I won't be going to any great lengths to explain what Docker is and what benefits it offers, and for those with experience with using Docker, then the reasons are likely very clear.

Simply, Docker is a containerisation platform, enabling applications to be run in an isolated environment on a host machine, much like a Virtual Machine (VM). Containerisation differs from the more traditional approach of running applications from within VMs; Containers do not require their own operating system, they explicitly define all of their required dependencies to run the application up-front, and they are designed to run on practically any host machine.

Docker changes the way applications are built, deployed and run. The benefits to using Docker are significant, including:

-   Reduced infrastructure costs.
-   Easier scaling to match demand.
-   A far simpler and more repeatable deployment model.
-   Quicker onboarding onto a project for new developers.
-   Consistent runtime behaviour (helps overcome the age-old story of &quot;It runs on my machine!&quot;).

## The Raspberry Pi

For completeness, I thought it would be worthwhile detailing some basic specs of my Raspberry Pi, in case anyone has any trouble getting their setup to work.

-   Raspberry Pi 2 Model B Rev 1.1 (2015).
-   Fresh installation of Raspbian GNU/Linux 10 (buster) using [NOOBS][noobs-url].
-   Up-to-date system packages by running `apt-get update && apt-get upgrade`.
-   Enabled SSH for easier access and configuration. [The documentation][enable-ssh-url] explains how to do this.
-   Installed Docker and Docker Compose. This isn't trivial on a Raspberry Pi, but there are numerous articles online which explain how to do it. I found [this article][install-docker-article-url] to be really helpful.

And that's about it. The dotnet CLI does not need to be installed, nor does Node or any other SDK; Docker is really the only pre-requisite for running different applications using a variety of technologies on the Raspberry Pi.

# Building and Running the App on the Pi

First thing's first &mdash; you'll need an application to publish. For me, I already had a solution which contained two projects &mdash; a WebAPI project targeting `netcoreapp2.1` and a Class Library project used for abstracting data access targeting `netstandard2.0`. If you don't have a project yet, a fresh WebAPI project created through the dotnet CLI would suffice.

## The Dockerfile

In order to get the app running in Docker, I needed to build a Docker image which can be used to spin up a Container to run the application on the Pi. The Dockerfile has six main sections:

### 1. Pull the Base .NET Core SDK Image

The Dockerfile uses two stages, the first being a build stage, to build an intermediate image which can be used to build the resulting production-ready image from. This first step pulls in the image will be used as the basis for the build image stage. The .NET Core SDK image must be used to enable the use of the .NET CLI to build the application.

```
FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
```

### 2. Restore NuGet Dependencies

The next step is to copy in the Solution and Project files and restore the project dependencies, targeting the `linux-arm` architecture (which is the architecture of the Pi).

The key here is that only the Solution and Project files are copied over for the restore. This allows Docker to cache this step and only re-run it if either of these files change; a change to a Controller, for example, would not result in a fresh restore which tends to take a significant portion of the build time.

```
COPY ./server.sln ./
COPY ./WebAPI/WebAPI.csproj ./WebAPI/
COPY ./DataAccessLayer/DataAccessLayer.csproj ./DataAccessLayer/

RUN dotnet restore server.sln -r linux-arm
```

### 3. Publish the App for Deployment to the Pi

.NET Core apps can be prepared for deployment to a host machine using the `dotnet publish` command. By default, the `publish` command restores dependencies and builds the application, and then outputs the result of the build to a folder, the contents of which is enough to run the application. As .NET Core is cross-platform, a single `publish` command can generate an application DLL and library files which can be executed on different target platforms and architectures.

When it comes to the Raspberry Pi, storage space is more of a consideration when deciding to host applications on it, so I configured the `publish` command to produce a leaner output to put less strain on the Pi. I achieved this in a few ways:

-   Since I knew this application would be running on the Pi, I configured the `--runtime` option to specifically target the `linux-arm` architecture.
-   As specified in the guidance for the .NET Core 2.1 SDK, supplying a `--runtime` option implicitly sets the `--self-contained` option to `true`. I'm not interested in a [self-contained deployment (SCD)][dotnet-publish-scd] because the application is going to be running within Docker which will already have the .NET Core Runtime installed. So to keep the application size down, the second option in my `publish` command is to set the `--self-contained` option to `false` to ensure the Runtime is not packaged as part of my application.

A few other notes about my `publish` command:

-   I'm targeting the `Release` configuration because the Pi will be acting as my Production system and I want the output of the build to be as optimised as possible.
-   I'm also supplying the `--no-restore` to ensure that dependencies are not restored as part of the `publish` &mdash; in my Dockerfile, a `restore` has already explicitly been performed on my Project files prior to the `publish` command to make use of Docker's caching ability.

The result of the above configuration looks like the following, which is executed after first copying over all remaining files into the image.

```
COPY . ./

RUN dotnet publish server.sln \
    -c Release \
    -o dist \
    -r linux-arm \
    --no-restore \
    --self-contained false
```

The [Microsoft Docs][dotnet-publish-2.1-url] says that this set of options does not work when using the .NET Core SDK 2.1, but that's not quite accurate; the command runs successfully, but the output does not include a platform-specific executable, nor is the output cross-platform.

The output is a DLL and its dependencies which are specific to running on the Linux ARM architecture, which is exactly what I needed to minimise the application size.

### 4. Pull the .NET Core Runtime Image

Now that the intermediate image has been built, it is time to prepare the resulting image for Production. It is important the right base image is chosen here, as this image will be used as the basis for the deployed application. The SDK is not useful in the Production image as the app has already been built, so it makes sense to use a leaner image which contains only the runtime dependencies required to run the application.

```
FROM mcr.microsoft.com/dotnet/core/aspnet:2.1
```

### 5. Copy the Production Files into the Image

The next step to building the Production image is to copy in the files from the output of the `publish` command from the intermediate build image.

```
WORKDIR /app
COPY --from=build /app/WebAPI/dist/ .
```

### 6. Set the Start-up Properties

And finally, set the start-up properties of the Production image, including setting the port to expose from the Container, and the command to run when creating a Container.

```
EXPOSE 80

ENTRYPOINT [ "dotnet", "WebAPI.dll" ]
```

## Deploying and Running the App on the Pi

The hard work has been done at this point. Deploying and running the app on the Pi should be a straightforward process thanks to Docker.

### Deploying the App

In an ideal world, the deployment of the application would be fully automated, and the process would be as follows:

1. Push changes to the remote `master` branch.
2. A build of the application is automatically triggered. This could be done using Azure DevOps, GitHub Actions or any other CI provider.
3. On successful build of the application, push the production-ready image to a remote Container Registry like Azure Container Registry.
4. Most Container Registry services allow webhooks to be configured which send `POST` requests to a custom endpoint. A webhook could be configured to respond to a push action in the Registry, which sends a `POST` request to the Pi.
5. On receiving a `POST` request, the Pi is then aware that a new version of the image is available. The Pi would run a `docker pull` command against the Registry to get the new image and run it.

In the spirit of [KISS][kiss-principle-url], I decided against the above setup. Although a fully-automated process is always be a goal, for this personal project, it certainly felt overkill.

The process that works for me is simply:

1. Build the image on my development laptop.
2. TAR the image to an archive file using the `docker save` command.
3. `scp` the TAR file over to the Pi.
4. Run `docker load` to extract the image on the Pi.

### Running the App

Now the application can be run by doing a basic `docker run` command, targeting the newly transferred image. I later introduced Docker Compose into the process so running the app is simpler and can be source controlled.

## Problems with gRPC on .NET Core on the Raspberry Pi (why I couldn't use .NET Core 3.1) {#problems-with-grpc}

I mentioned earlier in the post that I intended on using the latest version of .NET Core (3.1) for my project, given it is LTS and would enable me to use some cool new language features in C# 8.

Unfortunately, due to [gRPC][grpc-url] not being officially supported on .NET Core on ARM architectures, I was forced to downgrade to .NET Core 2.1 (the next LTS version) from 3.1, and rely on a NuGet package which included native gRPC libraries for C#, allowing the application to run. gRPC is not a direct dependency of my application, rather a dependency of the official [Google Cloud Firestore package][firestore-client-nuget-url] which I am using for interacting with my Google Cloud Firestore document database.

The app would publish fine, but would exit on startup with the following error:

```
Unhandled exception. System.IO.IOException: Error loading native library "/app/libgrpc_csharp_ext.x86.so".
   at Grpc.Core.Internal.UnmanagedLibrary..ctor(String[] libraryPathAlternatives)
   at Grpc.Core.Internal.NativeExtension.LoadUnmanagedLibrary()
   at Grpc.Core.Internal.NativeExtension.LoadNativeMethods()
   at Grpc.Core.Internal.NativeExtension..ctor()
   at Grpc.Core.Internal.NativeExtension.Get()

   <!-- Remainder of error removed for brevity -->
```

The error ultimately led me to the point in my code where I was instantiating the Firestore database in my `Startup.cs` file:

```
FirestoreDb.Create("<project-id>")
```

I tried various things to solve this, including changing package versions, playing with file permissions, and experimenting with different base Docker images, all without success.

I was close to changing my storage option until I came across a helpful [blog post][grpc-dotnetcore-raspberypi-blog] explaining the issue and how to solve it. Big thanks to [Erik on GitHub][erik-taylor-github] for spending the time to look into this and create a [NuGet package][grpc-dotnetcore-raspberypi-nuget] which I added to get things working.

It's worth noting, even with the gRPC NuGet package, I was still unable to get the app running using .NET Core 3.1; only when I downgraded to 2.1 did the app start running as normal. This might be something to do with my slightly old version of the Pi.

[noobs-url]: https://www.raspberrypi.org/downloads/noobs/
[enable-ssh-url]: https://www.raspberrypi.org/documentation/remote-access/ssh/
[install-docker-article-url]: https://dev.to/rohansawant/installing-docker-and-docker-compose-on-the-raspberry-pi-in-5-simple-steps-3mgl
[dotnet-publish-2.1-url]: https://docs.microsoft.com/en-us/dotnet/core/deploying/#examples
[dotnet-publish-scd]: https://docs.microsoft.com/en-us/dotnet/core/deploying/#publish-self-contained
[kiss-principle-url]: https://en.wikipedia.org/wiki/KISS_principle
[grpc-url]: https://grpc.io/
[firestore-client-nuget-url]: https://www.nuget.org/packages/Google.Cloud.Firestore/
[grpc-dotnetcore-raspberypi-blog]: https://dev.to/erikest/grpc-on-dotnet-core-preview3-on-raspberrypi-3-4nf4
[grpc-dotnetcore-raspberypi-nuget]: https://www.nuget.org/packages/libgrpc_csharp_ext.arm7
[erik-taylor-github]: https://github.com/erikest
