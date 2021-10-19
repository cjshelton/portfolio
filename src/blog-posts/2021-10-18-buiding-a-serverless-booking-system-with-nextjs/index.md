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

I achieved my goal with the help of [Next.js](nextjs-url), [Auth0](auth0-url), [Supabase](supabase-url) and [Netlify](netlify-functions-url)
(for hosting and serverless functions), and it's all written in [TypeScript](typescript-url) too.
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

[nextjs-url]: https://nextjs.org/
[typescript-url]: https://www.typescriptlang.org/
[auth0-url]: https://auth0.com/
[supabase-url]: https://supabase.io/
[netlify-functions-url]: https://www.netlify.com/products/functions/
