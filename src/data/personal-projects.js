const techData = require("./tech.json");

module.exports = {
    projects: [
        {
            name: "Holiday Home Booking System",
            tags: [
                techData.typescript,
                techData.react,
                techData.nextjs,
                techData.gatsby,
                techData.auth0,
                techData.supabase,
                techData.netlify,
                techData.netlifyFunctions,
            ],
            description: `
                <p class="section-text">
                    A web application written in Next.js (React) and TypeScript, leveraging serverless technology,
                    to allow overnight bookings to be made at a family holiday home.
                </p>
                <p class="section-text">
                    The goal of this project was to build a system which had a full login and logout flow,
                    and would allow users to view all bookings, as well as make and delete bookings at the holiday home.
                    I planned to complete all of this within the space of a few evenings and with zero costs.
                    As described in the accompanying <a href="/blog/2021/10/24/building-a-serverless-booking-system-with-nextjs/">blog post</a>,
                    I met this goal with the technology tagged below.
                </p>
                <p class="section-text">
                    This was a really interesting hobby project to work on, allowing me to gain exposure to new
                    technologies and approaches to building web applications which I will certainly carry forward
                    into future projects I work on.
                </p>
                    `,
            blogURL:
                "/blog/2021/10/24/building-a-serverless-booking-system-with-nextjs/",
        },
        {
            name: "ASP.NET Core Dependency Tools",
            tags: [
                techData.dotNetCore,
                techData.aspDotNetCore,
                techData.dotNetStandard,
                techData.cSharp,
                techData.ioc,
                techData.nuget,
                techData.cicd,
                techData.azureDevOps,
                techData.crossPlatform,
            ],
            description:
                '<p class="section-text">A set of .NET Standard libraries for working with web dependencies in ASP.NET Core, published to NuGet using Azure Dev Ops.</p><p class="section-text">The first tool is the Web Dependency Validator, which aims to verify that all dependencies in the dependency chain of ASP.NET controllers have been set up in the Inversion of Control (IoC) container. It stops app execution shortly after running and logs an error to make it easier to identify dependency problems, which is more helpful than the app starting, but then throwing an error when HTTP requests are made to the app.</p>',
            githubURL:
                "https://github.com/cjshelton/aspnetcore-dependency-tools",
            blogURL: "/blog/2019/04/30/publishing-to-nuget-using-azure/",
        },
        {
            name: "RabbitMQ Demo",
            tags: [
                techData.dotNetStandard,
                techData.dotNetCore,
                techData.cSharp,
                techData.rabbitMq,
                techData.messageBroker,
            ],
            description:
                '<p class="section-text">I have an interest in the technical architecture aspect of software development &mdash; taking a problem and decomposing it down to its key parts, and then understanding how the code can be designed and what software design principles and patterns can be applied to produce a quality solution which is testable, maintainable and resilient to future change (which is inevitable).</p><p class="section-text">The project is .NET focused, and makes use of standard object oriented and SOLID design principles, to help build an example solution with the above considerations in mind. It also gave me a chance to work with the most up-to-date .NET Core and Standard versions all on my Raspberry Pi.</p>',
            githubURL: "https://github.com/cjshelton/RabbitMQDemo",
            blogURL:
                "/blog/2019/12/18/rabbitmq-client-certificate-authentication/",
        },
        {
            name: "Home Dashboard App",
            tags: [
                techData.aspDotNetCoreWebApi,
                techData.html,
                techData.css,
                techData.vue,
                techData.xamarin,
                techData.googleCloudFirestore,
                techData.webSockets,
                techData.signalR,
                techData.docker,
                techData.raspberryPi,
            ],
            description:
                '<p class="section-text">I wanted to be able to use a tablet as a central view and management tool for day-to-day activities and general things around my house. It&apos;s useful to have common things in one view, like the local weather.</p><p class="section-text">I created a web application using Vue and ASP.NET Core WebAPI, and hosted it on my Raspberry Pi using Docker (some of the features required a LAN connection so cloud hosting wasn&apos;t an option). For data storage, I chose a Google Firestore document database &mdash; I wanted something cloud-hosted and free for basic use. I needed the app to work in real-time, feeding live updates to the browser without needing to refresh the page; SignalR seemed like the obvious choice. To get the app onto the tablet, I created a single-page Xamarin Forms app which rendered the site in a WebView &mdash; it didn&apos;t seem worth it to create the app natively. I wanted to strengthen my Vue skills and also have the flexibility of viewing the app on other devices.</p>',
        },
        {
            name: "My Tech Blog",
            tags: [
                techData.gatsby,
                techData.react,
                techData.html,
                techData.cssInJs,
                techData.jamStack,
                techData.staticSiteGenerators,
                techData.markdown,
            ],
            description:
                '<p class="section-text">I decided back in 2018 that I wanted to create a tech blog. I wanted it to be a space where I could document some of the things I have learnt for future reference, and also write-up solutions to problems in order to help others; I&apos;ve lost count of the times I have been helped by reading others&apos; blog posts, so I decided it would be a good opportunity to give back.</p><p class="section-text">I weighed up my options &mdash; to use a blogging software or build my own. Aside from every developer&apos;s desire to &quot;write their own&quot;, Jamstack was really gaining traction at the time as way of creating static sites like blogs using simpler and more modern techniques, so I opted for creating a Jamstack blog using Jekyll. I learnt a lot from creating the blog &mdash; it gave me experience and an understanding of how powerful Static Site Generators can be, and also helped solidify some of my earlier CSS skills, relying only lightly on Bootstrap and writing a lot of custom SCSS myself.</p><p class="section-text">My blog is still active today, though my posts aren&apos;t as frequent as I&apos;d like. It is hosted independently on GitHub Pages at the moment, though I have plans to migrate it over to my Portfolio site which uses GatsbyJS.</p><p class="section-text italic">Edit: As of July 30, 2020 my <a href="/blog" class="primary-text-link">blog</a> has been migrated over to my Portfolio site. This makes maintenance much easier as I am only managing one code base and tech stack for these sites. Gatsby also offers lots benefits over Jekyll for maintaining a blog which I look forward to making use of as time goes on.</p>',
            githubURL: "https://github.com/cjshelton/portfolio",
            blogURL: "/blog/2019/01/31/creating-v1-of-the-blog-with-jekyll/",
            liveSiteURL: "/blog",
        },
        {
            name: "Amateur Dramatics Group Website",
            tags: [
                techData.html,
                techData.scss,
                techData.javascript,
                techData.gulp,
                techData.cicd,
            ],
            description:
                '<p class="section-text">I challenged myself a few years ago &mdash; when I had little experience in true front-end development &mdash; to create a static site from scratch for a local amateur dramatics group which I have been a member of for over 20 years. The group had an existing site, but it was dated and not maintained.</p><p class="section-text">I made the decision to stick to more traditional methods &mdash; simple HTML, SCSS, some JS, and Gulp to manage my workflow. I thought using one of the latest JS frameworks would get in the way of a good opportunity to focus more on the fundamentals of the web.</p><p class="section-text">The site is still in use today. It&apos;s well written, and it&apos;s setup with automated CI/CD, so changes are relatively pain-free. On reflection, the site is a perfect candidate to be written with something like Gatsby, and a headless CMS for data which operates on JSON and Markdown files. However, the cost far outweighs the benefit of a re-write, so I&apos;ll be leaving things as they are for the time being.</p>',
        },
    ],
};
