import React from "react";
import styled from "@emotion/styled";

import { colours } from "../styles/variables";
import {
    DarkHeadingStyles,
    LightHeadingStyles,
    SiteTextStyles,
} from "../styles/shared";

const Section = styled.section`
    margin-bottom: 20px;
    color: ${colours.primaryTextDark};

    .section-text {
        ${SiteTextStyles}

        margin-bottom: 10px;
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

const PageSection = ({ children, heading, light, className }) => {
    return (
        <Section className={className}>
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
