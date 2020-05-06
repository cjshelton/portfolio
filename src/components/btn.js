import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colours } from "../styles/variables"

const baseStyles = css`
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    font-size: 15px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const darkStyles = css`
    ${baseStyles}
    background-color: ${colours.primaryMediumDark};
    color: ${colours.primaryTextLight};
    box-shadow: 3px 3px 2px ${colours.primaryDark};

    &:hover {
        background-color: ${colours.primaryDark};
    }
`

const mediumStyles = css`
    ${baseStyles}
    background-color: ${colours.primaryMediumDark};
    color: ${colours.primaryTextLight};
    box-shadow: 3px 3px 2px ${colours.primaryDark};

    &:hover {
        background-color: ${colours.primaryDark};
    }
`

const mediumLightStyles = css`
    ${baseStyles}
    background-color: ${colours.primaryMediumLight};
    color: ${colours.primaryTextLight};
    box-shadow: 3px 3px 2px ${colours.primaryDark};

    &:hover {
        background-color: ${colours.primaryLight};
    }
`

const lightStyles = css`
    ${baseStyles}
    background-color: ${colours.primaryLight};
    color: ${colours.primaryTextDark};
    box-shadow: 3px 3px 2px ${colours.primaryMediumLight};

    &:hover {
        background-color: ${colours.primaryLight};
    }
`

const Button = ({
    light,
    mediumLight,
    medium,
    dark,
    className,
    children,
    to,
}) => {
    let themeStyles
    if (light) themeStyles = lightStyles
    else if (mediumLight) themeStyles = mediumLightStyles
    else if (medium) themeStyles = mediumStyles
    else if (dark) themeStyles = darkStyles
    else themeStyles = lightStyles

    return (
        <Link css={themeStyles} className={className} to={to}>
            {children}
        </Link>
    )
}

export default Button
