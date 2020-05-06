import React from "react"
import Socials from "../components/socials"

import { css } from "@emotion/core"

import { sizes } from "../styles/variables"

const expandedStyles = css`
    flex-direction: row;
`

const collapsedStyles = css`
    flex-direction: column;
    justify-content: center;

    .copyright {
        margin-top: 5px;
    }
`

function getFooterStyles(isCollapsed) {
    return css`
        display: flex;
        ${isCollapsed ? collapsedStyles : expandedStyles}

        align-items: center;

        .socials {
            flex-grow: 1;
            text-align: left;
        }

        .copyright {
            flex-grow: 1;
            text-align: right;
        }

        @media (max-width: ${sizes.small}) {
            ${collapsedStyles}
        }
    `
}

const Footer = ({ collapsed }) => {
    const styles = getFooterStyles(collapsed)

    return (
        <footer>
            <div css={styles}>
                <div className="socials">
                    <Socials></Socials>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()}, Chris Shelton
                </div>
            </div>
        </footer>
    )
}

export default Footer
