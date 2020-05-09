import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Page from "../components/layouts/page"
import UolLogo from "../components/uol-logo"

import experienceData from "../data/experience.json"

const seo = {
    title: "Skills and Experience",
    description: `Skills and experience for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const uolLogoContainer = css`
    width: 200px;
    margin: 20px auto;
`

const ExperienceEntry = styled.div`
    .experience-company {
        font-size: 20px;
        font-weight: 600;
        margin: 0 10px;
    }

    .experience-title {
        font-size: 16px;
        margin-bottom: 10px;
        margin: 0 10px 10px 10px;
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

            {experienceData.map(({ company, title, period, description }) => {
                return (
                    <ExperienceEntry>
                        <h2 className="experience-company">
                            {company} - {period}
                        </h2>
                        <h3 className="experience-title">{title}</h3>
                        <p className="section">{description}</p>
                    </ExperienceEntry>
                )
            })}
        </section>
        <section>
            <h1 className="section-header">Core Skills</h1>
            <p className="section">
                My core skills gained through professional experience.
            </p>
        </section>
        <section>
            <h1 className="section-header">Other Skills</h1>
            <p className="section">
                Below are skills I am less experienced in, or have learnt
                through side projects, but contribute to my abilities as a
                well-rounded software engineer.
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
