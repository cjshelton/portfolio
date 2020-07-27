import React from "react";
import styled from "@emotion/styled";

import { sizes, colours } from "../styles/variables";
import { DarkHeadingStyles, LightHeadingStyles } from "../styles/shared";

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

const DarkSectionHeading = styled.h1`
    ${DarkHeadingStyles}
`;

const LightSectionHeading = styled.h1`
    ${LightHeadingStyles}
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
