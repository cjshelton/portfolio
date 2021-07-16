const path = require(`path`);

const {
    rewriteBlogPostSlug,
    generateUserFriendlyDateFromSlug,
    generateBlogPostNavigationItem,
} = require("../../utils/blog-utils");

const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
const applicationTemplate = path.resolve(`./src/templates/application.js`);

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

const generateApplicationPages = async ({ graphql, createPage }) => {
    const applicationMarkdownData = await graphql(
        `
            {
                allMarkdownRemark(
                    filter: {
                        fields: { sourceInstanceName: { eq: "applications" } }
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

    if (applicationMarkdownData.errors) throw applicationMarkdownData.errors;

    const applications = applicationMarkdownData.data.allMarkdownRemark.edges;
    applications.forEach(application => {
        const slug = application.node.fields.slug;
        const relativeDirectory = application.node.fields.relativeDirectory;

        createPage({
            path: `/application${slug}`,
            component: applicationTemplate,
            context: {
                slug,
                relativeDirectory,
            },
        });
    });
};

module.exports = {
    generateBlogPostPages,
    generateApplicationPages,
};
