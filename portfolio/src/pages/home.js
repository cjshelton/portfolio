import React from "react"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { sizes } from "../styles/variables"

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

const HomePage = () => {
    return (
        <Layout page="Home">
            <SEO title={seo.title} description={seo.description} />
            <div css={imageContainer}>
                <div class="overlay">
                    <h1>Portfolio</h1>
                    <h2>
                        Specialising in full-stack web application development
                        using <span css={bold}>ASP.NET Core</span> and{" "}
                        <span css={bold}>Node.js</span>
                    </h2>
                </div>
            </div>
            <h1 style={{ color: "black" }}>Home</h1>
        </Layout>
    )
}

export default HomePage
