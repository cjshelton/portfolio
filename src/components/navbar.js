import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "gatsby";

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Mugshot from "../components/mugshot";
import Nav from "../components/nav";

import { BackgroundGradientStyles, MenuItemStyles } from "../styles/shared";
import { colours, sizes } from "../styles/variables";

const TopNav = styled.div`
    display: none; /* Hidden by default. Show on smaller devices. */

    width: 100%;
    min-height: 60px;
    background-color: ${colours.primary};
    padding: 5px 10px 7px 10px;
    ${BackgroundGradientStyles}

    flex-shrink: 1;

    @media (max-width: ${sizes.medium}) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
    }
`;

const mugshotContainer = css`
    flex-shrink: 1;
`;

const mugshot = css`
    width: 50px;

    @media (max-width: ${sizes.xSmall}) {
        width: 12vw;
    }
`;

const siteTitle = css`
    flex-grow: 1;
    margin-left: 10px;
    font-size: 20px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 5vw;
    }
`;

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
                    display: block;
                    width: 100%;
                    margin-bottom: 10px;

                    background-color: ${colours.primaryMediumLight};
                    text-align: center;

                    &:not(:first-of-type) {
                        margin-left: 0;
                    }

                    ${MenuItemStyles}

                    a {
                        display: block;
                        padding: 8px 0;
                    }
                }
            }
        }
    }
`;

const navButtonContainer = css`
    display: none;

    button {
        padding: 2px 5px;

        font-size: 30px;
        color: ${colours.white};
        background-color: transparent;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: ${sizes.small}) {
        display: block;
        flex-shrink: 1;
    }
`;

const Navbar = ({ page }) => {
    const [isMenuOpen, toggleMenu] = useState(false);

    return (
        <TopNav>
            <div css={mugshotContainer}>
                <div css={mugshot}>
                    <Link to="/">
                        <Mugshot />
                    </Link>
                </div>
            </div>
            <div css={siteTitle}>
                <Link to="/">Portfolio | Chris Shelton</Link>
            </div>
            <div css={navButtonContainer}>
                <button
                    className={isMenuOpen ? "menu-button" : ""}
                    onClick={() => toggleMenu(!isMenuOpen)}
                    aria-label="Toggle nav menu"
                >
                    {!isMenuOpen && <FontAwesomeIcon icon={faBars} />}
                    {isMenuOpen && <FontAwesomeIcon icon={faTimes} />}
                </button>
            </div>
            <div className={isMenuOpen ? "menu-open" : ""} css={navContainer}>
                <Nav page={page}></Nav>
            </div>
        </TopNav>
    );
};

export default Navbar;
