const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const {
    rewriteSlug,
    generateUserFriendlyDateFromSlug,
} = require("./src/utils/blog-utils");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
    const result = await graphql(
        `
            {
                allMarkdownRemark {
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

    if (result.errors) {
        throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        const blogSlug = rewriteSlug(post.node.fields.slug);
        const publishedDate = generateUserFriendlyDateFromSlug(
            post.node.fields.slug
        );

        createPage({
            path: blogSlug,
            component: blogPostTemplate,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
                publishedDate,
            },
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
