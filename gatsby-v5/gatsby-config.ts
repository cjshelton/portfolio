import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Portfolio`,
        description: `Chris Shelton's Portfolio.`,
        author: `Chris Shelton`,
        profileLinks: {
            github: "https://github.com/cjshelton",
            linkedIn: "https://www.linkedin.com/in/chris-shelton-aa135084/",
        },
        siteUrl: "https://cshelton.co.uk",
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
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
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};

export default config;
