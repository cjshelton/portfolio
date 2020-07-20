import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { colours, sizes } from "../styles/variables"

import Button from "../components/btn"

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCookieBite } from "@fortawesome/free-solid-svg-icons"

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

    .acceptance-message {
        margin-top: 10px;
        font-weight: 600;
    }

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

const acceptCookieName = "accept-ga-tracking"
const rejectCookieName = "reject-ga-tracking"

function generateLongLivingCookieString(cookieName) {
    return `${cookieName}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`
}

const GOOGLE_ANALYTICS_TRACKING_ID = "UA-112232176-2"
const GOOGLE_ANALYTICS_DISABLE_KEY = `ga-disable-${GOOGLE_ANALYTICS_TRACKING_ID}`

function startGoogleAnalyticsTracking() {
    // Ensure this is false so GA tracking is enabled.
    window[GOOGLE_ANALYTICS_DISABLE_KEY] = false

    window.dataLayer = window.dataLayer || []
    function gtag() {
        window.dataLayer.push(arguments)
    }

    // Only start tracking if the user has explicitly accepted the cookie usage.
    gtag("js", new Date())
    gtag("config", GOOGLE_ANALYTICS_TRACKING_ID)
}

const CookieBanner = () => {
    const [isDisplayed, setIsDisplayed] = useState(false)

    useEffect(() => {
        // Check if the user has previously accepted or rejected the GA tracking cookies.
        if (document.cookie.indexOf(acceptCookieName + "=true") > -1) {
            // Explicitly enable GA tracking.
            window[GOOGLE_ANALYTICS_DISABLE_KEY] = false
            startGoogleAnalyticsTracking()

            setIsDisplayed(false)
        } else if (document.cookie.indexOf(rejectCookieName + "=true") > -1) {
            // Explicitly disable GA tracking (this is unnecessary since GA tracking is never initiated),
            // but worth being explicit.
            window[GOOGLE_ANALYTICS_DISABLE_KEY] = true

            setIsDisplayed(false)
        } else {
            // Otherwise, the user has never made a choice, so show the banner, but don't start tracking.
            window[GOOGLE_ANALYTICS_DISABLE_KEY] = true
            setIsDisplayed(true)
        }
    }, [])

    function rejectCookies() {
        const optOutCookie = generateLongLivingCookieString(rejectCookieName)
        document.cookie = optOutCookie

        window[GOOGLE_ANALYTICS_DISABLE_KEY] = true

        setIsDisplayed(false)
    }

    function acceptCookies() {
        const optInCookie = generateLongLivingCookieString(acceptCookieName)
        document.cookie = optInCookie

        startGoogleAnalyticsTracking()

        setIsDisplayed(false)
    }

    if (isDisplayed) {
        return (
            <div css={cookieBanner}>
                <Header>
                    <FontAwesomeIcon icon={faCookieBite} /> Cookie Preferences
                </Header>
                <TextContainer>
                    <p>
                        This site uses cookies to understand how you use the
                        site and how it can be improved to provide a better
                        experience.
                    </p>
                    <p>
                        Some cookies are required, and by continuing to browse
                        this site, you are accepting the use of these required
                        cookies. Some cookies provided by Google Analytics are
                        optional, and you are free to opt-out of them being
                        used.
                    </p>
                    <p className="acceptance-message">
                        Please indicate below whether you accept the use of
                        optional Google Analytics cookies whilst you visit this
                        site.
                    </p>
                </TextContainer>

                <ButtonContainer>
                    <Button dark onClick={acceptCookies}>
                        I accept
                    </Button>
                    <Button white onClick={rejectCookies}>
                        I do not accept
                    </Button>
                </ButtonContainer>
            </div>
        )
    } else {
        return null
    }
}

export default CookieBanner
