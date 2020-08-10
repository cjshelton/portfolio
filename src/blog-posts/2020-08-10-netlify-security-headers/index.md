---
title: "Netlify Security Headers"
description: ""
---

# Introduction

Netlify is a great platform for simple web hosting, which comes with a whole load of benefits including a generous free plan, HTTPS out-of-the-box, and cool features like AWS Lambda integration and form submissions. I plan on writing a blog post specifically about Netlify, including how I use it and what benefits I get from it.

I was made aware, that by default, some HTTP Security Headers are not set by default, and sure enough, for my Portfolio site, most were not set which resulted in a pretty poor grading on [Security Headers][security-headers-url]:

<img src="./security-headers-report.png" alt="Security Headers report showing grade D" />

As you can see above, the poor rating is due to Content Security Policy, X-Frame Options and other security headers not be setup or configured correctly.

I was keen to fix these security issues, and blog my journey.

[security-headers-url]: https://securityheaders.com/

# Security Headers - what and why?
