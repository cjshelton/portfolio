---
title: "Javascript Modules: Explained"
description: ""
---

# Introduction

This post aims to introduce modules in Javascript, including why they are used and some of the the different formats
available, and when to use them.

Modules are a fundamental building block of modern JavaScript application development, but I, like many
others, felt I had some gaps in my understanding across the different formats, so I was keen to dig a bit deeper.

## Modules in JavaScript

As with any programming language, we as developers are always after ways of writing our code in a clear, testable and
maintainable way. Modules in JavaScript help us achieve this by allowing us to split our code into logical chunks, in
separate files, and with a way to share these modules with one another to build out our application.

Since JavaScript can be written for both client and server-side applications, there are different things to take into
account when dealing with modules, and it's worth understanding these differences and how it affects the code you write.

### Modules in Node (Server)

Node is built on the idea of modules, and anyone familiar with modern JavaScript application development will be
familiar with the (in)famous `node_modules` folder. Node has had support of modules since it was introduced, making use
of the [CommonJS](#common-js) format to write files, and even entire libraries, which can be shared within or across
applications.

### Modules in the Browser (Client)

Until the introduction of [ES Modules](#es-modules) in ES2015 (ES6), modules were not supported in browsers in any format
natively, and developers had to (and for the most part still do) rely on bundling tools like [Webpack][webpack-url] or
[Browserify][browserify-url], or use a client-side library like [require.js][requirejs-url], to make use of them.

But writing modular JavaScript still plays a fundamental role when building large-scale client-side applications,
enabling dependencies of files to be declared explicitly per file, without worrying about the order in which scripts
must be positioned in the HTML, and without the need for one huge file containing all of your code.

_When JavaScript was not so dominant, and applications weren't as feature rich, JavaScript was typically
written across separate files, and if any of those files depended on another, like JQuery for example, they had to be
declared in a specific order to work, which made for some frustrating errors._

### Module Formats

There are different formats available for creating and using modules in JavaScript depending on your tooling available, and whether
you're developing for the browser or Node. What really sets these different module formats apart as a developer, really
comes down to how you include dependencies in a file, and how you expose functionality from a file.

Being able to choose what to expose from a module is very important, helping us to encapsulate state and functionality
within the module itself, without exposing everything to the outside world, or needing to pollute the global `window`
object in the browser.

The most common formats, and those which I'll be covering in detail here include:

-   [CommonJS](#common-js)
-   [ES Modules](#es-modules)
-   [AMD](#amd)

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

stringUtils.toUpperCase('hello, world!');

```

Ignoring the trivial purpose of the functions themselves, the `stringUtils.js` module is exposing two functions through
an object assigned to `module.exports` -- a special keyword in CommonJS modules which is always available, and is used to
expose functionality from a module. The `index.js` file simply uses the other special keyword -- `require` -- to declare
that `stringUtils` is a dependency to be used.

**Require statements in CommonJS are executed synchronously, one after another, which is fine for server-side execution,
but is another reason why the format is unsuitable for browsers where performance is key.**

When the value of `module.exports` is an object, it can also be de-structured on require as shown below -- a common
pattern to improve the readability of your dependencies.

```
// index.js

const { toLowerCase, toUpperCase } = require('./stringUtils');

toUpperCase('hello, world!');
```

That covers the basic usage of CommonJS modules, and is how they are mainly used today, but there are other ways of exporting
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
same object instance in memory, and modifications to one will be reflected in the other, and vice versa. This means the two definitions
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
approach and how it could cause you problems if used incorrectly.

## Using CommonJS for Client-Side Development {#using-commonjs-for-client-side-development}

As previously mentioned, the CommonJS module format is not understood by the browser, and using the keywords `require`
and `module.exports` results in a console error. Since ES2015 (ES6), some browsers support modules natively, but in the
ES Module format which I'll be covering [next](#es-modules).

If you're wanting to write JavaScript using the CommonJS module format to be run in the browser, you will need to use
a bundling tool like [Webpack][webpack-url] or [Browserify][browserify-url]. These tools will intelligently scan your
code and output a single JavaScript file (bundle) which can be referenced in the HTML, and executed as normal by the
browser. So really, the browser is unaware of the use of CommonJS modules, or that the code was originally made up of
many different files in the first place.

# ES Modules {#es-modules}

ES2015 (ES6) introduced a module system to the ECMAScript standard, enabling modern browsers to understand modular
JavaScript natively, without the need for bundling. ES Module syntax can easily be recognised by the `import` and
`export` terms as shown in the upcoming examples.

**Note: Though modern browsers can handle JavaScript modules natively using the ES Module format, it is worth pointing
out that it is common practice to use the newer ES Module format for client-side JavaScript, whilst still using a module
bundler like [Webpack][webpack-url] to bundle your assets into a single JS file. This is
[explained in more detail](#using-es-modules-in-the-browser-without-bundling) later.**

When importing and exporting with ES Modules, you have a few options when compared to using CommonJS. There are two
ways to export from a module -- Named Exports and Default Export.

## Default Export

The default export allows for a single value to be exported from a module, be that an object, function or primitive type,
much like the way `module.exports` behaves in CommonJS:

```
// stringUtils.js

function toUpperCase(input) {
    return input ? input.toUpperCase() : input;
}

function toLowerCase(input) {
    return input ? input.toLowerCase() : input;
}

export default {
    toUpperCase,
    toLowerCase,
}
```

A default export can then be imported using using the syntax below. **Note: There can be only one default export per
module, and default exports cannot be de-structured on import due to a conflict with the syntax of importing a named
export.**

```
// index.js

import stringUtils from './stringUtils';

stringUtils.toUpperCase('hello, world!');
```

## Named Export

Another approach is for modules to export its members through named exports, where each member is exported using a
separate export statement, providing a name for how that member should be imported:

```
// stringUtils.js

export function toUpperCase(input) {
    return input ? input.toUpperCase() : input;
}

export function toLowerCase(input) {
    return input ? input.toLowerCase() : input;
}
```

These members can then be imported using various techniques as shown below. **Note: Trying to import using
`import stringUtils from...` will not work when only named exports are being used, as this syntax is reserved for
importing a default export only.**

### Named Imports

Individual exports can be optionally imported into the module using object de-structuring syntax along with their
explicitly exported names, as shown below. This is the most common way of importing named exports.

```
// index.js

import { toUpperCase } from './stringUtils';

toUpperCase('hello, world!');
```

### Import All Exported Members

It is possible to import all named exports in one go using the `*` keyword along with an alias as shown below. Much like
the default import syntax, this makes all named exports available on the supplied alias -- `stringUtils` in this example.

```
// index.js

import * as stringUtils from './stringUtils';

stringUtils.toUpperCase('hello, world!');
stringUtils.toLowerCase('HELLO, WORLD!');
```

### Named Imports Using An Alias

If you want to alter the name of a named export when importing, you can use the `as` keyword to provide an alias, which
can be useful for shortening the name of any of the imported members.

```
// index.js

import {
    toUpperCase as toUpper,
    toLowerCase as toLower
} from './stringUtils';

stringUtils.toUpperCase('hello, world!');
stringUtils.toLowerCase('HELLO, WORLD!');
```

## Combining Default Export With Named Exports

It is possible to export from a module using both a single default export, and as many named exports as you wish:

```
// stringUtils.js

export function toUpperCase(input) {
    return input ? input.toUpperCase() : input;
}

export default {
    toLowerCase: toLowerCase,
}
```

A mixture of the approaches covered previously can be used to import what you require from this type of module:

### Import All Exports

Using the `*` keyword will import all exports, including default and named, and make them available on the alias
provided. Notice the additional `.default` required to access the default exported member.

```
// index.js

import * as stringUtils from './stringUtils';

stringUtils.toUpperCase('hello, world!');
stringUtils.default.toLowerCase('HELLO, WORLD!');
```

### Import Default and Named Exports

It is possible to import both the default and named exports from a module using different syntax, all within the same
import statement. This can be useful for importing the default export as normal (`stringUtils`), whilst also selectively
importing any named exports and optionally providing an alias for them. The example below hopefully showcases this a bit
better:

```
// index.js

import
    stringUtils,
    { toUpperCase as toUpper }
from './stringUtils';

toUpper('hello, world!');
stringUtils.toLowerCase('HELLO, WORLD!');
```

## Tree Shaking

Tree Shaking is a process of removing JavaScript code (and other ECMAScript languages) which is not used
(aka "dead code") in an effort to optimise the final bundle produced by a tool like [Webpack][webpack-url] -- the less
JavaScript code we can send over the network to the browser the better! [Webpack][webpack-url] has support for Tree
Shaking, and has a [helpful guide][tree-shaking-url] on how to get started.

Tree Shaking is possible using ES Modules because of its static structure, meaning the code can be analysed at compile
time, determining what is being imported and exported in each module. This enables a dependency tree to be generated
without even needing to run the code, and enabling a tool like Webpack to determine what code is not being used which can
be excluded from the production-ready bundle. In contrast, CommonJS has a more dynamic structure, where dependencies are resolved
only at run time rather than at compile time, which makes it unsuitable for Tree Shaking optimisation.

### An Example - Lodash

A common misconception is that importing named functions from Lodash as shown below is a way to avoid the whole of the
library being imported, which is notoriously large. But that alone is not enough, you have to also employ Tree Shaking.

```
import { isNil, groupBy, size } from 'lodash';
```

With the named imports above, it is clear that only these functions are needed from Lodash, and this is
where Tree Shaking would come in. But it's important to understand that without Tree Shaking as part of your build
process, the entire library will still be included in your final bundle.

I have trivialised the process a bit here, and there's more to it than "just enabling Tree Shaking", so I encourage
you to read more, but I felt it would be worth mentioning whilst on the topic of ES Modules.

## Using ES Modules in the Browser without Bundling {#using-es-modules-in-the-browser-without-bundling}

The above has assumed that you are still using a module bundler like [Webpack][webpack-url], because even though most
modern browsers do now support the use of modules natively, there are still a few bumps in the road, mainly the network
overhead involved; the browser will be making lots of HTTP calls to fetch all of the required module files, which will
slow down the loading of a web page significantly, as network requests are typically the bottleneck for most applications.

### HTTP/2

Though the common approach for writing client JavaScript is using ES Modules along with a bundler, the future is looking
promising for running modules natively in the browser, particularly due to the introduction of HTTP/2 -- the first
major upgrade to the original HTTP protocol in over 15 years. HTTP/2 brings some major improvements to the way internet
traffic is handled, and one of the most significant changes is the introduction of multiplexing -- the ability to request
multiple resources (in this case, modules) from a server at the same time using a single TCP connection, rather than each
one being requested individually and sequentially, as in HTTP/1.1.

I recommend reading up further on HTTP/2 and some of the other improvements it brings, and this
[Cloudflare page][cloudflare-http2-url] serves as a good introduction in my opinion.

## Using ES Modules in Node

As of Node v13.9.0, ES Modules can be used natively for creating your modular server side JavaScript; prior to that
version, this was an experimental feature which had to be explicitly enabled.

In order to use ES Modules in Node, files need to be saved with the `.mjs` extension and imported with the extension
included, or more simply, you can specify `{ "type": "module" }` in your `package.json`.

The adoption of ES Modules in Node is a promising sign towards having a more unified module experience across both the
client and server in the not too distant future.

# AMD {#amd}

The final module format I will cover is AMD, which stands for Asynchronous Module Format, and was very popular in the
early days of client-side JavaScript development as the way to write modular code. With AMD, each module can be loaded
asynchronously -- perfect for executing JavaScript in the browser for quicker page load times.

Unlike ES Modules which can be run natively in most modern browsers, a library must be used which implements the AMD API
in order to use AMD modules. The most popular library for writing modules in this format is [RequireJS][requirejs-url].

AMD has largely been superseded by the use ES Modules as the de-facto way to write modular JavaScript for the browser,
but it's still worth covering off the main syntax. Though the AMD syntax looks very differing to working with
[CommonJS](#common-js) and [ES Modules](#es-modules), the principles are exactly the same.

## Declaring a Module

The reserved word `define` is used to create an AMD module, which is a function which takes a callback as a parameter.
The callback function should be used setup the module, declaring functions and variables as necessary, and returning
either an object, function or primitive type, which acts as the exported functionality.

Below is an example of a simple module which exports an object containing the two functions previously shown.

```
// stringUtils.js
define(function () {
    const toUpperCase = (input) => {
        return input ? input.toUpperCase() : input;
    };

    const toLowerCase = (input) => {
        return input ? input.toLowerCase() : input;
    };

    return {
        toUpperCase,
        toLowerCase,
    };
});
```

## Importing a Module

When declaring a module, dependencies can be imported by also supplying an array of strings as a parameter to `define`,
before the callback function, as shown below. Each string should either correspond to a module using a relative
path, or the name of a module from `node_modules`. Each dependency should additionally be added as a parameter to the
callback function, which will take on the instance of the dependency once loaded.

```
// index.js

define(['./stringUtils'], function (stringUtils) {
    const greeting = 'Hello, world!';

    return stringUtils.toUpperCase(greeting);
});
```

As originally mentioned, AMD is asynchronous, meaning the callback function supplied to `define` will not execute until
all dependencies have loaded and are ready to be used in the callback function.

[webpack-url]: https://webpack.js.org/
[browserify-url]: http://browserify.org/
[requirejs-url]: https://requirejs.org/
[tree-shaking-url]: https://webpack.js.org/guides/tree-shaking/
[cloudflare-http2-url]: https://www.cloudflare.com/website-optimization/http2/what-is-http2/
[requirejs-url]: https://requirejs.org/
[babel-url]: https://babeljs.io/
