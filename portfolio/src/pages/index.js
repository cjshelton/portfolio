import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "../components/image"

import { colours, fonts } from "../styles/variables"

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
            &:not(:first-child) {
                margin-left: 20px;
            }

            a {
                &:visited {
                    color: ${colours.primaryText};
                }

                &:hover {
                    color: #adbfd2;
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

    span {
        float: right;
    }
`

const name = css`
    font-size: 40px;
    margin-top: 20px;
`

const location = css`
    font-size: 18px;
`

const title = css`
    font-size: 25px;
    margin-top: 20px;
`

const experience = css`
    font-size: 18px;
    margin-top: 5px;
`

const IndexPage = () => (
    <Container>
        <Global
            styles={css`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                html,
                body,
                #___gatsby {
                    height: 100%;

                    font-family: ${fonts.primary};
                    color: ${colours.primaryText};
                }
            `}
        />
        <SEO title="Home" />
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
            <div style={{ width: `200px` }}>
                <Image />
            </div>
            <div css={name}>Chris Shelton</div>
            <div css={location}>Leeds, UK</div>
            <div css={title}>Software Engineer</div>
            <p css={experience}>
                Specialising in full-stack web application development using
                ASP.NET Core and Node.js
            </p>
        </Content>
        <Footer>
            <span>&copy; {new Date().getFullYear()}, Chris Shelton</span>
        </Footer>
    </Container>
)

export default IndexPage
