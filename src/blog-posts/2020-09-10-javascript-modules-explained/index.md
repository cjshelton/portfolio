---
title: "Javascript Modules: Explained"
description: ""
---

# Introduction

This post aims to introduce modules in Javascript, including why they are used and the different formats available, and
when to use them.

Modules are a fundamental building block of modern JavaScript application development, but I, like many
others, felt I had some gaps in my understanding, so I was keen to dig a bit deeper.

## Modules in JavaScript

As with any programming language, we as developers are always after ways of writing our code in a clear, testable and
maintainable way. Modules in JavaScript help us achieve this by allowing us to split our code into logical chunks, in
separate files, and with a way to share these modules with one another to build out our application.

Modules also play a fundamental role when building large-scale client-side applications, by enabling dependencies of
files to be declared explicitly per file, without worrying about the order in which scripts must be positioned
in the HTML. *When JavaScript was not so dominant, and applications weren't as feature rich, JavaScript was typically
written across separate files, and if any of those files depended on another, like JQuery for example, they had to be
declared in a specific order to work, which made for some frustrating errors.*

There are different formats for creating and using modules in JavaScript depending on your tooling available, and whether
you're developing for the browser or Node. The most common formats, and those which I'll be covering in detail here
include:
- CommonJS
- ES Modules
- AMD

# CommonJS

# ES Modules

# AMD