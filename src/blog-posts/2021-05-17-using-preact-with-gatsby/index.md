---
title: "Improving Gatsby Performance: Replacing React with Preact"
description: ""
---

# Introduction

I recently learned of a Gatsby plugin which allows [React][react-url] to be replaced with [Preact][preact-url]. This simple
change helps improve performance of Gatsby sites by reducing the size of the JavaScript payload which typically serves the
React code, which can ultimately result in a better user experience and improved Google Lighthouse scores,
as shown later in this post.

## The Importance of React in a Gatsby Site

React plays a fundamental role in a Gatsby site, right from the development process, to how it runs in the browser.

First off, pages in a Gatsby site are developed as React components, utilising all of the modern tooling developers have come to
expect when building modern web applications, including a modular project structure, modern ES syntax with [Babel][babel-url]
transpilation, unit testing, webpack and much more. All of this contributes to a much more developer friendly experience
to creating static sites.

Secondly, React is used as part of the &quot;hydration&quot; process Gatsby sites go through when a user visits the site. Gatsby
sites are static sites, in that the output of the Gatsby build process is a series of HTML files and static assets which
can be hosted simply on a CDN as a typical static site would be; no special server functionality needed.

There is one key difference though &mdash; Gatsby uses Server-side Rendering, a feature of React, to generate server-rendered
HTML files. These server-rendered HTML files ensure the browser is always served the content it needs and quickly, which is in
contrast to the well-known client-side rendering.

Client-side rendering forces the browser to download all content and assets for the app, including content for pages which
aren't even needed yet. This ultimately leads to a much snappier experience once loaded, as the browser has all of the
static content it needs to render all parts of the app, but this comes at the cost of needing to download lots of assets up front,
often leading to an initial period for the user where all they see is blank page, especially if you are serving a complex
application.

The &quot;hydration&quot; process mentioned earlier plays a key role in the performance of a Gatsby site. As per the Gatsby
docs, &quot;Hydration is the process of using client-side JavaScript to add application state and interactivity to
server-rendered HTML.&quot;. This essentially describes the process of first serving up the static content needed for the
page requested by the user, and then allowing React to take over and create a full React application for the whole site.
Once the site becomes hydrated, it can then make full use of the performance and optimisations of a React application,
including subsequent page requests being DOM updates only; no further server requests needed.

This model is described in the Gatsby docs as a hybrid server and client-side rendering model, with the benefits of both
worlds &mdash; the fast start-up times of server-side rendering, and the snappy site navigation as a result of the DOM
updates performed on a client-rendered application.

## Preact

# Installing and Configuring the Plugin

framework-[contenthash].js
https://www.gatsbyjs.com/docs/production-app/#framework-contenthashjs

https://www.gatsbyjs.com/blog/2020-01-30-why-gatsby-is-better-with-javascript/#:~:text=Gatsby%20sites%20can%20work%20without%20JavaScript.%20Because%20Gatsby,only%20for%20additional%20interactive%20elements%20of%20an%20app.

https://www.gatsbyjs.com/docs/glossary/hydration/

https://www.gatsbyjs.com/docs/conceptual/react-hydration/

https://www.gatsbyjs.com/docs/glossary/server-side-rendering/

# My Results

[react-url]: https://reactjs.org/
[preact-url]: https://preactjs.com/
[babel-url]: https://babeljs.io/
