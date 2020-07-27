import { css } from "@emotion/core";
import { colours, sizes } from "./variables";

const BaseHeadingStyles = css`
    padding: 4px 8px;
    margin-bottom: 10px;

    font-size: 24px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 5vw;
    }
`;

export const DarkHeadingStyles = css`
    ${BaseHeadingStyles}

    background-color: ${colours.primary};
    color: ${colours.primaryTextLight};

    &::before {
        content: "// ";
    }
`;

export const LightHeadingStyles = css`
    ${BaseHeadingStyles}

    padding: 4px 10px;

    line-height: 24px;

    a {
        color: ${colours.primaryTextDark};

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: ${sizes.xSmall}) {
        line-height: 5vw;
    }
`;

export const BlogPublishDateStyles = css`
    margin-bottom: 10px;

    font-size: 14px;
    font-style: italic;
    color: ${colours.primaryTextMedium};
`;
