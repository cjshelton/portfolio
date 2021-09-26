import React from "react";
import { css } from "@emotion/core";

import Page from "../components/layouts/page";
import PageSection from "../components/page-section";

import { sizes } from "../styles/variables";

const seo = {
    title: "Home",
    description: `Home page for Chris Shelton's Portfolio. I am a UK-based software engineer, specialising in full-stack web application development in the JavaScript technology stack.`,
};

const bold = css`
    font-weight: 400;
`;

const headerSection = (
    <div>
        <h1>Portfolio</h1>
        <h2>
            Specialising in full-stack web application development using{" "}
            <span css={bold}>ASP.NET Core</span> and{" "}
            <span css={bold}>Node.js</span>
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

const contentSection = (
    <div>
        <PageSection heading="About Me">
            <p css={greeting}>
                Hi{" "}
                <span role="img" aria-label="Waving hand emoji">
                    &#128075;
                </span>{" "}
                I&apos;m Chris &mdash; I&apos;m an enthusiastic software
                engineer from Leeds, UK.
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
                web application development using both ASP.NET Core and Node.js.
            </p>
        </PageSection>
        <PageSection heading="Where I Work">
            <p className="section-text">
                I am an experienced Technical Specialist at Bluesmith
                Information Systems, Leeds. We design and build bespoke
                applications and data warehouses. My role at Bluesmith has
                always focused on application development, specifically for the
                web.
            </p>
            <p className="section-text">
                I started out my career at Bluesmith as an intern during my
                year-long industrial placement in 2014. This was a successful
                experience for me, leading to a full-time developer position
                which I still hold today.
            </p>
            <p className="section-text">
                Due to the nature of our services at Bluesmith, I am lucky to
                have experienced a variety of different projects, both green and
                brown-field, for different clients, using a variety of
                technologies. I have held multiple roles at Bluesmith, including
                tech and team-lead responsibilities.
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
                also enjoy attending local conferences, namely Leeds Sharp and
                LeedsJS.
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
            backgroundImageUrl="/images/home.jpg"
            initialBackgroundColour="#d5d5d5"
        ></Page>
    );
};

export default HomePage;
