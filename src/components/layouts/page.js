import React from "react"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import SEO from "../../components/seo"
import Layout from "../../components/layouts/site"

import globalStyles from "../../styles/global"
import { sizes, colours } from "../../styles/variables"

function getImageContainerStyles(backgroundImageUrl, initialBackgroundColour) {
    return css`
        width: 100%;
        min-height: 250px;
        background-color: ${initialBackgroundColour}; /* Base colour from the image to show before it loads. */
        background-image: url(${backgroundImageUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;
        position: relative;

        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(18, 26, 33, 0.5);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            padding: 0 40px;
            text-align: center;

            h1 {
                font-size: 40px;
                font-weight: 400;

                @media (max-width: ${sizes.xSmall}) {
                    font-size: 10vw;
                }
            }

            h2 {
                font-size: 20px;
                font-weight: 300;

                @media (max-width: ${sizes.xSmall}) {
                    font-size: 5vw;
                }
            }
        }
    `
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

    .section-header {
        font-size: 24px;
        margin-bottom: 10px;
        background-color: ${colours.primary};
        color: ${colours.primaryTextLight};
        padding: 4px 8px;

        &::before {
            content: "// ";
        }

        @media (max-width: ${sizes.xSmall}) {
            font-size: 5vw;
        }
    }

    .section {
        font-size: 16px;
        margin-bottom: 10px;
        padding: 0 10px;

        @media (max-width: ${sizes.xSmall}) {
            font-size: 4vw;
        }
    }
`

export default ({
    header,
    content,
    page,
    seo,
    backgroundImageUrl,
    initialBackgroundColour,
}) => {
    const imageContainerStyles = getImageContainerStyles(
        backgroundImageUrl,
        initialBackgroundColour
    )

    return (
        <Layout page={page}>
            <Global styles={globalStyles} />
            <SEO title={seo.title} description={seo.description} />

            <div css={imageContainerStyles}>
                <div className="overlay">{header}</div>
            </div>
            <PageContent>{content}</PageContent>
        </Layout>
    )
}
