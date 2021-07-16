const { createFilePath } = require(`gatsby-source-filesystem`);

const {
    generateBlogPostPages,
    generateHippogriffPages,
} = require("./src/data/graphql/page-generators");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    await generateBlogPostPages({ graphql, createPage });
    await generateHippogriffPages({ graphql, createPage });
};

/**
 * onCreateNode allows data nodes to be extended when they are being created by gatsby. This can be used to perform
 * additional transformation before the data is queryable in GraphQL.
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    // For Markdown and Image nodes add custom fields.
    if (
        node.internal.type === `MarkdownRemark` ||
        node.internal.type === `ImageSharp`
    ) {
        // Add a slug which is built up using the file path of the source Markdown file.
        const value = createFilePath({ node, getNode });
        createNodeField({
            node,
            name: `slug`,
            value,
        });

        // Add the sourceInstanceName which indicates what plugin was used for this file. This will equal the `name` field
        // as indicated in the `gatsby-config` file.
        const fileNode = getNode(node.parent);
        createNodeField({
            node,
            name: `sourceInstanceName`,
            value: fileNode.sourceInstanceName,
        });
        // Add the relativeDirectory for the file. This is useful for identifying what files belong together in a
        // particular directory.
        createNodeField({
            node,
            name: `relativeDirectory`,
            value: fileNode.relativeDirectory,
        });
    }
};
