import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { sizes, colours } from "../styles/variables"
import Page from "../components/layouts/page"

import experienceData from "../data/experience.json"

const seo = {
    title: "Personal Projects",
    description: `Personal Projects for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

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
        <h1>Personal Projects</h1>
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
