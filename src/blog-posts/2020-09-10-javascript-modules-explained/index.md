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
you're developing for the browser or Node. What really sets these different module formats apart as a developer, really
comes down to how you include dependencies in a file, and how you expose functionality from a file.

Being able to choose what to expose from a module is very important, helping us to encapsulate state and functionality
within the module itself, without exposing everything to the outside world, or needing to pollute the global `window`
object.

The most common formats, and those which I'll be covering in detail here include:
- [CommonJS](#common-js)
- [ES Modules](#es-modules)
- [AMD](#amd)

# CommonJS {#common-js}

The CommonJS format is arguably the most well known, even by those who don't know it by name. This format is understood
natively by Node, and so is used for building server-side JavaScript applications running in Node. It can be easily
recognised by the use of the `require` and `exports` terms seen in the examples below.

**The CommonJS format is not understood by the browser, and so cannot be used without additional tooling -- [I'll come to
that later](#using-commonjs-for-client-side-development). Executing a file in the browser which uses `require` will
result in a console error reading `Uncaught ReferenceError: require is not defined`.**

In this format, dependencies are included in module using the `require` keyword, whilst `module.exports` is used for
declaring what we want to expose from the module to the outside world.

An example of a typical CommonJS module setup can be seen below:

```
// stringUtils.js

function toUpperCase(input) {
    return input ? input.toUpperCase() : input;
}

function toLowerCase(input) {
    return input ? input.toLowerCase() : input;
}

module.exports = {
    toLowerCase,
    toUpperCase,
}
```
```
// index.js

const stringUtils = require('./stringUtils');

const str = 'hello, world!';

console.log(stringUtils.toUpperCase(str));

```

Ignoring the trivial purpose of the functions themselves, the `stringUtils.js` module is exposing two functions through
an object assigned to `module.exports` -- a special keyword in CommonJS modules which is always available, and is used to
expose functionality from a module. The `index.js` file simply uses the other special keyword -- `require` -- to declare
that `stringUtils` is a dependency to be used.

That is the basic usage of CommonJS modules, and is how they are mainly used today, but there are other ways of exporting
and requiring, which makes them a bit more like [ES Modules](#es-modules). If you're intrigued, continue reading for a
more in-depth look at CommonJS modules.

## A Deeper Look into CommonJS Modules

Every CommonJS module in Node has the special keyword `module` available, along with a few others. `module` is an object
with an `exports` property on it, set initially to an empty object. The value assigned to this `module.exports` property
is what is exposed from the module.

There is also another way of exposing from a module, and that is by using another special keyword available -- `exports`,
as seen below.

```
// stringUtils.js

function toUpperCase(input) {
    return input ? input.toUpperCase() : input;
}

function toLowerCase(input) {
    return input ? input.toLowerCase() : input;
}

exports.toUpperCase = toUpperCase;
exports.toLowerCase = toLowerCase;
```

`exports` here is an object, but it is important to understand that for every module, it is set to equal the value of
`module.exports`, and with how referencing works in JavaScript, making them equal means that they are pointing to the
same object instance, and modifications to one will be seen in the other, and vice versa. This means the two definitions
of `stringUtils.js` above are actually the same, since they are both adding the two functions to the `module.exports`
object, just in slightly different ways.

The below snippet will hopefully explain this a little better, showing how you can think of a JavaScript module in Node:

```
// Credit: https://stackoverflow.com/a/16383925

const module = {
    exports: {}
};

const exports = module.exports;

// Your code here...

return module.exports;
```

Given it is the value of `module.exports` which is exposed from a module, and the typical approach is to return a new
object rather than modifying the existing one, you must be careful when also using the `exports` keyword, as `exports`
will no longer be pointing to the same `module.exports` object. In the example below, only the `toLowerCase` function
will be available; `toUpperCase` has been lost since we changed the value of `module.exports`, and `exports` no longer
points to it.

```
// stringUtils.js

function toUpperCase(input) {
    return input ? input.toUpperCase() : input;
}

function toLowerCase(input) {
    return input ? input.toLowerCase() : input;
}

exports.toUpperCase = toUpperCase;

module.exports = {
    toLowerCase,
}
```

Convention is to use `module.exports`, assigning it to a new object, but it is worth knowing about this alternative
approach and how it could cause you problems when used incorrectly.

## Using CommonJS for Client-Side Development {#using-commonjs-for-client-side-development}

# ES Modules {#es-modules}

# AMD {#amd}
