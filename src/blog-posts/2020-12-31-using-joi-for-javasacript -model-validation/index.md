---
title: "Using Joi for JavaScript Model Validation"
description: ""
---

# Introduction

JavaScript is a dynamically typed language, meaning the type of a variable is determined at runtime, and that variable
can have its value changed, such that it changes its type without resulting in an error. Depending on who you speak to,
this can be a good or bad thing. But regardless of one's opinion on whether it is good or bad, there are ways to improve
the typing in JavaScript to make our code more predictable and less error-prone.

One way is to use a model validator like [Joi][joi-github-url], which can take a defined schema with types explicitly
declared, and validate a JavaScript variable against it, typically an object.

This blog post explores the Joi validator library, and how it can be used to not only ensure JavaScript variables are
typed as expected, but also how attributes can be applied to ensure the structure and data of a variable conforms to a
set of validation rules.

# Terminology

To preface this blog post, it is worth being clear on terminology around typing.

There are two ways to describe the typing
of a language - whether it is statically or dynamically typed, and whether it is strongly or weakly typed. JavaScript is
both dynamically typed and weakly typed.

The difference between them is often misunderstood, but below is my understanding of the terminology:

-   Dynamically typed - as opposed to Statically typed, where the type of a variable is determined at run time, rather than
    compile time, and that variable can have its value changed such that it changes its type without resulting in an error.
    For example

```
let a = 1; // a is a number
a = 'one'; // a is now a string
```

-   Weakly typed - On a similar note, programming languages can also be strongly or weakly typed, which determines how strict
    the language is to implicit casting. A weakly typed language like JavaScript will be more forgiving on type casting, meaning the
    following does not error, but results in the string "35".

```
const result = 3 + '5';
```

# Validation Options

There are many different ways to make use of Joi, but I have picked out some of the key features which make this a great
library to use when dealing with data validation in JavaScript, particularly when saving arrays and objects to Mongo.

The [API documentation for Joi][joi-api-url] is excellent, and it also includes an [sandbox environment][joi-sandbox-url]
which is helpful for testing your schemas before you implement them in code. I will be using this sandbox environment to
demonstrate the features covered in this blog post.

## Data Type Validation

At the basics, Joi can be used to simply enforce that a variable in JavaScript is of a particular type, and this
includes arrays and objects, and all of the fields within them.

### Primitives

Variables can be validated to make sure they are primitive types, like a number, by simply declaring the following as the
schema:

```
const schema = Joi.number();
```

Calling `validate` on your schema will return an object with a `value` and `error` property, where `value` always contains
the value which has been validated, and `error` will be an object describing why the validation failed if it did, otherwise
it will be `undefined`. This is shown in the example below, where object destructuring has been used to simplify the
validation result retrieval.

```
const a = 1;
const b = 0.5;
const c = 'one';
const d = [1, 2, 3];

const { value, error } = schema.validate(a); // Passed
schema.validate(b); // Passed
schema.validate(c); // Failed
schema.validate(d); // Failed
```

### Reference Types

Joi can be used against reference types like objects and arrays, which can themselves include nested objects and arrays:

```
const objectSchema = Joi.object({
    forename: Joi.string(),
    surname: Joi.string(),
    age: Joi.number(),
});

const arraySchema = Joi.array().items(objectSchema);

const personA = {
    forename: 'Joe',
    surname: 'Bloggs',
    age: 'Twenty',
};

const personB = {
    forename: 'Jane',
    surname: 'Smith',
    age: 30,
};

const personC = {
    forename: 'Sarah',
    surname: 'Hart',
    age: 45,
};

objectSchema.validate(personA); // Fails due to 'age' not being a number
objectSchema.validate(personB); // Passed

arraySchema.validate([personA, personB, personC]); // Fails due to 'age' on personA not being a number
arraySchema.validate([personB, personC]); // Passed
```

### Specifying Multiple Types

It is possible to specify multiple types in a schema which Joi will use to verify that a value is one of the
allowed types.

For example, the below schema allows both a `string` and `number` value. Validation fails because the supplied data,
`{}`, is neither of those types.

```
const schema = Joi.alternatives().try(Joi.string(), Joi.number());

const { value, error } = schema.validate({});
```

## Data/Validation attributes

In addition to being able to specify the expected data types using Joi, attributes can optionally be applied to the types
to further enforce their contents. Some example attributes which can be applied are showcased below:

### Min/Max Value for Numbers

If you declare a number type, you can set the upper and/or lower bounds that value must take, otherwise Joi validation
will return an error. For example:

```
const schema = Joi.number().min(10).max(20);

schema.validate(15); // Passed
schema.validate(9);  // Fails as the number is not >= 10
schema.validate(21); // Fails as the number is not <= 20
```

### Min/Max Length for Strings

String types can be limited to a min and/or max number of characters, as shown below:

```
const schema = Joi.string().min(2).max(5);

schema.validate('Hello');        // Passed
schema.validate('H');            // Fails as the number of characters must be at least 2
schema.validate('Hello, World!); // Fails as the number of characters cannot exceed 5.
```

### Required and Optional Fields

Fields can be explicitly declared as required or optional; by default, all fields are optional.

It is important to understand that the `required` attribute validates against `undefined`, either implicitly
(the field not being there), or explicitly (the field has the value `undefined`).

`null` values are treated different in Joi, and this is explained in the [next section](#allowing-null-values).

Here are a few examples of using the `required` and `optional` attributes:

```
const schema = Joi.object({
    forename: Joi.string().required(),
    middleName: Joi.string().optional(),
    surname: Joi.string().required(),
    age: Joi.number().required(),
});

const invalidPerson = {
    forename: 'Sarah',
    middleName: 'Louise',
    age: 35,
};

const validPerson = {
    forename: 'Sarah',
    surname: 'Hart',
    age: 35,
};

schema.validate(invalidPerson); // Fails due to missing required 'surname'
schema.validate(validPerson);   // Passes, even though 'middleName' has not been set
```

### Allowing Special Values

#### Allowing Null Values {#allowing-null-values}

`null` values must be accounted for explicitly, as by default, they are not a valid value when validating with Joi, even
for `optional` fields:

```
const schema = Joi.object({
    forename: Joi.string().required(),
    middleName: Joi.string().optional(),
    surname: Joi.string().required(),
    age: Joi.number().required(),
});

const invalidPerson = {
    forename: 'Sarah',
    middleName: null,
    surname: 'Hart',
    age: 35,
};

schema.validate(invalidPerson); // Fails due to 'missingName' not being of type 'string'
```

Instead, `middleName` must be explicitly set to allow `null` values for validation to pass:

```
const schema = Joi.object({
    forename: Joi.string().required(),
    middleName: Joi.string().optional().allow(null),
    surname: Joi.string().required(),
    age: Joi.number().required(),
});

const invalidPerson = {
    forename: 'Sarah',
    middleName: null,
    surname: 'Hart',
    age: 35,
};

schema.validate(invalidPerson); // Passed
```

This not only applies to string data types, but any data types where `null` could be a valid value.

#### Allowing Empty Strings

Empty strings are not allowed by default, and must be enabled explicitly using the `allow` attribute as shown below:

```
const schema = Joi.string().allow('');
```

### Setting Default Values

Default values can be automatically set for any fields which are optional and undefined (implicitly or explicitly)
by using the `default` attribute as shown below:

```
const schema = Joi.object({
    forename: Joi.string().required(),
    middleName: Joi.string().optional().allow(null).default('unknown'),
    surname: Joi.string().required(),
    age: Joi.number().required(),
});

const person = {
    forename: 'Sarah',
    surname: 'Hart',
    age: 35,
};

const { value, error } = schema.validate(person);
```

In this example above, validation succeeds, and `value` contains the validation result object, which will contain the
`middleName` field set as the default value 'unknown'.

**The `default` attribute will not set a default value for a required field which is `undefined`; Joi will still return a
validation error.**

### Attribute Chaining

There are many more attributes available in Joi in addition to the ones covered above, but the key thing to learn is that
many of these attributes can be chained together to build up a more complex validation rule set for a schema.

For example, below shows a schema which permits either:

1. A string of length between 5 and 10 inclusive, which is not required but will default to 'Default value' if not
   supplied. The empty string and `null` are also permitted; or,
2. A number between -100 and 100 inclusive, which is not required but will default to 10 if not supplied. `null` is
   permitted.

```
const schema = Joi.alternatives().try(
    Joi.string()
        .min(5)
        .max(10)
        .optional()
        .default('Default value')
        .allow("", null),
    Joi.number()
        .min(-100)
        .max(100)
        .optional()
        .default(10)
        .allow(null)
);
```

## Conditional Validation

Joi allows for much more complicated validation rules to be set, where, for example, the validity of a value in a field
is conditional on the value of another field.

There are many combinations of conditional validators which can be used to make up very complex rule sets.

Below is just just one (rather contrived) example of using conditional validators in Joi, where `twitterHandle` is only
required if the person is less than 70 years old:

```
const schema = Joi.object({
    forename: Joi.string().required(),
    middleName: Joi.string().optional().allow(null).default('unknown'),
    surname: Joi.string().required(),
    age: Joi.number().required(),
    twitterHandle: Joi.string().when('age', {
        is: Joi.number().min(70),
        then: Joi.optional(),
        otherwise: Joi.required(),
    }),
});
```

## Restricting Array Items {#restricting-array-items}

As previously covered, it is possible to declare an array in a Joi schema using `Joi.array().items()`, where `items`
takes the Joi schema as a parameter which each of the items must adhere to.

Further to being able to set the type expected for each item, an array can be declared with a fixed set of items allowed
like so:

```
const schema = Joi.array().items(Joi.number().valid(1, 2, 3));

schema.validate([1, 2, 3, 4]); // Fails due to 4 not being included as an item option in the schema
schema.validate([1, 2]);       // Passed
```

Array items can also be restricted such that they must be a subset of another array in the schema. The example below
creates a schema where `playedSports` must be a subset of `allSports`, and `favouriteSports` must be a subset of
`playedSports`:

```
const allSports = ['tennis', 'football', 'badminton', 'basketball', 'rugby'];

const schema = Joi.object({
    name: Joi.string(),
    playedSports: Joi.array().items(Joi.string().valid(...allSports)),
    favouriteSports: Joi.array().items(
        Joi.string().valid(Joi.in('playedSports'))
    ),
});

const invalidObject = {
    name: 'Joe Bloggs',
    playedSports: ['tennis', 'football'],
    favouriteSports: ['tennis', 'rugby'],
}

const { value, error } = schema.validate(invalidObject);
```

Validation fails in this example because although 'rugby' is included in `allSports`, it is not included in
`playedSports`.

## Pattern Matching Object Keys Using Regex

If you have an object where you don't know the exact names of the keys, but you expect each one to follow a particular
naming pattern and data type, you can use Pattern Matching in Joi, as shown below. This helps avoid using `Joi.any()`
which acts as a "catch all" in validation.

The contrived and simplistic example below validates an object where its keys are Gmail email addresses, and the value is
a Boolean indicating whether the email address has been verified. Any keys which do not end in '@gmail.com', or where
their values are not booleans, will cause validation to fail.

```
const schema = Joi.object().pattern(/\w+@gmail.com/, Joi.boolean());
```

## References

Joi allows for much more dynamic validation through the use of references. References allow you to describe valid values
based on other values being validated in the schema, similarly to that used in
[Restricting Array Items](#restricting-array-items).

Being able to use references allows for more flexible validation, as the rule specifics do not need to defined up front,
but can be set and evaluated at runtime.

A simple example of using references in Joi can be seen below, which describes a schema for a game between two opponents,
where a player cannot play against themselves (the opponent names cannot be the same):

```
const schema = Joi.object({
    opponent1: Joi.object({
        name: Joi.string().disallow(Joi.ref('...opponent2.name')),
    }),
    opponent2: Joi.object({
        name: Joi.string(),
    }),
});

const invalidGame = {
    opponent1: {
        name: "Joe",
    },
    opponent2: {
        name: "Joe",
    },
};

const validGame = {
    opponent1: {
        name: "Joe",
    },
    opponent2: {
        name: "Sarah",
    },
};

schema.validate(invalidGame); // Fails due to the opponents sharing the same name
schema.validate(game);        // Passed
```

This example uses `Joi.ref` paired with the `...` separator to gain access to the "grandparent" of the current context,
and then access `opponent2.name`.

## Strip Unknown

When validating against a schema using Joi, an `options` object may be passed to configure how the validation should run.
One of the available options is `stripUnknown`.

When set to `true`, `stripUnknown` instructs Joi to omit any fields from the validated object which are not defined in
schema. This can be very useful for ensuring you only ever persist data to Mongo which is expected and defined in the
schema.

An example of `stripUnknown` in practice can be seen below:

```
const schema = Joi.object({
    forename: Joi.string(),
    surname: Joi.string(),
    age: Joi.number(),
});

const data = {
    forename: 'Sarah',
    surname: 'Hart',
    age: 35,
    passportNumber: '123SH456',
}

const { value, error } = schema.validate(data, {
    stripUnknown: true,
});
```

Though `data` has the `passportNumber` field, the result of validation, stored in `value`, does not.

# Performance

Through my own experience with Joi, I have not noticed any performance issues with using Joi on particularly large schemas
and data sets.

It is expected that at some point, calling `validate` on a complex schema for some large data set, particularly one which
is very nested, will see some performance degradation and validation running slowly. However I am yet to experience this,
and it is unlikely performance would be an issue for any real use case of Joi.

In the future I may look further into this topic to understand what aspects of Joi and dataset sizes might contribute to
poor performance.

[joi-github-url]: https://github.com/sideway/joi
[joi-api-url]: https://joi.dev/api
[joi-sandbox-url]: https://joi.dev/tester/
