const techData = require("./tech.json");

const blogPostsData = {
    "Improving Gatsby Performance: Replacing React with Preact": {
        tags: [
            techData.javascript,
            techData.react,
            techData.preact,
            techData.gatsby,
            techData.aspDotNetCoreWebApi,
        ],
    },
    ".NET Core Dev in Docker with Live Compilation and Debugging": {
        tags: [techData.dotNetCore, techData.cSharp, techData.docker],
    },
    "2020: In Review": {
        tags: [],
    },
    "Using Joi for JavaScript Model Validation": {
        tags: [techData.javascript, techData.dataValidation],
    },
    "Javascript Modules: Explained": {
        tags: [techData.javascript],
    },
    "Configuring Netlify HTTP Security Headers": {
        tags: [
            techData.security,
            techData.http,
            techData.httpHeaders,
            techData.netlify,
            techData.owasp,
        ],
    },
    "Running ASP.NET Core in Docker on a Raspberry Pi": {
        tags: [
            techData.dotNetCore,
            techData.aspDotNetCore,
            techData.dotNetStandard,
            techData.aspDotNetCoreWebApi,
            techData.cSharp,
            techData.nuget,
            techData.docker,
            techData.raspberryPi,
        ],
    },
    "SSL and Client Certificate Authentication in RabbitMQ with .NET Standard 2.1": {
        tags: [
            techData.dotNetCore,
            techData.dotNetStandard,
            techData.cSharp,
            techData.security,
            techData.rabbitMq,
            techData.messageBroker,
            techData.nuget,
        ],
    },
    "Customising the Excerpt Separators in Jekyll": {
        tags: [techData.jekyll, techData.staticSiteGenerators],
    },
    "Publishing a .NET Standard Library to NuGet using Azure": {
        tags: [
            techData.dotNetCore,
            techData.dotNetStandard,
            techData.cSharp,
            techData.nuget,
            techData.cicd,
            techData.azureDevOps,
        ],
    },
    "Simple Web Optimisation Techniques": {
        tags: [
            techData.optimisation,
            techData.javascript,
            techData.css,
            techData.http,
        ],
    },
    "Creating V1 of the blog with Jekyll": {
        tags: [techData.jekyll, techData.staticSiteGenerators],
    },
};

// Sort all tags in ASC order by default.
for (const property in blogPostsData) {
    blogPostsData[property].tags.sort();
}

module.exports = blogPostsData;
