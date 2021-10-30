import React from "react";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Seo from "../../components/seo";
import Layout from "../../components/layouts/site";

import globalStyles from "../../styles/global";
import { sizes, colours } from "../../styles/variables";

function getImageContainerStyles() {
    return css`
        width: 100%;
        height: 250px;
        position: relative;
        padding: 10px 20px;

        /*
            Three elements are stacked together in the image container section:
            image, overlay and header content. The image should be at the back of the stack,
            then the overlay and then the header at the front.
        */
        z-index: -1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text-align: center;

        .header-image {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 0;
        }

        .header-text {
            /*
                Three elements are stacked together in the image container section:
                background image, overlay and header content. The header content should
                be at the front of the stack.
            */
            z-index: 2;

            h1 {
                font-size: 40px;
                font-weight: 400;

                @media (max-width: ${sizes.xSmall}) {
                    font-size: 9vw;
                }
            }

            h2 {
                font-size: 20px;
                font-weight: 300;

                @media (max-width: ${sizes.xSmall}) {
                    font-size: 4vw;
                }
            }
        }

        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(18, 26, 33, 0.5);

            /*
                Three elements are stacked together in the image container section:
                background image, overlay and header content. The overlay should
                be in the middle of the stack.
            */
            z-index: 1;
        }
    `;
}

const PageContent = styled.div`
    color: ${colours.primaryTextDark};
    padding: 50px 80px;

    @media (max-width: ${sizes.small}) {
        padding: 20px 40px;
    }

    @media (max-width: ${sizes.xSmall}) {
        padding: 20px 20px;
    }
`;

const headerImgAltTextMappings = {
    home: "Laptop and notepad on a desk",
    code: "Source code",
    personalProjects: "Laptop, phone, earphone and notepads on a desk",
    blog: "Pen and paper resting on a laptop with a cup of coffee on the side",
};

const Page = ({
    header,
    content,
    page,
    seo,
    headerImageName,
    headerImagePosition = "center bottom",
}) => {
    const imageContainerStyles = getImageContainerStyles();

    const data = useStaticQuery(graphql`
        fragment PageHeaderProperties on ImageSharp {
            gatsbyImageData(
                placeholder: DOMINANT_COLOR
                layout: CONSTRAINED
                quality: 100
            )
        }

        query {
            blog: file(relativePath: { eq: "heroes/blog.jpg" }) {
                childImageSharp {
                    ...PageHeaderProperties
                }
            }
            code: file(relativePath: { eq: "heroes/code.jpg" }) {
                childImageSharp {
                    ...PageHeaderProperties
                }
            }
            home: file(relativePath: { eq: "heroes/home.jpg" }) {
                childImageSharp {
                    ...PageHeaderProperties
                }
            }
            personalProjects: file(
                relativePath: { eq: "heroes/personal-projects.jpg" }
            ) {
                childImageSharp {
                    ...PageHeaderProperties
                }
            }
        }
    `);

    const imageData = getImage(data[headerImageName]);

    return (
        <Layout page={page}>
            <Global styles={globalStyles} />
            <Seo title={seo.title} description={seo.description} />

            <div css={imageContainerStyles}>
                {headerImageName && <div className="overlay"></div>}
                <GatsbyImage
                    image={imageData}
                    alt={headerImgAltTextMappings[headerImageName]}
                    objectFit="cover"
                    objectPosition={headerImagePosition}
                    className="header-image"
                />
                <div className="header-text">{header}</div>
            </div>
            <PageContent>{content}</PageContent>
        </Layout>
    );
};

export default Page;
