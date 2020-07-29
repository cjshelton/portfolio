import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { colours } from "../styles/variables";

import Page from "../components/layouts/page";

import { BlogPublishDateStyles } from "../styles/shared";
import BlogPostStyles from "../styles/blog-post";

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandPointLeft,
    faHandPointRight,
} from "@fortawesome/free-regular-svg-icons";

// TODO: Apply same responsive font size to blog content as page section.
// TODO: Excerpt

function getSEO(post) {
    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description || post.excerpt,
    };
}

const BlogPost = styled.article`
    ${BlogPostStyles}

    // Add padding and negative margins to mirror the layout used in the rest of the site.
    padding-left: 10px;
    padding-right: 10px;

    h1 {
        margin-left: -10px;
        margin-right: -10px;
    }
`;

const BlogPostDate = styled.p`
    ${BlogPublishDateStyles}

    text-align: right;
    margin-right: -10px;
`;

const BlogNav = styled.nav`
    margin-top: 20px;

    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    li {
        list-style: none;
    }

    a {
        color: ${colours.primaryText};
    }
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

            <BlogNav>
                <ul>
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                <FontAwesomeIcon icon={faHandPointLeft} />{" "}
                                {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title}{" "}
                                <FontAwesomeIcon icon={faHandPointRight} />
                            </Link>
                        )}
                    </li>
                </ul>
            </BlogNav>
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
