import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"

import { sizes, colours } from "../styles/variables"
import Page from "../components/layouts/page"

import personalProjectsData from "../data/personal-projects.json"

const seo = {
    title: "Personal Projects",
    description: `Personal Projects for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const baseLinkStyle = css`
    font-size: 12px;
    padding: 3px;
    border-radius: 5px;
`

const GitHubButton = styled.a`
    ${baseLinkStyle}
    background-color: ${colours.githubIcon};
    color: white;

    &:hover {
        background-color: ${colours.githubIconLight};
    }
`

const BlogButton = styled.a`
    ${baseLinkStyle}
    background-color: ${colours.blogIcon};
    color: white;
    margin-right: 5px;

    &:hover {
        background-color: ${colours.blogIconLight};
    }
`

const link = css`
    float: right;
`

const ClearFix = styled.div`
    float: none;
    clear: both;
`

const skillPill = css`
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    margin: 2px 3px;
    padding: 2px 4px;
    border-radius: 5px;

    font-size: 14px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 3.5vw;
    }

    background-color: ${colours.primaryMediumLight};
    color: ${colours.primaryTextLight};
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
        <section>
            <p className="section">
                I spend some of my personal time working on personal and side
                projects. This allows me to learn new skills and work with
                different technologies than my day-to-day job requires.
            </p>
            <p className="section">
                Below are some examples of what I&apos;ve been working on. Where
                possible, I have linked the GitHub repository links and public
                URLs.
            </p>
        </section>
        {personalProjectsData.projects.map(
            ({ name, tags, description, githubURL, blogURL }, index) => {
                const htmlDescription = {
                    __html: description,
                }

                return (
                    <section key={index}>
                        <h1 className="section-header">{name}</h1>
                        <div className="section">
                            {githubURL && (
                                <GitHubButton css={link} href={githubURL}>
                                    <FontAwesomeIcon icon={faGithub} /> View
                                    Source
                                </GitHubButton>
                            )}
                            {blogURL && (
                                <BlogButton css={link} href={blogURL}>
                                    <FontAwesomeIcon icon={faBookOpen} /> View
                                    Article
                                </BlogButton>
                            )}

                            <ClearFix />
                        </div>
                        <div dangerouslySetInnerHTML={htmlDescription}></div>
                        <div className="section">
                            {tags.map((skill, index) => {
                                return (
                                    <div css={skillPill} key={index}>
                                        {skill}
                                    </div>
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
