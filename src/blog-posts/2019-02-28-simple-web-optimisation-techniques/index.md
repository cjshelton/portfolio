---
title: "Simple Web Optimisation Techniques"
description: ""
---

# Introduction

This post covers some simple, but effective, techniques to follow when it comes to improving the performance of your website. Some of these techniques may sound quite trivial to the more experienced web developer, but it can be easy to overlook them and forget about them, especially when you have been involved in building a large-scale web app with lots of moving parts. This should also serve as a useful checklist to those more unfamiliar to web development to help make sure you're getting the most out of your website's performance.

I plan on doing a follow-up post later in the year covering some of the more complex techniques like efficient resource caching and using services like [Cloudflare][cloudflare-url], and showing how some of these techniques can be automated and introduced into your development workflow.

# Techniques for Optimisation

## Minification &amp; Concatenation

Any Javascript or CSS files which your website needs will need to be fetched individually by the browser when the page loads. Each of these fetches is additional HTTP traffic to the server, which consumes more bandwidth and increases the overall time it takes for the page to be fully loaded.

A simple technique which can be employed to mitigate this is to first minify the content and then concatenate it into a single file.

### Minification

Minification takes the original source JS &amp; CSS files and strips out any unnecessary content, including whitespace and any optional tokens (curly braces, semi-colons etc.). The benefit of this being that your minified files are smaller and should take less time to be served to the browser.

### Concatenation

Concatenation, as the name suggests, takes the original source files and concatenates them together into a single file. The result being a larger file, but having only one file reduces the number of HTTP requests that need to be made to the server to fetch the content.

Use build tools such as [Grunt][grunt-url] or [Gulp][gulp-url] to add minification and concatenation to your development workflow and automatically generate these files for you.

## Image Size &amp; File Types

Unlike individual JS and CSS files, it's much easier for images to exceed 1000KB in size unedited. For obvious reasons, the techniques described in the previous section cannot be applied here. The best technique for images is to use the right image type and ensure the image is no larger than it needs to be in terms of size and dimensions. There's no one size fits all when it comes to image size, they just need to be as small as feasibly possible. For me, I like to see the majority of images anywhere in the 10KB - 50KB range, with exceptions for images which _need_ to be larger.

_If your website is purely to showcase high quality images then the below techniques may not be suitable._

### Image Sizes {#image-sizes}

The larger the image is in pixels, the larger the file size, so it's important to make sure your images are no larger than they could possible be when rendered on your website. For example, it's unnecessary to server up an image which is 4000 x 2000 pixels in size, yet is styled with `width: 120px`{:.code-inline}. There are various online tools available for image resizing. More often than not I resort to the resize functionality available in MacOS Preview.

Image size can further be reduced by compressing the image using tools such as [TinyPNG][tinypng-url]. Compression works by reducing the number of colours stored in an image and stripping out some metadata. Image quality is reduced, but its affect on how the image looks on the eye is negligible. I have almost always seen reductions in file sizes, and have seen reductions of up to 90% in some cases which makes a big difference.

### Image File Types

There are various image types, and some are more favourable for websites than others. At the most basic level, choosing between PNG and JPEG image formats properly can see significant gains in image size and overall performance. PNG uses lossless compression, ultimately leading to a better quality image at a relatively small file size. If you need to maintain transparency or your image has a vivid range of colours, PNG is a good choice. Its compression capabilities, however, are limited; using the techniques described in [Image Sizes](#image-sizes) may not always have the desired effect.

JPEG uses lossy compression, meaning a reduction in quality compared to that of PNG images, and they also do not support transparency. However their compression capabilities are far greater and you can see most of your gains when reducing the size of JPEG images. This reduction makes them a solid choice for images on the web.

It's also worth mentioning some of the next gen image file types &mdash; JPEG 2000, JPEG XR and WebP &mdash; which offer far better compression qualities, but their cross browser support is still very limited at the moment, so be sure to supply fallback images in the more traditional formats.

## Minimal External Resources

It's always tempting to reference external resources by their links to a CDN. This is ideal for development, but when preparing for production, take a copy of these libraries and have them hosted on your web server instead. Better still, use a package manager like
[npm][npmjs-url] or [NuGet][nuget-url] to manage these dependencies for you, offering a reliable way to install web dependencies reliably, without the need for storing them in your repo. Combining a package manager with a build tool like Gulp offers a powerful way to obtain your dependencies and translate them into a more efficient form using minification and concatenation.

## Placement of &lt;style&gt; &amp; &lt;script&gt; Tags

A simple one &mdash; place as many of your dependencies at the bottom of your `<body>`{:.code-inline} tag. Any dependencies which are not needed on initial page load should be placed here to prevent them from blocking any of your site content from loading.

# Testing Performance

Whenever I deploy changes to any of my websites, I like to gauge performance using a page speed tool like [PageSpeed Insights by Google][pagespeedinsights-url]. Upon entering your domain, the tool supplies you with a performance summary of your website, including an overall score for mobile and desktop, and some hints at where your bottlenecks might be, along with some suggestions on how to remedy them. I'm looking at automating this test as part of my deployment step using the available [PageSpeed API][pagespeedapi-url].

# Final Thoughts

The key take away is that there are some trivial things that can be done to optimise your website. These are sometimes easy to overlook but do go a long way in helping boost your site's performance. There are far more factors involved in helping your web application perform better, especially for larger-scale apps, but these techniques can server as a reminder to those who are experienced, or as introduction to those who are just starting out.

[grunt-url]: https://gruntjs.com/
[gulp-url]: https://gulpjs.com/
[tinypng-url]: https://tinypng.com/
[npmjs-url]: https://www.npmjs.com/
[nuget-url]: https://www.nuget.org/
[pagespeedinsights-url]: https://developers.google.com/speed/pagespeed/insights/
[pagespeedapi-url]: https://developers.google.com/speed/docs/insights/v5/get-started
[cloudflare-url]: https://www.cloudflare.com/
