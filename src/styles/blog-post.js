import { css } from "@emotion/core";
import { colours } from "./variables";
import { DarkHeadingStyles } from "./shared";

export default css`
    .logo-duo-container {
        margin: 20px 0;
        text-align: center;

        // !important is needed to override the inline styles added by gatsby-remark-images.
        .gatsby-resp-image-wrapper {
            display: inline-block !important;
            vertical-align: middle;

            width: 30% !important;
            margin: 0 20px !important;

            @media (max-width: 450px) {
                width: 40% !important;
                display: block !important;
                margin: 5px auto !important;
            }
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

    h2 {
        ${DarkHeadingStyles}
    }

    ul {
        padding: 0 40px;
        margin-bottom: 12px;
    }

    // Code blocks
    pre {
        background-color: ${colours.primaryLight};
        border-radius: 3px;
        padding: 12px 60px;
        margin: 20px 0;

        code {
            color: ${colours.primaryTextDark};
        }
    }
`;
