const path = require(`path`);

const {
    rewriteBlogPostSlug,
    generateUserFriendlyDateFromSlug,
    generateBlogPostNavigationItem,
} = require("../../utils/blog-utils");

const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
const hippogriffTemplate = path.resolve(`./src/templates/hippogriff.js`);

const generateBlogPostPages = async ({ graphql, createPage }) => {
    const blogMarkdownData = await graphql(
        `
            {
                allMarkdownRemark(
                    filter: { fields: { sourceInstanceName: { eq: "blog" } } }
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `
    );

    if (blogMarkdownData.errors) throw blogMarkdownData.errors;

    const blogPosts = blogMarkdownData.data.allMarkdownRemark.edges;
    blogPosts.forEach((blogPost, index) => {
        const previous =
            index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
        const next = index === 0 ? null : blogPosts[index - 1].node;

        const blogSlug = rewriteBlogPostSlug(blogPost.node.fields.slug);
        const publishedDate = generateUserFriendlyDateFromSlug(
            blogPost.node.fields.slug
        );

        createPage({
            path: blogSlug,
            component: blogPostTemplate,
            context: {
                slug: blogPost.node.fields.slug,
                previous: generateBlogPostNavigationItem(previous),
                next: generateBlogPostNavigationItem(next),
                publishedDate,
            },
        });
    });
};

const generateHippogriffPages = async ({ graphql, createPage, slugPrefix }) => {
    const hippogriffMarkdownData = await graphql(
        `
            {
                allMarkdownRemark(
                    filter: {
                        fields: { sourceInstanceName: { eq: "hippogriff" } }
                    }
                ) {
                    edges {
                        node {
                            fields {
                                slug
                                relativeDirectory
                            }
                            frontmatter {
                                title
                                primaryColor
                            }
                        }
                    }
                }
            }
        `
    );

    if (hippogriffMarkdownData.errors) throw hippogriffMarkdownData.errors;

    const hippogriffs = hippogriffMarkdownData.data.allMarkdownRemark.edges;
    hippogriffs.forEach(hippogriff => {
        const slug = hippogriff.node.fields.slug;
        const relativeDirectory = hippogriff.node.fields.relativeDirectory;

        createPage({
            path: `/${slugPrefix}${slug}`,
            component: hippogriffTemplate,
            context: {
                slug,
                relativeDirectory,
            },
        });
    });
};

module.exports = {
    generateBlogPostPages,
    generateHippogriffPages,
};
