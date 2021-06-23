import React from "react";
import { css } from "@emotion/core";
import { colours, sizes } from "../styles/variables";

const fontSizes = {
    small: "10px",
    large: "14px",

    responsive: {
        small: "2.5vw",
        large: "3.5vw",
    },
};

const getSkillPillStyles = size => css`
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    margin: 2px 3px;
    padding: 2px 4px;
    border-radius: 5px;

    font-size: ${fontSizes[size]};

    @media (max-width: ${sizes.xSmall}) {
        font-size: ${fontSizes.responsive[size]};
    }

    background-color: ${colours.primaryMediumLight};
    color: ${colours.primaryTextLight};
`;

const SkillPill = ({ children, size = "large" }) => (
    <div css={getSkillPillStyles(size)}>{children}</div>
);

export default SkillPill;
