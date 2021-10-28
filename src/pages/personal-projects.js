import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { colours } from "../styles/variables";
import Page from "../components/layouts/page";
import PageSection from "../components/page-section";
import Pill from "../components/pill";
import ClearFix from "../components/clearfix";

import personalProjectsData from "../data/personal-projects";

const seo = {
    title: "Personal Projects",
    description: `A showcase of some of my personal projects which I use to solve problems and learn new skills.`,
};

const baseLinkStyle = css`
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 5px;
    float: right;
`;

const GitHubLinkStyle = css`
    ${baseLinkStyle}
    background-color: ${colours.githubIcon};
    color: ${colours.primaryTextLight};

    &:hover {
        background-color: ${colours.githubIconLight};
    }
`;

const BlogLinkStyle = css`
    ${baseLinkStyle}
    background-color: ${colours.blogIcon};
    color: ${colours.primaryTextLight};
    margin-right: 5px;

    &:hover {
        background-color: ${colours.blogIconLight};
    }
`;

const LiveSiteLinkStyle = css`
    ${baseLinkStyle}
    background-color: ${colours.liveSiteIcon};
    color: ${colours.primaryTextLight};
    margin-right: 5px;

    &:hover {
        background-color: ${colours.liveSiteIconLight};
    }
`;

const headerJsx = (
    <div>
        <h1>Personal Projects</h1>
        <h2>
            A glimpse into some of the projects I have been working on in my
            personal time
        </h2>
    </div>
);

const contentJsx = (
    <div>
        <PageSection>
            <p className="section-text">
                I spend some of my personal time working on personal and side
                projects. This allows me to learn new skills and work with
                different technologies than my day-to-day job requires. Below
                are some examples of what I&apos;ve been working on.
            </p>
        </PageSection>
        {personalProjectsData.projects.map(
            (
                { name, tags, description, githubURL, blogURL, liveSiteURL },
                index
            ) => {
                const htmlDescription = {
                    __html: description,
                };

                return (
                    <PageSection key={index} heading={name}>
                        <div className="section-text">
                            {githubURL && (
                                <a css={GitHubLinkStyle} href={githubURL}>
                                    <FontAwesomeIcon icon={faGithub} /> View
                                    Source
                                </a>
                            )}
                            {blogURL && (
                                <Link css={BlogLinkStyle} to={blogURL}>
                                    <FontAwesomeIcon icon={faBookOpen} /> View
                                    Article
                                </Link>
                            )}
                            {liveSiteURL && (
                                <Link css={LiveSiteLinkStyle} to={liveSiteURL}>
                                    <FontAwesomeIcon icon={faGlobe} /> View Site
                                </Link>
                            )}

                            <ClearFix />
                        </div>
                        {/* dangerouslySetInnerHTML is safe to use here as the description content is static. */}
                        <div dangerouslySetInnerHTML={htmlDescription}></div>
                        <div className="section-text">
                            {tags.map((skill, index) => {
                                return (
                                    <Pill
                                        key={index}
                                        size="small"
                                        showTagIcon={true}
                                    >
                                        {skill}
                                    </Pill>
                                );
                            })}
                        </div>
                    </PageSection>
                );
            }
        )}
    </div>
);

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
    );
};

export default PersonalProjectsPage;
