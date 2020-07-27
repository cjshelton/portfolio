import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";

import Page from "../components/layouts/page";

import { DarkHeadingStyles, BlogPublishDateStyles } from "../styles/shared";
import { colours } from "../styles/variables";

function getSEO(post) {
    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description || post.excerpt,
    };
}

const BlogPost = styled.article`
    a {
        color: ${colours.primaryTextMedium};
        text-decoration: underline;

        &:hover {
            color: ${colours.primaryTextMedium};
        }
    }

    h2 {
        ${DarkHeadingStyles}
    }
`;

const BlogPostDate = styled.p`
    ${BlogPublishDateStyles}

    text-align: right;
`;

function getHeaderJsx(post) {
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
        </div>
    );
}

function getContentJsx(post, { previous, next }) {
    return (
        <div>
            <BlogPost>
                <header>
                    <BlogPostDate>
                        Published on {post.frontmatter.date}
                    </BlogPostDate>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </BlogPost>

            <nav>
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                        backgroundColor: "red",
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
    const post = data.markdownRemark;

    return (
        <Page
            header={getHeaderJsx(post)}
            content={getContentJsx(post, pageContext)}
            page="Blog Entry"
            seo={getSEO(post)}
            backgroundImageUrl="/images/blog.jpg"
            initialBackgroundColour="#767c80"
            styles="background-position: center center;"
        ></Page>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
