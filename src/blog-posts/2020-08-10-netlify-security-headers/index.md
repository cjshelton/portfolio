---
title: "Netlify Security Headers"
description: ""
---

# Introduction

One of my most recent personal projects has been to create a dashboard application to be utilised around the home. It uses VueJS as the front-end technology, which is supported by an ASP.NET Core 2.1 Web API. Unfortunately, I had to downgrade from ASP.NET 3.1 to 2.1 for reasons explained [later in the post](#problems-with-grpc).

Some of the functionality of the API requires it to be on the local network and not cloud-hosted, and I had a Raspberry Pi which wasn't being put to any good use, so I thought it would be an ideal hosting platform for the application.
