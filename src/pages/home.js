import React from "react";
import { css } from "@emotion/react";

import Page from "../components/layouts/page";
import PageSection from "../components/page-section";
import ShellLogo from "../components/shell-logo";

import { sizes } from "../styles/variables";

const seo = {
    title: "Home",
    description: `Home page for Chris Shelton's Portfolio. I am a UK-based software engineer, specialising in full-stack web application development in the JavaScript technology stack.`,
};

const headerSection = (
    <div>
        <h1>Portfolio</h1>
        <h2>
            Specialising in <span className="bold">full-stack</span> web
            application development in the{" "}
            <span className="bold">JavaScript</span> technology stack
        </h2>
    </div>
);

const greeting = css`
    font-size: 20px;
    margin-bottom: 10px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 4.5vw;
    }
`;

const shellLogoContainer = css`
    width: 100px;
    margin: 20px auto;
`;

const contentSection = (
    <div>
        <PageSection heading="About Me">
            <p css={greeting}>
                Hi{" "}
                <span role="img" aria-label="Waving hand emoji">
                    &#128075;
                </span>{" "}
                I&apos;m Chris &mdash; I&apos;m an enthusiastic software
                engineer based in the UK.
            </p>
            <p className="section-text">
                My Portfolio aims to outline my skills, experience and
                achievements so far in my career, as well as showcase some of
                own personal work, and also introduce a little bit more about
                me.
            </p>
            <p className="section-text">
                I graduated from the University of Leeds in Computer Science,
                and have been in the professional software industry since 2016,
                with prior experience of working on personal projects and an
                internship.
            </p>
            <p className="section-text">
                I have a variety of skills and experience in the whole software
                development life cycle, gained through my professional career
                and doing projects in my own time. I specialise in full-stack
                web application development in the JavaScript technology stack,
                including React, Vue, Node.js and MongoDB.
            </p>
        </PageSection>
        <PageSection heading="Where I Work">
            <div css={shellLogoContainer}>
                <ShellLogo />
            </div>
            <p className="section-text">
                I am a software engineer for{" "}
                <a
                    href="https://www.shell.co.uk/"
                    className="primary-text-link"
                >
                    Shell
                </a>
                , working as part of the Shell Agile Hub team in London.
            </p>
            <p className="section-text">
                My team and I focus on product development within environmental
                solutions, specifically the voluntary carbon market, enabling
                companies to meet their goals of reducing their net carbon
                footprint.
            </p>
        </PageSection>
        <PageSection heading="A Bit More About Me">
            <p className="section-text">
                Software development is a passion of mine, and something I like
                to spend my spare time doing also to help me up-skill and
                experiment with different technologies.
            </p>
            <p className="section-text">
                I run a tech blog which I post to occasionally to share new
                experiences, things I have built, and problems I have solved. I
                also enjoy attending local conferences like LeedsJS, Vue Conf
                and many others.
            </p>
            <p className="section-text">
                I&apos;m not a total techie &mdash; I also have a keen interest
                in sports, video games, theatre and cooking.
            </p>
        </PageSection>
    </div>
);

const HomePage = () => {
    return (
        <Page
            header={headerSection}
            content={contentSection}
            page="Home"
            seo={seo}
            headerImageName="home"
        ></Page>
    );
};

export default HomePage;
