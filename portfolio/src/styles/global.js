import { css } from "@emotion/core"
import { colours, fonts } from "../styles/variables"

export default css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;

        font-family: ${fonts.primary};
        color: ${colours.primaryTextLight};
    }
`
