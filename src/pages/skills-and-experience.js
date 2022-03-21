import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import ExperienceEntry from "../components/ExperienceEntry";
import Page from "../components/layouts/page";
import PageSection from "../components/page-section";
import Pill from "../components/pill";
import TechLogo from "../components/tech-logo";
import UolLogo from "../components/uol-logo";
import { sizes } from "../styles/variables";

import experienceData from "../data/experience.json";

const seo = {
    title: "Skills and Experience",
    description: `An overview of my career experience so far and some of the skills I am most competent in.`,
};

const uolLogoContainer = css`
    width: 200px;
    margin: 20px auto;
`;

const additionalCoreSkillText = css`
    display: inline-block;
    vertical-align: middle;
`;

const SkillsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const SkillEntry = styled.div`
    flex: 1 0 150px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 10px;

    @media (max-width: ${sizes.xSmall}) {
        flex-basis: 120px;
    }

    .logo {
        width: 100%;
        max-width: 100px;

        .gatsby-image-wrapper {
            height: 100%;
        }

        @media (max-width: ${sizes.xSmall}) {
            max-width: 80px;
        }
    }
`;

const headerJsx = (
    <div>
        <h1>Skills &amp; Experience</h1>
        <h2>
            Learn more about my skills &amp; experience as a software engineer
        </h2>
    </div>
);

const contentJsx = (
    <div>
        <PageSection heading="Education">
            <div css={uolLogoContainer}>
                <UolLogo></UolLogo>
            </div>
            <p className="section-text">
                I proudly graduated from The University of Leeds in 2016, with a
                First-class (Hons) in Computer Science. I also received an award
                for academic excellence two years in a row during my time at
                University.
            </p>
            <p className="section-text">
                I thoroughly enjoyed my degree. I enjoyed the challenges it
                presented, and the opportunities it has given me for my future.
                I worked hard, and it paid off, and that has enabled me to do
                something as a job every day, which feels much more like a
                hobby.
            </p>
        </PageSection>
        <PageSection heading="Professional Experience">
            {experienceData.timeline.map((experience, index) => {
                return <ExperienceEntry key={index} experience={experience} />;
            })}
        </PageSection>
        <PageSection heading="Core Skills">
            <p className="section-text">
                Below are some examples of my core skills which I am competent
                in.
            </p>
            <SkillsList>
                {experienceData.coreSkills.map(
                    ({ name, imageSource, imageAltText }, index) => {
                        return (
                            <SkillEntry key={index}>
                                <div className="logo" title={name}>
                                    <TechLogo
                                        image={imageSource}
                                        altText={imageAltText}
                                    ></TechLogo>
                                </div>
                            </SkillEntry>
                        );
                    }
                )}
            </SkillsList>
            <div className="section-text">
                <div css={additionalCoreSkillText}>
                    This list is not exhaustive — I also have extensive
                    experience with
                </div>
                {experienceData.additionalCoreSkills.map((skill, index) => {
                    return <Pill key={index}>{skill}</Pill>;
                })}
                <div css={additionalCoreSkillText}>and more&hellip;</div>
            </div>
        </PageSection>
        <PageSection heading="Other Skills">
            <p className="section-text">
                I also spend time outside of work on personal and side projects
                which helps me up-skill in other technical areas. Below are some
                of my progressive skills which I am getting more experienced in,
                but still contribute to my abilities as a well-rounded software
                engineer.
            </p>
            <div className="section-text">
                {experienceData.otherSkills.map((skill, index) => {
                    return <Pill key={index}>{skill}</Pill>;
                })}
            </div>
        </PageSection>
    </div>
);

const SkillsPage = () => {
    return (
        <Page
            header={headerJsx}
            content={contentJsx}
            page="Skills and Experience"
            seo={seo}
            headerImageName="code"
        ></Page>
    );
};

export default SkillsPage;
