import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";

import Page from "../components/layouts/page";
import PageSection from "../components/page-section";

import {
    rewriteSlug,
    generateUserFriendlyDateFromSlug,
} from "../utils/blog-utils";

import { colours } from "../styles/variables";

const seo = {
    title: "Tech Blog",
    description: `Tech Blog`,
};

const BlogArticlesList = styled.div`
    h1 {
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

const BlogArticleDate = styled.div`
    margin-bottom: 10px;

    font-size: 14px;
    font-style: italic;
    color: ${colours.primaryTextMedium};
`;

const headerJsx = (
    <div>
        <h1>Tech Blog</h1>
    </div>
);

function getContentJsx(posts) {
    return (
        <BlogArticlesList>
            {posts
                .sort((a, b) => {
                    return a.node.fields.slug < b.node.fields.slug ? 1 : -1;
                })
                .map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug;

                    const blogPostSlug = rewriteSlug(node.fields.slug);
                    const publishedDate = generateUserFriendlyDateFromSlug(
                        node.fields.slug
                    );
                    const BlogTitleLink = (
                        <Link to={blogPostSlug}>{title}</Link>
                    );

                    return (
                        <PageSection
                            key={node.fields.slug}
                            heading={BlogTitleLink}
                            light
                        >
                            <BlogArticleDate>
                                Published on {publishedDate}
                            </BlogArticleDate>
                            <p
                                className="section-text"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt,
                                }}
                            />
                        </PageSection>
                    );
                })}
        </BlogArticlesList>
    );
}

const PersonalProjectsPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <Page
            header={headerJsx}
            content={getContentJsx(posts)}
            page="Blog List"
            seo={seo}
            backgroundImageUrl="/images/blog.jpg"
            initialBackgroundColour="#767c80"
            styles="background-position: center center;"
        ></Page>
    );
};

export default PersonalProjectsPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    excerpt(pruneLength: 150)
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                    }
                }
            }
        }
    }
`;
