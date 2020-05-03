import React from "react"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import Layout from "../components/layout"

const seo = {
    title: "Home",
    description: `Portfolio for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const imageContainer = css`
    width: 100%;
    height: 400px;
    background-color: #d5d5d5; /* Base colour from the image to show before it loads. */
    background-image: url("./images/home.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
`

const HomePage = () => {
    return (
        <Layout page="Home">
            <SEO title={seo.title} description={seo.description} />
            <div css={imageContainer}></div>
            <h1 style={{ color: "black" }}>Home</h1>
        </Layout>
    )
}

export default HomePage
