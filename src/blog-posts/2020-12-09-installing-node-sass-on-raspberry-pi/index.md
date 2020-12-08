---
title: "Installing Node SASS on the Raspberry Pi"
description: ""
---

# Introduction

One of my personal projects is a web application which I use to manage day-to-day tasks around my house and just provide
some fairly handy quality of life improvements. I have covered a bit of the tech stack in a
[previous blog post][raspberry-pi-blog-post-url], but in short, it's a Vue application, supported by a .NET Core Web API,
all hosted on a Raspberry Pi on my local network, and which uses [Google Firestore][google-firestore-url] for data
storage.

The Raspberry Pi is ideal for this type of project, but every now and then I get the odd compatibility issue which is
hard to understand and fix, and this is typically caused by the (understandably) basic
[instruction set architecture (ISA)][instruction-set-architecture-url] used on the Pi, namely the
[ARM architecture][arm-architecture-url].

Libraries, runtimes and binaries are generally not optimised to run on the ARM architecture, as the cost typically far
outweighs the benefit of doing so, and this can be problematic for hobbyists like myself!

## Node SASS NPM Package Incompatibility

[raspberry-pi-blog-post-url]: /blog/2020/04/10/running-aspnet-core-in-docker-on-raspberrypi/
[google-firestore-url]: https://cloud.google.com/firestore
[instruction-set-architecture-url]: https://en.wikipedia.org/wiki/Instruction_set_architecture
[arm-architecture-url]: https://en.wikipedia.org/wiki/ARM_architecture
