import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { sizes, colours } from "../styles/variables";

const Section = styled.section`
    margin-bottom: 20px;
    color: ${colours.primaryTextDark};

    .section-text {
        font-size: 16px;
        margin-bottom: 10px;

        @media (max-width: ${sizes.xSmall}) {
            font-size: 4vw;
        }
    }
`;

const BaseHeadingStyles = css`
    padding: 4px 8px;
    margin-bottom: 10px;

    font-size: 24px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 5vw;
    }
`;

const DarkSectionHeading = styled.h1`
    ${BaseHeadingStyles}

    background-color: ${colours.primary};
    color: ${colours.primaryTextLight};

    &::before {
        content: "// ";
    }
`;

const LightSectionHeading = styled.h1`
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

const SectionContent = styled.div`
    padding: 0 10px;
`;

const PageSection = ({ children, heading, light }) => {
    return (
        <Section>
            {heading && (
                <header>
                    {light ? (
                        <LightSectionHeading>{heading}</LightSectionHeading>
                    ) : (
                        <DarkSectionHeading>{heading}</DarkSectionHeading>
                    )}
                </header>
            )}

            <SectionContent>{children}</SectionContent>
        </Section>
    );
};

export default PageSection;
