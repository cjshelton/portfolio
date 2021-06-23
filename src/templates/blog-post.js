import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { colours } from "../styles/variables";

import Page from "../components/layouts/page";
import SkillPill from "../components/skillPill";

import { BlogPublishDateStyles } from "../styles/shared";
import BlogPostStyles from "../styles/blog-post";
import { getBlogPostMetadata } from "../utils/blog-utils";

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandPointLeft,
    faHandPointRight,
} from "@fortawesome/free-regular-svg-icons";

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

const BlogPostPills = styled.div`
    text-align: right;
    margin-right: -10px;
    margin-bottom: 10px;
`;

const BlogNav = styled.nav`
    margin-top: 20px;

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .blog-post-nav-item {
            display: flex;
            align-items: center;

            margin: 5px 0;

            &__icon {
                margin: 0 10px;
            }

            &__prev {
                text-align: left;
                margin-left: -10px;
            }

            &__next {
                text-align: right;
                margin-right: -10px;
            }
        }
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

function getContentJsx(post, { previous, next, publishedDate }, title) {
    const { tags = [] } = getBlogPostMetadata({ title });

    return (
        <div>
            <BlogPost>
                <header>
                    <BlogPostDate>Published on {publishedDate}</BlogPostDate>
                    <BlogPostPills>
                        {tags.map(tag => {
                            return (
                                <SkillPill key={tag} size="small">
                                    {tag}
                                </SkillPill>
                            );
                        })}
                    </BlogPostPills>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </BlogPost>

            <BlogNav>
                <ul>
                    <li>
                        {previous && (
                            <div className="blog-post-nav-item blog-post-nav-item__prev">
                                <FontAwesomeIcon
                                    icon={faHandPointLeft}
                                    className="blog-post-nav-item__icon"
                                />
                                <Link to={previous.slug} rel="prev">
                                    {previous.title}
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        {next && (
                            <div className="blog-post-nav-item blog-post-nav-item__next">
                                <Link to={next.slug} rel="next">
                                    {next.title}
                                </Link>
                                <FontAwesomeIcon
                                    icon={faHandPointRight}
                                    className="blog-post-nav-item__icon"
                                />
                            </div>
                        )}
                    </li>
                </ul>
            </BlogNav>
        </div>
    );
}

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const title = data.markdownRemark.frontmatter.title;

    return (
        <Page
            header={getHeaderJsx(post)}
            content={getContentJsx(post, pageContext, title)}
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
                description
            }
        }
    }
`;
