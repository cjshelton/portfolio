import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { colours } from "../styles/variables";

const baseStyles = css`
    padding: 7px 10px;
    border-radius: 5px;
    border: none;
    font-size: 15px;
    text-decoration: none;

    // Set a default border style. Transparent allows the colour to be changed for different
    // button themes without changing the box height.
    border: 1px solid transparent;

    &:hover {
        cursor: pointer;
    }
`;

const darkStyles = css`
    ${baseStyles}
    background-color: ${colours.primaryMediumDark};
    color: ${colours.primaryTextLight};
    box-shadow: 3px 3px 2px ${colours.primaryDark};

    &:hover {
        background-color: ${colours.primaryDark};
    }
`;

const mediumStyles = css`
    ${baseStyles}
    background-color: ${colours.primaryMediumDark};
    color: ${colours.primaryTextLight};
    box-shadow: 3px 3px 2px ${colours.primaryDark};

    &:hover {
        background-color: ${colours.primaryDark};
    }
`;

const mediumLightStyles = css`
    ${baseStyles}
    background-color: ${colours.primaryMediumLight};
    color: ${colours.primaryTextLight};
    box-shadow: 3px 3px 2px ${colours.primaryDark};

    &:hover {
        background-color: ${colours.primaryDark};
        border-color: ${colours.white};
    }
`;

const lightStyles = css`
    ${baseStyles}
    background-color: ${colours.primaryLight};
    color: ${colours.primaryTextDark};
    box-shadow: 3px 3px 2px ${colours.primaryMediumLight};

    &:hover {
        background-color: ${colours.primaryLight};
    }
`;

const whiteStyles = css`
    ${baseStyles}
    background-color: ${colours.white};
    color: ${colours.primaryTextDark};
    border: 1px solid ${colours.primaryDark};
    box-shadow: 3px 3px 2px ${colours.primaryMediumLight};

    &:hover {
        background-color: ${colours.primaryLight};
    }
`;

const Button = ({
    white,
    light,
    mediumLight,
    medium,
    dark,
    className,
    children,
    to,
    onClick,
}) => {
    let themeStyles;
    if (white) themeStyles = whiteStyles;
    else if (light) themeStyles = lightStyles;
    else if (mediumLight) themeStyles = mediumLightStyles;
    else if (medium) themeStyles = mediumStyles;
    else if (dark) themeStyles = darkStyles;
    else themeStyles = lightStyles;

    if (to) {
        return (
            <Link css={themeStyles} className={className} to={to}>
                {children}
            </Link>
        );
    } else {
        return (
            <button css={themeStyles} className={className} onClick={onClick}>
                {children}
            </button>
        );
    }
};

export default Button;
