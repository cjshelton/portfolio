import React from "react"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"

import globalStyles from "../styles/global"
import { sizes } from "../styles/variables"

const SiteContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const navbarContainer = css`
    flex-shrink: 1;
`

const sidebarContainer = css`
    height: 100%;
    width: 30%;
    max-width: 400px;
    position: fixed;

    @media (max-width: ${sizes.medium}) {
        display: none;
    }
`

const content = css`
    flex-grow: 1;
    margin-left: min(400px, 30%);

    @media (max-width: ${sizes.medium}) {
        margin-left: 0;
    }
`

export default ({ page, children }) => (
    <SiteContainer>
        <Global styles={globalStyles} />
        <div css={navbarContainer}>
            <Navbar page={page}></Navbar>
        </div>
        <div css={sidebarContainer}>
            <Sidebar page={page}></Sidebar>
        </div>
        <div css={content}>{children}</div>
    </SiteContainer>
)
