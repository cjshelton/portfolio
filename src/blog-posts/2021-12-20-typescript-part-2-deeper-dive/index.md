---
title: "TypeScript: Part 2 - A Deeper Dive"
description: ""
---

# Introduction

<div class="img-single-small">
  <img src="./images/typescript-dig.png" alt="TypeScript logo with a shovel digging into the T letter" />
</div>

This is the second post in a series about TypeScript. The [first blog post](/blog/2021/12/17/typescript-part-1-an-introduction/) introduces TypeScript, focusing more on what it is and why you might want to use it in your development workflow. This post will build on that by digging deeper into the TypeScript language, looking at the syntax used when handling more complex typing scenarios and how these can help you write cleaner and more structured code.

# Types

## Built-in Types

TypeScript understands all of the primitive values built-in to JavaScript, including the more common ones like `number` and `string`, and those used less common like `bigint` and `symbol`. Below is an example of a function which takes a few parameters using some of these built-in types:

```
function myFunction(manufacturer: string, doorCount: number, isInsured: boolean) {
    // Code removed for brevity.
}
```

It also understands objects, undoubtedly the most popular data type used in JavaScript, and can distinguish at compile time between objects, functions and arrays, which are all fundamentally objects in JavaScript. TypeScript also lets you create your own custom object types with a custom name using types and interfaces - more on this in the next section.

## Custom Types

Aside from supporting the built-in types in JavaScript, the power of TypeScript really comes into play with custom types - types that you have defined yourself that have some meaning within the context of your code base.

As JavaScript developers, we're constantly working with objects, and these are most commonly created using object initialization like below:

```
const car1 = {
    manufacturer: 'Audi',
    doorCount: 5,
    isInsured: true,
};
```

The problem comes when we want to create more of same types of objects. If we create another object - `car2` - we have no way of saying that two objects are meant to have the same structure. This becomes a problem when we need to change this structure in the future, like adding a new property; we'll then have a manual and error-prone job of updating all object initializations with this new property.

The exception is if JavaScript classes are being used which would catch all instantiations, but generally classes are not used so widely across JavaScript code bases because of the [OOP][typescript-oop-url] nature it introduces.

TypeScript helps us solve this problem through custom types. There are two main ways of creating custom types - type aliases and interfaces.

### Type Aliases and Interfaces

Custom types can be defined either using the `type` or `interface` keywords. If you have used a strongly typed language like C# or Java before, you should be familiar with an interfaces being a contract which describes the structure of an object. A type is not much different, and that is a cause of confusion with the language - even the [TypeScript documentation][typescript-handbook-types-vs-interfaces-url] fails to concisely detail when to use one over the other, and mentions "for the most part, you can choose based on personal preference".

Some of the key differences include:

-   Interfaces can be extended to add fields to its structure (known as declaration merging), but types cannot.
-   Interfaces cannot be defined as a primitive value, but types can (e.g. `type SanitizedString = string`).
-   In certain scenarios, using interfaces over types will yield more useful and concise type error messages.

For lack of a clear way to really distinguish which to go with, the documentation recommends that interfaces should be used by default unless there is a need to use the features of a type. This is generally what I've been following, though there are some occasions where using a type just feels more natural, like defining

There are two main ways of creating custom types in TypeScript

[typescript-oop-url]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
