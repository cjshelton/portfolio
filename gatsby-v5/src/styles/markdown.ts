import { css } from "@emotion/react";
import { colours, sizes } from "./variables";
import { DarkHeadingStyles, SiteTextStyles } from "./shared";

export default css`
    .img-attribute {
        text-align: center;
        font-size: 14px;
        font-style: italic;
    }

    .img-single-small {
        margin: 0 auto;
        width: 100%;
        max-width: 150px;
    }

    .img-single-medium {
        margin: 0 auto;
        width: 100%;
        max-width: 250px;
    }

    .logo-duo-container {
        margin: 20px 0;
        text-align: center;

        // !important is needed to override the inline styles added by gatsby-remark-images.
        .gatsby-resp-image-wrapper {
            display: inline-block !important;
            vertical-align: middle;

            width: 30% !important;
            margin: 0 20px !important;

            @media (max-width: ${sizes.xSmall}) {
                width: 40% !important;
                display: block !important;
                margin: 5px auto !important;
            }
        }
    }

    .flex-images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .img-container {
            flex: 1 0 120px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding: 1rem;

            .img-container-inner {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 100%;
                max-width: 100px;
            }

            .gatsby-resp-image-wrapper {
                flex: 1 0 0;
            }
        }
    }

    ul,
    ol {
        padding: 0 40px;
        margin-bottom: 12px;
    }

    // Code blocks
    pre {
        background-color: ${colours.primaryLight};
        border-radius: 3px;
        padding: 12px 60px;
        margin: 20px 0;

        overflow-x: auto;

        @media (max-width: ${sizes.xSmall}) {
            padding-left: 20px;
            padding-right: 20px;
        }

        code {
            color: ${colours.primaryTextDark};
        }
    }

    code {
        color: ${colours.inlineCode};
        word-break: break-all;
    }

    blockquote {
        margin: 0 10px 10px 10px;
        padding: 10px;
        border-left: 3px solid ${colours.primary};
        background-color: ${colours.lightGrey};

        p {
            font-style: italic;

            // Override the margin on the last p tag as the spacing is handled instead
            // by the padding on the blockquote.
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .gatsby-resp-image-wrapper {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .image-thin-border-container {
        .gatsby-resp-image-wrapper {
            margin-bottom: 5px;
            border: 1px solid #c9c9c9;
        }
    }

    a {
        color: ${colours.primaryTextMedium};
        text-decoration: underline;

        &:hover {
            color: ${colours.primaryTextMedium};
        }
    }

    p {
        margin-bottom: 12px;
    }

    // Apply site text styles to all blog elements, and then override text styles for
    // specific elements below.
    // This is easier than trying to target all elements generated from the Markdown.
    * {
        ${SiteTextStyles}
    }

    h2 {
        margin-bottom: 10px;

        font-size: 20px;
        color: ${colours.primaryText};

        @media (max-width: ${sizes.xSmall}) {
            font-size: 4vw;
        }
    }

    h3 {
        margin-bottom: 10px;

        font-size: 16px;
        color: ${colours.primaryText};

        @media (max-width: ${sizes.xSmall}) {
            font-size: 3.5vw;
        }
    }

    h4 {
        margin-bottom: 10px;

        font-size: 13px;
        color: ${colours.primaryText};

        @media (max-width: ${sizes.xSmall}) {
            font-size: 3vw;
        }
    }

    h1 {
        ${DarkHeadingStyles}
    }
`;
