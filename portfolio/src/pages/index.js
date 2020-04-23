import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { Global } from "@emotion/core"
import { Link } from "gatsby"
import Image from "../components/image"

import globalStyles from "../styles/global"
import pageStyles from "../styles/index"

import { colours } from "../styles/variables"

const Container = styled.div`
    height: 100vh;
    min-height: 600px;
    width: 100%;
    background-color: ${colours.primary};
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
`

const Header = styled.div`
    flex-shrink: 1;

    ul {
        list-style: none;

        li {
            float: left;

            &:not(:first-of-type) {
                margin-left: 20px;
            }

            a {
                &:visited {
                    color: ${colours.primaryText};
                }

                &:hover {
                    color: ${colours.primaryLight};
                }
            }
        }
    }
`

const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
`

const Footer = styled.div`
    flex-shrink: 1;

    text-align: right;
`

const seo = {
    title: "Home",
    description: `Portfolio for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const IndexPage = () => (
    <Container>
        <SEO title={seo.title} description={seo.description} />
        <Global styles={globalStyles} />
        <Header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="https://cjshelton.github.io/blog">Blog</a>
                </li>
            </ul>
        </Header>
        <Content>
            <div css={pageStyles.mugshotContainer}>
                <Image />
            </div>
            <div css={pageStyles.name}>Chris Shelton</div>
            <div css={pageStyles.location}>Leeds, UK</div>
            <div css={pageStyles.title}>Software Engineer</div>
            <p css={pageStyles.experience}>
                Specialising in full-stack web application development using
                <span css={pageStyles.bold}> ASP.NET Core</span> and
                <span css={pageStyles.bold}> Node.js</span>
            </p>
        </Content>
        <Footer>&copy; {new Date().getFullYear()}, Chris Shelton</Footer>
    </Container>
)

export default IndexPage
