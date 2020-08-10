const moment = require("moment");

function parseDateFromSlug(slug) {
    // The publish date is the first 11 characters (/YYYY-MM-DD).
    const rawPublishedDate = slug.substring(1, 11);

    return moment(rawPublishedDate);
}

function rewriteSlug(slug) {
    const parsedPublishedDate = parseDateFromSlug(slug);

    // The post title can be found from the 12th index, after the date part.
    const blogName = slug.substring(12);
    const formattedPublishDate = parsedPublishedDate.format("YYYY/MM/DD");

    return `/blog/${formattedPublishDate}/${blogName}`;
}

function generateUserFriendlyDateFromSlug(slug) {
    const parsedPublishedDate = parseDateFromSlug(slug);

    return parsedPublishedDate.format("MMMM DD, YYYY");
}

function generateBlogPostNavigationItem(node) {
    return node
        ? {
              slug: rewriteSlug(node.fields.slug),
              title: node.frontmatter.title,
          }
        : null;
}

module.exports = {
    parseDateFromSlug,
    rewriteSlug,
    generateUserFriendlyDateFromSlug,
    generateBlogPostNavigationItem,
};
