import React from "react"
import { css } from "@emotion/core"

const clearFixStyles = css`
    float: none;
    clear: both;
`

const ClearFix = () => <div css={clearFixStyles}></div>

export default ClearFix
