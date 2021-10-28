import React from "react";
import ProfileLinks from "../components/profile-links";

import { css } from "@emotion/react";

import { sizes } from "../styles/variables";

const expandedStyles = css`
    flex-direction: row;
`;

const collapsedStyles = css`
    flex-direction: column;
    justify-content: center;

    .copyright {
        margin-top: 5px;
    }
`;

function getFooterStyles(isCollapsed) {
    return css`
        display: flex;
        ${isCollapsed ? collapsedStyles : expandedStyles}

        align-items: center;

        .profile-links {
            flex: 1 0 0;
            text-align: left;
        }

        .copyright {
            flex-grow: 1 0 0;
            text-align: right;
        }

        @media (max-width: ${sizes.small}) {
            ${collapsedStyles}
        }
    `;
}

const Footer = ({ collapsed }) => {
    const styles = getFooterStyles(collapsed);

    return (
        <footer>
            <div css={styles}>
                <div className="profile-links">
                    <ProfileLinks></ProfileLinks>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()}, Chris Shelton
                </div>
            </div>
        </footer>
    );
};

export default Footer;
