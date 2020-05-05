import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { sizes, colours } from "../styles/variables"

const seo = {
    title: "Home",
    description: `Portfolio for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const bold = css`
    font-weight: 400;
`

const imageContainer = css`
    width: 100%;
    min-height: 250px;
    background-color: #d5d5d5; /* Base colour from the image to show before it loads. */
    background-image: url("./images/home.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    position: relative;

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(18, 26, 33, 0.3);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 0 40px;
        text-align: center;

        h1 {
            font-size: 40px;
            font-weight: 400;

            @media (max-width: ${sizes.xSmall}) {
                font-size: 10vw;
            }
        }

        h2 {
            font-size: 20px;
            font-weight: 300;

            @media (max-width: ${sizes.xSmall}) {
                font-size: 5vw;
            }
        }
    }
`

const PageContent = styled.div`
    color: ${colours.primaryTextDark};
    padding: 50px 80px;

    @media (max-width: ${sizes.small}) {
        padding: 20px 40px;
    }

    @media (max-width: ${sizes.xSmall}) {
        padding: 20px 20px;
    }

    .greeting {
        font-size: 20px;
        margin-bottom: 10px;
        margin-left: 10px;

        @media (max-width: ${sizes.xSmall}) {
            font-size: 5vw;
        }
    }

    .home-section-header {
        font-size: 24px;
        margin-bottom: 10px;
        background-color: ${colours.primary};
        color: ${colours.primaryTextLight};
        padding: 4px 8px;

        &::before {
            content: "// ";
        }

        @media (max-width: ${sizes.xSmall}) {
            font-size: 5vw;
        }
    }

    .home-section {
        font-size: 16px;
        margin-bottom: 10px;
        padding: 0 10px;

        @media (max-width: ${sizes.xSmall}) {
            font-size: 4vw;
        }
    }
`

const HomePage = () => {
    return (
        <Layout page="Home">
            <SEO title={seo.title} description={seo.description} />
            <div css={imageContainer}>
                <div className="overlay">
                    <h1>Portfolio</h1>
                    <h2>
                        Specialising in full-stack web application development
                        using <span css={bold}>ASP.NET Core</span> and{" "}
                        <span css={bold}>Node.js</span>
                    </h2>
                </div>
            </div>
            <PageContent>
                <section>
                    <h1 className="home-section-header">About Me</h1>
                    <p className="greeting">
                        Hi{" "}
                        <span role="img" aria-label="Waving hand emoji">
                            &#128075;
                        </span>{" "}
                        I&apos;m Chris &mdash; I&apos;m an enthusiastic software
                        engineer from Leeds, UK.
                    </p>
                    <p className="home-section">
                        My Portfolio aims to outline my skills, experience and
                        achievements so far in my career, as well as showcase
                        some of own personal work, and also introduce a little
                        bit more about me.
                    </p>
                    <p className="home-section">
                        I graduated from the University of Leeds in Computer
                        Science, and have been in the professional software
                        industry since 2016, with prior experience of working on
                        personal projects and an internship.
                    </p>
                    <p className="home-section">
                        I have a variety of skills and experience in the whole
                        software development life cycle, gained through my
                        professional career and doing projects in my own time. I
                        specialise in full-stack web application development
                        using both ASP.NET Core and Node.js. My full skill set
                        can be found on my Skills and Experience page.
                    </p>
                </section>
                <section>
                    <h1 className="home-section-header">Where I Work</h1>
                    <p className="home-section">
                        I am an experienced Technical Specialist at Bluesmith
                        Information Systems, Leeds. We design and build bespoke
                        applications and data warehouses. My role at Bluesmith
                        has always focused on application development,
                        specifically for the web.
                    </p>
                    <p className="home-section">
                        I started out my career at Bluesmith as an intern during
                        my year-long industrial placement in 2014. This was a
                        successful experience for me, leading to a full-time
                        developer position which I still hold today.
                    </p>
                    <p className="home-section">
                        Due to the nature of our services at Bluesmith, I am
                        lucky to have experienced a variety of different
                        projects, both green and brown-field, for different
                        clients, using a variety of technologies. I have held
                        multiple roles at Bluesmith, including tech and
                        team-lead responsibilities.
                    </p>
                </section>
                <section>
                    <h1 className="home-section-header">A Bit More About Me</h1>
                    <p className="home-section">
                        Software development is a passion of mine, and something
                        I like to spend my spare time doing also to help me
                        up-skill and experiment with different technologies.
                    </p>
                    <p className="home-section">
                        I run a tech blog which I post to occasionally to share
                        new experiences, things I have built, and problems I
                        have solved. I also enjoy attending local conferences,
                        namely Leeds Sharp and LeedsJS.
                    </p>
                    <p className="home-section">
                        I&apos;m not a total techie &mdash; I also have a keen
                        interest sports, video games, theatre and cooking.
                    </p>
                </section>
            </PageContent>
        </Layout>
    )
}

export default HomePage
