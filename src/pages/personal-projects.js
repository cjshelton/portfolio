import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

import { colours } from "../styles/variables"
import Page from "../components/layouts/page"
import SkillPill from "../components/skillPill"
import ClearFix from "../components/clearfix"

import personalProjectsData from "../data/personal-projects.json"

const seo = {
    title: "Personal Projects",
    description: `Personal Projects for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const baseLinkStyle = css`
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 5px;
    float: right;
`

const GitHubLinkStyle = css`
    ${baseLinkStyle}
    background-color: ${colours.githubIcon};
    color: white;

    &:hover {
        background-color: ${colours.githubIconLight};
    }
`

const BlogLinkStyle = css`
    ${baseLinkStyle}
    background-color: ${colours.blogIcon};
    color: white;
    margin-right: 5px;

    &:hover {
        background-color: ${colours.blogIconLight};
    }
`

const LiveSiteLinkStyle = css`
    ${baseLinkStyle}
    background-color: ${colours.liveSiteIcon};
    color: white;
    margin-right: 5px;

    &:hover {
        background-color: ${colours.liveSiteIconLight};
    }
`

const headerJsx = (
    <div>
        <h1>Personal Projects</h1>
        <h2>
            A glimpse into some of the projects I have been working on in my
            personal time
        </h2>
    </div>
)

const contentJsx = (
    <div>
        <section className="section-block">
            <p className="section-text">
                I spend some of my personal time working on personal and side
                projects. This allows me to learn new skills and work with
                different technologies than my day-to-day job requires. Below
                are some examples of what I&apos;ve been working on.
            </p>
        </section>
        {personalProjectsData.projects.map(
            (
                { name, tags, description, githubURL, blogURL, liveSiteURL },
                index
            ) => {
                const htmlDescription = {
                    __html: description,
                }

                return (
                    <section className="section-block" key={index}>
                        <h1 className="section-header">{name}</h1>
                        <div className="section-text">
                            {githubURL && (
                                <a css={GitHubLinkStyle} href={githubURL}>
                                    <FontAwesomeIcon icon={faGithub} /> View
                                    Source
                                </a>
                            )}
                            {blogURL && (
                                <a css={BlogLinkStyle} href={blogURL}>
                                    <FontAwesomeIcon icon={faBookOpen} /> View
                                    Article
                                </a>
                            )}
                            {liveSiteURL && (
                                <a css={LiveSiteLinkStyle} href={liveSiteURL}>
                                    <FontAwesomeIcon icon={faGlobe} /> View Site
                                </a>
                            )}

                            <ClearFix />
                        </div>
                        {/* dangerouslySetInnerHTML is safe to use here as the description content is static. */}
                        <div dangerouslySetInnerHTML={htmlDescription}></div>
                        <div className="section-text">
                            {tags.map((skill, index) => {
                                return (
                                    <SkillPill key={index}>{skill}</SkillPill>
                                )
                            })}
                        </div>
                    </section>
                )
            }
        )}
    </div>
)

const PersonalProjectsPage = () => {
    return (
        <Page
            header={headerJsx}
            content={contentJsx}
            page="Personal Projects"
            seo={seo}
            backgroundImageUrl="/images/personal-projects.jpg"
            initialBackgroundColour="#767c80"
        ></Page>
    )
}

export default PersonalProjectsPage
