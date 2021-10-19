---
title: "Building a Serverless Booking System with Next.js"
description: ""
---

# Introduction

My family recently acquired a static caravan to be shared throughout the year as a place to have a break. My first thought
was

<p class="italic">"This will be great."</p>

And my second thought, like most other software engineers, was

<p class="italic">"I think a custom booking system is in order here."</p>

Jokes aside, something was needed to help coordinate who's in the caravan and when throughout the year, and I
saw this as an opportunity to see how quickly I could get something working in the space of a few evenings, using serverless
technology and SaaS products, with zero setup or operating costs.

I achieved my goal with the help of [Next.js][nextjs-url], [Auth0][auth0-url], [Supabase][supabase-url] and [Netlify][netlify-functions-url]
(for hosting and serverless functions), and it's all written in [TypeScript][typescript-url] too.
Read on to find out more about these technologies and how they helped me achieve my goal.

<div class="flex-images">
    <div class="img-container">
        <div class="img-container-inner">
            <img src="./nextjs-logo.png" alt="Next.js logo" />
        </div>
    </div>
    <div class="img-container">
        <div class="img-container-inner">
            <img src="./auth0-logo.png" alt="Auth0 logo" />
        </div>
    </div>
    <div class="img-container">
        <div class="img-container-inner">
            <img src="./supabase-logo.png" alt="Supabase logo" />
        </div>
    </div>
    <div class="img-container">
        <div class="img-container-inner">
            <img src="./netlify-logo.png" alt="Netlify logo" />
        </div>
    </div>
    <div class="img-container">
        <div class="img-container-inner">
            <img src="./ts-logo.png" alt="TypeScript logo" />
        </div>
    </div>
</div>

# Going Serverless

<img src="./serverless.png" alt="Serverless diagram" />
<p class="img-attribute">Source: https://assets2.botmetric.com/wp-content/uploads/2017/10/The-benefits-of-going-serverless-1.png</p>

Serverless technology has become hugely popular since the introduction of Cloud Computing, with developers realising
that the costs, effort and lead times associated with building and maintaining your own server can be drastically reduced.

Serverless is not truly serverless, but its name comes from the perception of the developers who themselves do not need
to think in terms of building and maintaining a server; instead relying on SaaS products and services like [AWS Lambda][aws-lambda]
to handle most of the work for them.

Aside from saving time and costs, serverless also helps to mitigate risk and responsibility in certain key areas like
scalability, authentication and GDPR, to name a few.

Going serverless played a significant role in acheiving my main goals for the project - to have something functional in a
short space of time with zero costs.

For more information on serverless technology, Martin Fowler has a [comprehensive article][martin-fowler-serverless-article-url]
on the topic which is a good read.

[nextjs-url]: https://nextjs.org/
[typescript-url]: https://www.typescriptlang.org/
[auth0-url]: https://auth0.com/
[supabase-url]: https://supabase.io/
[netlify-functions-url]: https://www.netlify.com/products/functions/
