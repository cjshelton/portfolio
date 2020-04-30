import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Image from "../components/image"
import Nav from "../components/nav"

import { colours, sizes } from "../styles/variables"

const TopNav = styled.div`
    display: none; /* Hidden by default. Show on smaller devices. */

    width: 100%;
    height: 60px;
    background-color: ${colours.primary};
    padding: 5px 10px;

    flex-shrink: 1;

    @media (max-width: ${sizes.medium}) {
        display: block;
    }
`

const verticalCenter = css`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const mugshotContainer = css`
    float: left;
    ${verticalCenter}
`

const mugshot = css`
    width: 45px;
`

const siteTitle = css`
    float: left;
    margin-left: 10px;
    font-size: 20px;
    ${verticalCenter}
`

const navContainer = css`
    float: right;
    font-size: 16px;
    ${verticalCenter}

    ul {
        list-style: none;
        font-size: 16px;

        li {
            float: left;

            &:not(:first-of-type) {
                margin-left: 10px;
            }

            a,
            &:visited {
                color: ${colours.primaryText};
                text-decoration: none;
            }

            a:hover {
                color: ${colours.primaryLight};
                text-decoration: underline;
            }

            &.current {
                text-decoration: underline;
            }
        }
    }
`

const Navbar = ({ page }) => (
    <TopNav>
        <div css={mugshotContainer}>
            <div css={mugshot}>
                <Image></Image>
            </div>
        </div>
        <div css={siteTitle}>Portfolio | Chris Shelton</div>
        <div css={navContainer}>
            <Nav page={page}></Nav>
        </div>
    </TopNav>
)

export default Navbar
