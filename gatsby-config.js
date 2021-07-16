// Load the environment specific config file.
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Portfolio`,
        description: `Chris Shelton's Portfolio.`,
        author: `Chris Shelton`,
        profileLinks: {
            github: "https://github.com/cjshelton",
            linkedIn: "https://www.linkedin.com/in/chris-shelton-aa135084/",
        },
    },
    plugins: [
        `gatsby-plugin-preact`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-git`,
            options: {
                name: `hippogriff`,
                remote: `https://cjshelton:${process.env.HIPPOGRIFF_PERSONAL_ACCESS_TOKEN}@github.com/cjshelton/hippogriff`,
                branch: `main`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/blog-posts`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    // `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                    `gatsby-remark-attr`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/mugshot-colour.jpg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Poppins\:300,400`, `Roboto\:300,900`],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
