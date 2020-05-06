import React from "react"
import { Global } from "@emotion/core"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import Footer from "../components/footer"
import Button from "../components/btn"

import globalStyles from "../styles/global"
import { colours } from "../styles/variables"

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFrown } from "@fortawesome/free-regular-svg-icons"

const seo = {
    title: "Page Not Found",
    description: `Portfolio for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${colours.primary};
`

const Content = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .sad-face {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 140px;
        color: ${colours.primaryMediumDark};
    }

    .title {
        font-size: 35px;
        margin-top: 20px;
    }

    .message {
        margin-top: 5px;
        font-size: 18px;
        margin-bottom: 40px;
    }
`

const FooterContainer = styled.div`
    flex-shrink: 1;
    padding: 10px;
`

const NotFoundPage = () => (
    <div css={container}>
        <SEO title={seo.title} description={seo.description} />
        <Global styles={globalStyles} />
        <Content>
            <div className="sad-face">:(</div>
            <h1 className="title">Page Not Found</h1>
            <p className="message">
                Oops! The page you requested does not exist.
            </p>
            <Button medium to="/home">
                Home
            </Button>
        </Content>

        <FooterContainer>
            <Footer></Footer>
        </FooterContainer>
    </div>
)

export default NotFoundPage
