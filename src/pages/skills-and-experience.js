import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { sizes, colours } from "../styles/variables"
import Page from "../components/layouts/page"
import UolLogo from "../components/uol-logo"
import TechLogo from "../components/tech-logo"

import experienceData from "../data/experience.json"

const seo = {
    title: "Skills and Experience",
    description: `Skills and experience for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const ClearFix = styled.div`
    float: none;
    clear: both;
`

const uolLogoContainer = css`
    width: 200px;
    margin: 20px auto;
`

const ExperienceEntry = styled.div`
    border-left: 5px solid ${colours.primary};
    margin-bottom: 20px;
    margin-left: 10px;

    .experience-company {
        font-size: 20px;
        font-weight: 600;
        margin: 0 10px;

        @media (max-width: ${sizes.xSmall}) {
            font-size: 5vw;
        }
    }

    .experience-title {
        font-size: 16px;
        margin-bottom: 10px;
        margin: 0 10px 10px 10px;

        @media (max-width: ${sizes.xSmall}) {
            font-size: 4vw;
        }
    }
`

const SkillsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const SkillEntry = styled.div`
    flex: 1 0 150px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 10px;

    @media (max-width: ${sizes.xSmall}) {
        flex-basis: 60px;
    }

    .logo {
        width: 100%;
        max-width: 100px;

        @media (max-width: ${sizes.xSmall}) {
            max-width: 60px;
        }
    }
`

const headerJsx = (
    <div>
        <h1>Skills &amp; Experience</h1>
        <h2>
            Learn more about my skills &amp; experience as a software engineer
        </h2>
    </div>
)

const contentJsx = (
    <div>
        <section>
            <h1 className="section-header">Education</h1>
            <div css={uolLogoContainer}>
                <UolLogo></UolLogo>
            </div>
            <p className="section">
                I proudly graduated from The University of Leeds in 2016, with a
                First-class (Hons) in Computer Science. I also received an award
                for academic excellence two years in a row during my time at
                University.
            </p>
            <p className="section">
                I thoroughly enjoyed my degree. I enjoyed the challenges it
                presented, and the opportunities it has given me for my future.
                I worked hard, and it paid off, and that has enabled me to do
                something as a job every day, which feels much more like a
                hobby.
            </p>
        </section>
        <section>
            <h1 className="section-header">Professional Experience</h1>

            {experienceData.timeline.map(
                ({ company, title, period, description }) => {
                    return (
                        <ExperienceEntry>
                            <h2 className="experience-company">
                                {company}, {period}
                            </h2>
                            <h3 className="experience-title">{title}</h3>
                            <p className="section">{description}</p>
                        </ExperienceEntry>
                    )
                }
            )}
        </section>
        <section>
            <h1 className="section-header">Core Skills</h1>
            <p className="section">
                Below are some examples of my core skills which I am competent
                in.
            </p>
            <SkillsList>
                {experienceData.skills.map(
                    ({ name, imageSource, imageAltText }) => {
                        return (
                            <SkillEntry>
                                <div className="logo" title={name}>
                                    <TechLogo
                                        image={imageSource}
                                        altText={imageAltText}
                                    ></TechLogo>
                                </div>
                            </SkillEntry>
                        )
                    }
                )}
            </SkillsList>
            <p className="section" style={{ marginTop: "10px" }}>
                This list is not exhaustive &mdash; I also have extensive
                experience in CI/CD, Docker, responsive web design, relational
                database design, Agile delivery, Message Queuing Systems (Rabbit
                MQ) and more.
            </p>
        </section>
        <section>
            <h1 className="section-header">Other Skills</h1>
            <p className="section">
                Below are skills I am less experienced in, having learnt them
                through side projects and personal work, but contribute to my
                abilities as a well-rounded software engineer.
            </p>
        </section>
    </div>
)

const SkillsPage = () => {
    return (
        <Page
            header={headerJsx}
            content={contentJsx}
            page="Skills and Experience"
            seo={seo}
            backgroundImageUrl="/images/code.jpg"
            initialBackgroundColour="#1e2022"
        ></Page>
    )
}

export default SkillsPage
