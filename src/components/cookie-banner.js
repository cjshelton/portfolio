import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { colours, sizes } from "../styles/variables"

import Button from "../components/btn"

const cookieBanner = css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 200px;
    padding: 20px;

    display: flex;
    flex-direction: column;

    border-top: 4px solid ${colours.primaryDark};
    background-color: white;
    color: ${colours.primaryTextDark};
`

const Header = styled.h1`
    flex: 0 1 0;
    font-size: 20px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 4vw;
    }
`

const TextContainer = styled.div`
    flex: 1 0 0;
    margin: 10px 0;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 3vw;
    }
`

const ButtonContainer = styled.div`
    flex: 0 1 0;

    button {
        float: right;
    }

    button:last-child {
        margin-right: 10px;
    }
`

const CookieBanner = () => (
    <div css={cookieBanner}>
        <Header>Cookie Preferences</Header>
        <TextContainer>
            <p>
                This site uses third-party cookies provided by Google Analytics
                to understand how you use the site and how it can be improved to
                provide a better experience.
            </p>
            <p>
                Please indicate below whether you accept the use of Google
                Analytics cookies whilst you visit this site.
            </p>
        </TextContainer>

        <ButtonContainer>
            <Button dark>I accept</Button>
            <Button white>I do not accept</Button>
        </ButtonContainer>
    </div>
)

export default CookieBanner
