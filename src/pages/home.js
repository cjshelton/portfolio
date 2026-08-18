import React from "react";
import { css } from "@emotion/react";

import Page from "../components/layouts/page";
import PageSection from "../components/page-section";
import ShellLogo from "../components/shell-logo";

import { sizes } from "../styles/variables";

const seo = {
    title: "Home",
    description: `Home page for Chris Shelton's Portfolio. I am a UK-based Principal Software Engineer and technical leader, specialising in data, analytics and AI engineering for commodities trading.`,
};

const headerSection = (
    <div>
        <h1>Portfolio</h1>
        <h2>
            Technical leader specialising in <span className="bold">data</span>,{" "}
            <span className="bold">analytics</span> and{" "}
            <span className="bold">AI</span> engineering for commodities trading
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
                I&apos;m Chris &mdash; I&apos;m a Principal Software Engineer
                and technical leader based in the UK.
            </p>
            <p className="section-text">
                My Portfolio aims to outline my skills, experience and
                achievements so far in my career, as well as showcase some of
                own personal work, and also introduce a little bit more about
                me.
            </p>
            <p className="section-text">
                I&apos;ve been in the professional software industry since 2016,
                working across software consultancy and global enterprise, and
                now lead engineering teams delivering business-critical systems.
            </p>
            <p className="section-text">
                I have broad experience across the whole software development
                life cycle, from hands-on full-stack development through to
                technical leadership and architecture. Today I specialise in
                data, analytics and AI engineering on Azure, with a strong
                background in full-stack JavaScript and TypeScript.
            </p>
        </PageSection>
        <PageSection heading="Where I Work">
            <div css={shellLogoContainer}>
                <ShellLogo />
            </div>
            <p className="section-text">
                I am a Principal Software Engineer at{" "}
                <a
                    href="https://www.shell.co.uk/"
                    className="primary-text-link"
                >
                    Shell
                </a>
                , working in LNG Trading within Trading &amp; Supply.
            </p>
            <p className="section-text">
                I help lead a globally distributed engineering team supporting
                Shell LNG Marketing and Trading&apos;s Short-Term Trading desks
                across Europe, the Middle East and Asia.
            </p>
            <p className="section-text">
                I work closely with Traders and Trading Analysts, combining
                front-office understanding with strong software engineering to
                deliver business-critical analytics and applications.
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
