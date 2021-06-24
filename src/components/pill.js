import React from "react";
import { css } from "@emotion/core";
import { colours, sizes } from "../styles/variables";

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const fontSizes = {
    small: "10px",
    large: "14px",

    responsive: {
        small: "2.5vw",
        large: "3.5vw",
    },
};

const getPillContainerStyles = size => css`
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    margin: 2px 3px;
    padding: 2px 6px;
    border-radius: 5px;

    background-color: ${colours.primaryMediumLight};
    color: ${colours.primaryTextLight};

    .contents {
        display: flex;
        align-items: center;

        .tag-icon {
            margin-right: 5px;
        }
    }

    .contents,
    .tag-icon {
        font-size: ${fontSizes[size]};

        @media (max-width: ${sizes.xSmall}) {
            font-size: ${fontSizes.responsive[size]};
        }
    }
`;

const Pill = ({ children, size = "large", showTagIcon = false }) => (
    <div css={getPillContainerStyles(size)}>
        <div className="contents">
            {showTagIcon && (
                <FontAwesomeIcon icon={faTag} className="tag-icon" />
            )}{" "}
            {children}
        </div>
    </div>
);

export default Pill;
