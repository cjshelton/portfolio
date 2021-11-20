import { colours, sizes } from "./variables";

const BaseHeadingStyles = `
    padding: 4px 8px;
    margin-bottom: 10px;

    font-size: 24px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 5vw;
    }
`;

export const DarkHeadingStyles = `
    ${BaseHeadingStyles}

    background-color: ${colours.primary};
    color: ${colours.primaryTextLight};

    &::before {
        content: "// ";
    }
`;

export const LightHeadingStyles = `
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

export const BlogPublishDateStyles = `
    margin-bottom: 10px;

    font-size: 14px;
    font-style: italic;
    color: ${colours.primaryTextMedium};
`;

export const SiteTextStyles = `
    font-size: 16px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 3.5vw;
    }
`;

export const BackgroundGradientStyles = `
    background-image: linear-gradient(
        ${colours.primary},
        ${colours.primaryDark}
    );
`;
