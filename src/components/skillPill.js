import React from "react"
import { css } from "@emotion/core"
import { colours, sizes } from "../styles/variables"

const skillPill = css`
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    margin: 2px 3px;
    padding: 2px 4px;
    border-radius: 5px;

    font-size: 14px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 3.5vw;
    }

    background-color: ${colours.primaryMediumLight};
    color: ${colours.primaryTextLight};
`

const SkillPill = ({ children }) => <div css={skillPill}>{children}</div>

export default SkillPill
