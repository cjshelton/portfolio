import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

import Page from "../components/layouts/page";

import BlogPostStyles from "../styles/blog-post";

function getSEO(application) {
    return {
        title: application.frontmatter.title,
        description: application.frontmatter.description,
    };
}

const Application = styled.article`
    ${BlogPostStyles}

    // Add padding and negative margins to mirror the layout used in the rest of the site.
    padding-left: 10px;
    padding-right: 10px;

    h1 {
        margin-left: -10px;
        margin-right: -10px;
    }
`;

function getHeaderJsx(application, image) {
    const HeaderContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .logo-container {
            width: 50px;
            margin-right: 10px;
        }
    `;

    return (
        <HeaderContainer>
            <div className="logo-container">
                <Img fluid={image.fluid} alt="logo" />
            </div>
            <h1>{application.frontmatter.title}</h1>
        </HeaderContainer>
    );
}

function getContentJsx(application) {
    return (
        <div>
            <Application>
                <section
                    dangerouslySetInnerHTML={{ __html: application.html }}
                />
            </Application>
        </div>
    );
}

const ApplicationTemplate = ({ data }) => {
    const application = data.markdownRemark;
    const image = data.imageSharp;

    return (
        <Page
            header={getHeaderJsx(application, image)}
            content={getContentJsx(application)}
            page="Application"
            seo={getSEO(application)}
            initialBackgroundColour={`#${application.frontmatter.primaryColor}`}
            styles="background-position: center center;"
        ></Page>
    );
};

export default ApplicationTemplate;

export const pageQuery = graphql`
    query ApplicationBySlug($slug: String!, $relativeDirectory: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                description
                primaryColor
            }
        }
        imageSharp(fields: { relativeDirectory: { eq: $relativeDirectory } }) {
            id
            fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;
