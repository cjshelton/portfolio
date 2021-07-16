import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

import Page from "../components/layouts/page";

import MarkdownStyles from "../styles/markdown";

function getSEO(hippogriff) {
    return {
        title: hippogriff.frontmatter.title,
        description: hippogriff.frontmatter.description,
    };
}

const Hippogriff = styled.article`
    ${MarkdownStyles}

    // Add padding and negative margins to mirror the layout used in the rest of the site.
    padding-left: 10px;
    padding-right: 10px;

    h1 {
        margin-left: -10px;
        margin-right: -10px;
    }
`;

function getHeaderJsx(hippogriff, image) {
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
            <h1>{hippogriff.frontmatter.title}</h1>
        </HeaderContainer>
    );
}

function getContentJsx(hippogriff) {
    return (
        <div>
            <Hippogriff>
                <section
                    dangerouslySetInnerHTML={{ __html: hippogriff.html }}
                />
            </Hippogriff>
        </div>
    );
}

const HippogriffTemplate = ({ data }) => {
    const hippogriff = data.markdownRemark;
    const image = data.imageSharp;

    return (
        <Page
            header={getHeaderJsx(hippogriff, image)}
            content={getContentJsx(hippogriff)}
            page="Hippogriff"
            seo={getSEO(hippogriff)}
            initialBackgroundColour={`#${hippogriff.frontmatter.primaryColor}`}
            styles="background-position: center center;"
        ></Page>
    );
};

export default HippogriffTemplate;

export const pageQuery = graphql`
    query HippogriffBySlug($slug: String!, $relativeDirectory: String!) {
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
