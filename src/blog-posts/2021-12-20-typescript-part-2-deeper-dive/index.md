---
title: "TypeScript: Part 2 - A Deeper Dive"
description: ""
---

# Introduction

TODO: Add the following to src/data/blog-posts.js:

"TypeScript: Part 2 - A Deeper Dive": {
tags: [],
},

## Type Narrowing

Type narrowing is the process of refining a type down to one which is more specific than originally declared. Type narrowing is useful when dealing with union types (types made up of multiple types) and types with optional fields (those which could be undefined), helping you to control the flow of your code through different paths.

There are multiple ways to narrow types, but one of the most common is by using a type guard which uses conditional branches to work on more specific types. See the example below to see a type guard in action.

This example declares a `square` function which squares the input value provided to it, but the input can either be a number or a string, where the string can be the Roman numeral representation of an integer number. To represent this, the input function declares an input parameter with a union type of `number | string`.

```
// Trivial way of converting a Roman numeral to a number.
const romanNumerals: Record<string, number> = {
    "I": 1,
    "II": 2,
    "III": 3,
};

const square = (input: number | string): number => {
    return Math.pow(input, 2);
}
```

Without the use of a type guard to narrow the type of `input`, TypeScript tells us that we can't simply call `Math.pow` with `input` because it could be a string, and that's not a valid use of the `pow` function; it expects a `number` only. TypeScript gives us this error:

<img src="./type-narrowing-without-type-guard.png" alt="TypeScript error message explaining that the pow function cannot be called with a variable of type string or number" />

To fix this and help the TypeScript compiler, a type guard can be used to conditionally handle the different types in the union:

```
const romanNumerals: Record<string, number> = {
    // Removed for brevity.
};

const square = (input: number | string): number => {
    if (typeof input === "number") { // TypeGuard
        return Math.pow(input, 2);
    }

    const romanNumeralAsNum = romanNumerals[input];
    return Math.pow(romanNumeralAsNum, 2);
}
```

The type guard allows us to have conditional logic based on the type of `input`. If `input` is a number, then TypeScript knows that within the `if` block, `input` has to be a `number` and so it can safely call `Math.pow`. If the type check fails, then TypeScript knows it must be a `string`, and so we convert to the number equivalent of the Roman numeral and then call `Math.pow`.

If we hover over `input` in the different code branches, TypeScript gives us the actual type it has narrowed down to and not the union type, thanks to the type guard.

<img src="./type-narrowing-with-type-guard.png" alt="TypeScript narrowing the input type to number in the if block and string otherwise" />

Type guards can be more complex than this, and can instead use other ways of determining the type of a variable, including using the `instanceof` keyword or by having a special `kind` property on your custom object types. See the [TypeScript Handbook][typescript-handbook-type-narrowing-url] for a more detailed look into type narrowing.

## Module Imports

TypeScript has support for all different module types, but is opinionated towards ES Modules (ESM) as defined in ECMAScript 2015 (ES6) - using the `import` and `export` keywords. A new TypeScript project typically comes with default settings to allow support for working with ESM over other module systems like CommonJS.

TypeScript, being a transpiler, is able to treat CommonJS modules (and other module types) similar to ESM. This is really powerful as is allows for ESM import syntax to be used when working with CommonJS libraries in Node, like `fs` for example:

```
// Using an ESM import statement
import fs from 'fs';

// Rather than the more traditional Node CommonJS import statement
const fs = require('fs');
```

This may be seen as a subtle advantage, but it really does help drive more consistency in the code you write, especially when developing on a codebase meant for multiple environments, like the browser and Node.js for example. For more information on this interoperability between different module systems in TypeScript, see the [documentation on the `esModuleInterop` flag][typescript-esmoduleinterop-url].

## Type Aliases and Interfaces

Custom types can be defined either using the `type` or `interface` keywords. If you have used a strongly typed language like C# or Java before, you should be familiar with an interfaces being a contract which describes the structure of an object. A type is not much different, and that is a cause of confusion with the language - even the [TypeScript documentation][typescript-handbook-types-vs-interfaces-url] fails to concisely detail when to use one over the other, and mentions "for the most part, you can choose based on personal preference".

Some of the key differences include:

-   Interfaces can be extended to add fields to its structure (known as declaration merging), but types cannot.
-   Interfaces cannot be defined as a primitive value, but types can (e.g. `type SanitizedString = string`).
-   In certain scenarios, using interfaces over types will yield more useful and concise type error messages.

For lack of a clear way to really distinguish which to go with, the documentation recommends that interfaces should be used by default unless there is a need to use the features of a type. This is generally what I've been following, though there are some occasions where using a type just feels more natural, like defining

## Type Definition Files

## Encapsulation

Readonly<T> and ReadonlyArray<T>, private readonly, const assertion

## Generics

## Interfaces and Types

## OOP

-   implementing interfaces, inheritance, static methods.

## Working with Third-Party Libraries

-   Really helpful when types are supported
-   Type Definition files
-   @types libs

## Type Inference

## Union and Intersection Types

## None Types

any, unknown, never and void types (https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) To get an error when TypeScript produces an any, use "noImplicitAny": true, or "strict": true in tsconfig.json.

## typeof, instance of

## Namespaces

## Control-flow Based Type Analysis

# My Key Takeaways / Fave Parts

-   Explicit returns
-   Using interfaces and types

# Do I Really Need TypeScript?

You may have noticed by now that VSCode is a very capable IDE, and seems to have typing support and helpful intellisense built-in, so why the need for TypeScript?

-   VSCode has a setting to check js files
-   VSCode reads TS files and type definition files and JSDoc comments to help.

# Things to Note

-   Intro
-   What I have learnt / my experience / used the most / got most benefit from
-   Features I like (not necessarily used)
-   Features I dislike
-   Is it worth it? (compare to none and JSDoc)
-   Resources

"The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked)."

"TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system."

"You may have written JavaScript in Visual Studio Code, and had editor auto-completion. Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript."

"You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features."

Doesn't change anything about how code runs. Purely a development tool.

// TypeScript is a Structural Type System. A structural type
// system means that when comparing types, TypeScript only
// takes into account the members on the type.

// This is in contrast to nominal type systems, where you
// could create two types but could not assign them to each
// other. See example:nominal-typing

// For example, these two interfaces are completely
// transferrable in a structural type system:

interface Ball {
diameter: number;
}
interface Sphere {
diameter: number;
}

```
type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}
interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}
```

```
// That said, we recommend you use interfaces over type
// aliases. Specifically, because you will get better error
// messages. If you hover over the following errors, you can
// see how TypeScript can provide terser and more focused
// messages when working with interfaces like Chicken.

owl = chicken;
chicken = owl;
```

```
// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it
// a second time.

interface Kitten {
  purrs: boolean;
}

interface Kitten {
  colour: string;
}

// In the other case a type cannot be changed outside of
// its declaration.

type Puppy = {
  color: string;
};

type Puppy = {
  toys: number;
};

// Depending on your goals, this difference could be a
// positive or a negative. However for publicly exposed
// types, it's a better call to make them an interface.

// One of the best resources for seeing all of the edge
// cases around types vs interfaces, this stack overflow
// thread is a good place to start:
```

Empty types

TypeScript determines if the call to fn here is valid by seeing if the provided argument is a valid Empty. It does so by examining the structure of { k: 10 } and class Empty { }. We can see that { k: 10 } has all of the properties that Empty does, because Empty has no properties. Therefore, this is a valid call!

A language server providing IDE-like features to a broad set of text-editors

A logic system that drives constraints from code structures and reasons about them systematically to find inconsistencies.

helps us reason more about our code, show more intent and help our future selves or other developers when it comes to making changes in the future.

Types

unknown the top type.
never the bottom type.
object literal eg { property: Type }
void a subtype of undefined intended for use as a return type.
T[] mutable arrays, also written Array<T>
[T, T] tuples, which are fixed-length but mutable
(t: T) => U functions

Built in predicates

The following types have built-in predicates:

Type Predicate
string typeof s === "string"
number typeof n === "number"
bigint typeof m === "bigint"
boolean typeof b === "boolean"
symbol typeof g === "symbol"
undefined typeof undefined === "undefined"
function typeof f === "function"
array Array.isArray(a)
object typeof o === "object"

# TypeScript Fundamentals

## Types

TypeScript understands all of the primitive values built-in to JavaScript, including the more common ones like `number` and `string`, and those used less common like `bigint` and `symbol`.

It also understands objects, undoubtedly the most popular data type used in JavaScript, and can distinguish at compile time between objects, functions and arrays, which are all fundamentally objects in JavaScript. TypeScript also lets you create your own custom object types with a custom name using types and interfaces - more on this in the next section.

# Conclusion

My portfolio site is not written in TS, and I probably won't invest the time to migrate it. But all new projects I do I choose TypeScript by default.

When you combine TypeScript with a linter, a suite of unit tests, a code formatter, an efficient CI process, you really start to get more confidence in the application your building.

    -   Can make you feel like you need to write OOP, but you don't need to. You can make as much or as little use of TypeScript as you want. You'll get a lot of help just from using the typings in external libraries.

# Resources

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html

[statically-typed-url]: https://en.wikipedia.org/wiki/Type_system#Static_type_checking
[dynamically-typed-url]: https://en.wikipedia.org/wiki/Type_system#Dynamic_type_checking_and_runtime_type_information
[javascript-popularity-url]: https://pypl.github.io/PYPL.html
[javascript-maturity-url]: https://en.wikipedia.org/wiki/JavaScript#Reaching_maturity
[typescript-url]: https://en.wikipedia.org/wiki/TypeScript
[typescript-target-config-url]: https://www.typescriptlang.org/tsconfig#target
[typescript-compiler-npm-url]: https://www.typescriptlang.org/download
[babeljs-url]: https://babeljs.io
[spread-operator-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[javascript-info-url]: https://en.wikipedia.org/wiki/JavaScript
[create-react-app-typescript-url]: https://create-react-app.dev/docs/adding-typescript/#installation
[vue-cli-typescript-url]: https://v3.vuejs.org/guide/typescript-support.html#project-creation
[google-v8-url]: https://v8.dev/
[ts-loader-url]: https://github.com/TypeStrong/ts-loader
[duck-typing-wikipedia-url]: https://en.wikipedia.org/wiki/Duck_typing
[typescript-esmoduleinterop-url]: https://www.typescriptlang.org/tsconfig#esModuleInterop
[typescript-handbook-type-narrowing-url]: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
[typescript-handbook-types-vs-interfaces-url]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
