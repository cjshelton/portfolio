import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Image from "../components/image"
import Nav from "../components/nav"
import Footer from "../components/footer"

import { colours } from "../styles/variables"
import pageStyles from "../styles/sidebar"

import navData from "../data/nav.json"

navData.sort((a, b) => {
    if (a.order < b.order) {
        return -1
    }

    return 1
})

const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${colours.primary};
    padding: 20px;
    text-align: center;
`

const Upper = styled.div`
    flex-shrink: 1;
`

const Middle = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    ul {
        font-size: 20px;

        li {
            padding: 10px 2px;
            background-color: ${colours.primaryMediumDark};
            margin: 10px 0;

            a {
                display: block;
                width: 100%;
            }

            &:hover {
                background-color: ${colours.primaryDark};
            }

            &.current {
                background-color: ${colours.primaryDark};
            }
        }
    }
`

const Lower = styled.div`
    flex-shrink: 1;
`

const Sidebar = ({ page }) => (
    <Container>
        <Upper>
            <div css={pageStyles.mugshotContainer}>
                <Link to="/">
                    <Image />
                </Link>
            </div>
            <div css={pageStyles.name}>Chris Shelton</div>
            <div css={pageStyles.location}>Leeds, UK</div>
            <div css={pageStyles.title}>Software Engineer</div>
        </Upper>
        <Middle>
            <Nav page={page}></Nav>
        </Middle>
        <Lower>
            <Footer collapsed></Footer>
        </Lower>
    </Container>
)

export default Sidebar
