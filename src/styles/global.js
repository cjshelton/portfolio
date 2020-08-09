import { css } from "@emotion/core";
import { colours, fonts } from "../styles/variables";

export default css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;

        font-family: ${fonts.primary};
        color: ${colours.primaryTextLight};
    }

    /* Set default styles for links. */
    a {
        color: ${colours.primaryTextLight};
        text-decoration: none;
    }

    .italic {
        font-style: italic;
    }

    .primary-text-link {
        color: ${colours.primaryTextMedium};
        text-decoration: underline;

        &:hover {
            color: ${colours.primaryTextMedium};
            text-decoration: underline;
        }
    }
`;
