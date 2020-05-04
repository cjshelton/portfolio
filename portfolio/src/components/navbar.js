import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import Image from "../components/image"
import Nav from "../components/nav"

import { colours, sizes } from "../styles/variables"

const TopNav = styled.div`
    display: none; /* Hidden by default. Show on smaller devices. */

    width: 100%;
    min-height: 60px;
    background-color: ${colours.primary};
    padding: 5px 10px 7px 10px;

    flex-shrink: 1;

    @media (max-width: ${sizes.medium}) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
    }
`

const mugshotContainer = css`
    flex-shrink: 1;
`

const mugshot = css`
    width: 50px;

    @media (max-width: ${sizes.xSmall}) {
        width: 12vw;
    }
`

const siteTitle = css`
    flex-grow: 1;
    margin-left: 10px;
    font-size: 20px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 5vw;
    }
`

const navContainer = css`
    flex-shrink: 1;
    font-size: 16px;

    ul {
        font-size: 16px;

        li {
            float: left;

            &:not(:first-of-type) {
                margin-left: 10px;
            }
        }
    }

    @media (max-width: ${sizes.small}) {
        display: none; /* Hide the nav on smaller devices by default. */

        &.menu-open {
            display: block;
            flex-grow: 1;
            width: 100%;

            margin-top: 20px;

            ul {
                font-size: 18px;

                li {
                    background-color: ${colours.primaryMediumLight};
                    padding: 8px 0;
                    margin-bottom: 10px;
                    display: block;
                    width: 100%;
                    text-align: center;

                    &:not(:first-of-type) {
                        margin-left: 0;
                    }

                    &:hover {
                        background-color: ${colours.primaryDark};
                    }

                    &.current {
                        background-color: ${colours.primaryDark};
                    }
                }
            }
        }
    }
`

const navButtonContainer = css`
    display: none;

    button {
        width: 30px;
        font-size: 20px;
        color: white;
        background-color: transparent;
        padding: 2px 5px;
        border-radius: 5px;

        &:hover {
            background-color: ${colours.primaryDark};
        }
    }

    @media (max-width: ${sizes.small}) {
        display: block;
        flex-shrink: 1;
    }
`

const Navbar = ({ page }) => {
    const [isMenuOpen, toggleMenu] = useState(false)

    return (
        <TopNav>
            <div css={mugshotContainer}>
                <div css={mugshot}>
                    <Image></Image>
                </div>
            </div>
            <div css={siteTitle}>Portfolio | Chris Shelton</div>
            <div css={navButtonContainer}>
                <button
                    className={isMenuOpen ? "menu-button" : ""}
                    onClick={() => toggleMenu(!isMenuOpen)}
                >
                    {!isMenuOpen && <FontAwesomeIcon icon={faBars} />}
                    {isMenuOpen && <FontAwesomeIcon icon={faTimes} />}
                </button>
            </div>
            <div className={isMenuOpen ? "menu-open" : ""} css={navContainer}>
                <Nav page={page}></Nav>
            </div>
        </TopNav>
    )
}

export default Navbar
