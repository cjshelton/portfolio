---
title: ".NET Core Dev in Docker with Live Compilation and Debugging"
description: ""
---

# Introduction

I have typically always used [Visual Studio][vs-url] for .NET development, mainly out of habit, and it pretty much being
a necessity for building apps with the .NET Framework. But also because it is a very powerful IDE for development, debugging and
running tests, with minimal configuration required.

In contrast, I do all of my JavaScript development using [Visual Studio Code][vscode-url], which is likely no surprise to
most people. My apps are typically all setup to run inside Docker with live reload enabled, meaning any of my changes are
reflected almost instantly, without the need for re-building any containers. **This is a really efficient way of developing.**

I was keen to try and adopt a similarly efficient setup for my .NET development. I had tried VS Code for .NET Core in the
past, but it never quite worked how I wanted, and I always felt a little less productive then I would be using Visual Studio.

This post aims to explain how to setup an efficient local .NET Core development environment in Docker with debugging and
live compilation (see changes immediately without needing to re-build the Docker container) using VS Code.

[vscode-url]: https://code.visualstudio.com/
[vs-url]: https://visualstudio.microsoft.com/vs/
