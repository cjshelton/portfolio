import React from "react"
import { css } from "@emotion/core"

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"

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
    padding: 3px;
    border-radius: 5px;
    float: right;
`

const GetGitHubLinkStyle = isActiveLink => {
    const activeLinkStyles = css`
        &:hover {
            background-color: ${colours.githubIconLight};
        }
    `

    return css`
        ${baseLinkStyle}
        background-color: ${colours.githubIcon};
        color: white;

        ${isActiveLink ? activeLinkStyles : ""}
    `
}

const GetBlogLinkStyle = isActiveLink => {
    const activeLinkStyles = css`
        &:hover {
            background-color: ${colours.blogIconLight};
        }
    `

    return css`
        ${baseLinkStyle}
        background-color: ${colours.blogIcon};
        color: white;
        margin-right: 5px;

        ${isActiveLink ? activeLinkStyles : ""}
    `
}
const linksLegend = css`
    background-color: ${colours.primaryLight};
    padding: 20px;
    height: 100px;
    margin-bottom: 30px;
    border-radius: 5px;
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
                different technologies than my day-to-day job requires. Below
                are some examples of what I&apos;ve been working on.
            </p>
            <div css={linksLegend}>
                <p className="section">
                    Where available, I have added the following links to each
                    project:
                </p>
                <div css={GetGitHubLinkStyle(false)} href="#">
                    <FontAwesomeIcon icon={faGithub} /> View Source
                </div>
                <div css={GetBlogLinkStyle(false)} href="#">
                    <FontAwesomeIcon icon={faBookOpen} /> View Article
                </div>
                <div css={GetGitHubLinkStyle(false)} href="#">
                    <FontAwesomeIcon icon={faBookOpen} /> Visit Site
                </div>
                <ClearFix />
            </div>
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
                                <a
                                    css={GetGitHubLinkStyle(true)}
                                    href={githubURL}
                                >
                                    <FontAwesomeIcon icon={faGithub} /> View
                                    Source
                                </a>
                            )}
                            {blogURL && (
                                <a css={GetBlogLinkStyle(true)} href={blogURL}>
                                    <FontAwesomeIcon icon={faBookOpen} /> View
                                    Article
                                </a>
                            )}

                            <ClearFix />
                        </div>
                        {/* dangerouslySetInnerHTML is safe to use here as the description content is static. */}
                        <div dangerouslySetInnerHTML={htmlDescription}></div>
                        <div className="section">
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
