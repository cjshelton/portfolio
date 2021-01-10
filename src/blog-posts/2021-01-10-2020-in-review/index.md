---
title: "2020: In Review"
description: ""
---

# Introduction

This post will be a look back on some of the highlights of my tech journey in 2020, including new tech I have learnt and
projects I have worked on.

# Highlights

## Building My Personal Portfolio Using Gatsby {#building-my-personal-portfolio-using-gatsby}

Building my personal Portfolio site in [Gatsby][gatsby-url] was the largest personal project I worked on in 2020, particularly
over Lockdown. I wanted my own Portfolio site to act as a central place to showcase my potential, and to be a living document
of my career as a software engineer, and ultimately be the home for my tech blog, which I'll get onto
[later](#tech-blog-migration-into-portfolio).

I opted not to use a site builder or cookie-cutter template, but instead, take the opportunity to learn a new set of
technologies, including the Gatsby JAMstack platform, as well as React and a bit of GraphQL, all whilst further
strengthening my HTML and CSS skills.

This was a really enjoyable project to work on, and my Portfolio is now in a perfect place for me to keep up-to-date and make
hassle-free edits to, as and when I need to.

## Web-hosting Using Netlify

Whilst [building my Portfolio](#building-my-personal-portfolio-using-gatsby), I started investigating options for web
hosting. [Netlify][netlify-url] quickly seemed like the obvious choice, particularly in the [JAMstack][jamstack-url] world.

Netlify proved to be very easy from start to finish. From connecting the source code repository, setting up my
build and deployment commands, and finally setting up notifications to be sent on success or failure of any future deployments.
I also managed to connect my own private domain and setup DNS in Netlify easily, following their
[excellent documentation][netlify-docs-url]. And best of all, this is all under their free-plan offering -- ideal for any
of your own small personal projects.

As of right now, thanks to Netlify, my Portfolio is in a great place for me to make changes to, and run deployments as
often as I want, without the need for any manual steps, or worry of it not going smoothly.

Netlify is a very impressive platform for hosting modern front-end applications, and will always remain at the top of my
list for any future projects. I feel I have only scratched the surface of what Netlify can offer, even under the free plan,
so I certainly plan on exploring more with Netlify in 2021.

## Tech Blog Migration Into Portfolio {#tech-blog-migration-into-portfolio}

Another goal I set for 2020 was to migrate my tech blog from [GitHub Pages][github-pages-url] over to be integrated into
my Portfolio site. My reasoning for doing this was to simplify maintenance for myself, and to have some consistency across
my online presence.

I achieved this goal about halfway through the year. It wasn't as time consuming as I anticipated, and certainly allowed
me to delve deeper into Gatsby, and how it can be leveraged to create a blog specifically, including using Markdown to write
the content.

I have posted a few times on my blog since the migration was completed. I have certainly felt the benefits I was
hoping for, and I certainly appreciate having all of my content in one place with a consistent look-and-feel throughout.

## Understanding and Configuring HTTP Security Headers in Netlify

After creating my Portfolio site, I was keen to understand the different HTTP Security Headers, and how they could be
configured specifically for Netlify.

Being a developer, especially a web application developer, it is valuable to understand not only how to develop for the web,
but also how other aspects of the web work, like HTTP. I used my Portfolio site to dig into some of the main Security
Headers available, what each one is for, and what different configurations can be used.

This was a nice change of pace from coding, and enabled me to understand further what was happening between the client
and server when users visit my site. It also gave me an opportunity to learn how to make server configuration changes in
Netlify.

I wrote a [blog post][configuring-security-headers-blog-url] on what I learnt and used that to show what Security Header
configuration I had opted for and why.

## Building a Home Dashboard Application

Another large project I set out to complete in 2020 was to build a home dashboard application, to act as a central place
for controlling smart appliances in my home, and for simplifying everyday tasks like meal planning.

This was a great opportunity to bringing together multiple technologies; strengthening my VueJS and .NET Core skills,
whilst learning new tech like .NET Background Services, SignalR, Xamarin, Google Firestore data storage, deployment
and hosting on a Raspberry Pi, and more. I wrote a [blog post][home-dashboard-blog-url] which goes into a bit more detail
on the tech, and focuses a lot on the process of running .NET Core in Docker on a Raspberry Pi.

I certainly learnt a lot from this project, particularly about the challenges of running a .NET Core application on a
minimalist system like a Raspberry Pi. But the app works really well and I get the use out of it which I hoped for, and I
have plenty of ideas on what improvements I can make in the future!

## First Open-Source Contribution

2020 was also the year where I made my first contribution to Open Source. I created a small PR to fix a broken link in
the Gatsby documentation, which was ultimately rejected in favour of keeping the broken link and fixing the issue with a
server redirect.

Though the change was only small, and wasn't even merged, it still gave me a taste for contributing to Open Source, and
hasn't discouraged me from making contributions in the future.

## Using More Modern JavaScript and CSS Features

2020 has been a year where I have paid a lot of attention to my front-end skills, making the transition to working with
more modern JavaScript ES6 syntax, and getting familiar with newer CSS features like Flexbox and Grid.

Overall, this has made the experience a lot more enjoyable and has opened up new ways for me to write rich front-end web
applications. I feel the JavaScript I write is now much more concise and carries a lot more meaning, and using CSS
features like Flexbox and Grid has made it much simpler to build custom complicated layouts.

## Writing Good Unit and Integration Tests in JavaScript

I'm a big fan of automated testing, and have been practising it from the beginning of my professional career, sometimes
dipping into true TDD if the project allows.

At the start of 2020, I felt very confident in the principles of writing good unit and integration tests, particularly in
the .NET world, but I wanted to apply these same principles and become proficient in writing good tests in JavaScript too.

I'm happy to say that I achieved this goal, and writing automated tests in JavaScript now feels as natural as it does in
.NET for me, though the experience has some differences in my opinion, and the journey to get this point took longer, for
a few different reasons:

-   To me, it didn't feel like the JavaScript world had fully adopted automated testing, and that this was a concept only
    experienced and senior developers would practice (I now know this not to be the case). To be fair, this is in
    comparison to C# in .NET, which is probably an unfair comparison, with C# being a much more mature language than
    JavaScript, particularly for application development.
-   Due to the functional nature of JavaScript, the lack of a native typing system, and sometimes an over-reliance on 3rd
    party libraries (e.g. Lodash), it can be easy to write code which is awkward to test. Writing tests shouldn't be difficult
    or awkward; writing tests should be easy to encourage contributions. This is also where TDD comes in to help, but
    I'll not be delving into that topic here.
-   Unlike in C#, where there are a small handful of testing frameworks used, there seems to be lots of testing libraries available
    in JavaScript. This is typical of npm, and it's certainly not a bad thing, but in my opinion, it's just harder to set a
    standard which makes tests consistent between different developers and libraries used. This again feels like another
    barrier to entry for some developers trying to adopt testing in their development workflow.
-   Mocking - an essential part of writing unit tests - seemed more complicated in JavaScript than I was used to. With an
    array of different mocking libraries available, like [Rewire][rewire-npm-url] and [Proxyquire][proxyquire-npm-url] as examples,
    each with their own approach, which also differs further based on which module loading system is being used, it all felt
    a bit clunky and unnecessarily difficult to do at times whilst I was trying to familiarise myself.

All in all, getting familiar with automated testing in JavaScript, and being competent at writing good unit and
integration tests, took longer than I had anticipated. However, I definitely feel I am now in a place where writing tests
alongside my JavaScript code comes naturally, and is just as enjoyable as I find it when writing tests in C#.

## Understanding JavaScript Modules

I spent most of my time in 2020 writing both client and server-side JavaScript, but I realised that even with writing
JavaScript on a daily basis, I didn't truly understand the module system in JavaScript, the different ones available, and
when to use which one.

I decided it would be a good idea for a [blog post][javascript-modules-blog-url], to give me the opportunity to explore
JavaScript modules more, and document what I learnt to hopefully help others who had the same questions as me.

This blog post took longer than expected, partly because some of the differences between the modules systems are so subtle,
and you interact with them in slightly different ways. But the blog post turned out well, and certainly helped me gain a
stronger understanding of the module systems I work with on a daily basis.

## JavaScript Model Validation Using Joi

I chose to end the year with a [blog post][joi-javascript-model-validation-blog-url] on JavaScript model validation using
the Joi validation library.

Joi is a library I used extensively in 2020, and it impressed me for a few reasons, so I felt it would be a good topic for a
detailed blog post to share some of my favourite features.

I'm happy with how the blog post came out; I feel it had a
good mix of detail and code snippets, and will hopefully prove to be a helpful resource for someone else considering
using Joi and wanting a starting point.

[gatsby-url]: https://www.gatsbyjs.com/
[netlify-url]: https://www.netlify.com/
[jamstack-url]: https://jamstack.org/
[netlify-docs-url]: https://docs.netlify.com/
[github-pages-url]: https://pages.github.com/
[javascript-modules-blog-url]: /blog/2020/10/28/javascript-modules-explained/
[configuring-security-headers-blog-url]: /blog/2020/08/19/configuring-netlify-http-security-headers/
[joi-javascript-model-validation-blog-url]: /blog/2020/12/31/using-joi-for-javasacript-model-validation/
[home-dashboard-blog-url]: /blog/2020/04/10/running-aspnet-core-in-docker-on-raspberrypi/
[rewire-npm-url]: https://www.npmjs.com/package/rewire/
[proxyquire-npm-url]: https://www.npmjs.com/package/proxyquire
