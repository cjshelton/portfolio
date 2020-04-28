import React from "react"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Sidebar from "../components/sidebar"

import globalStyles from "../styles/global"

const SiteContainer = styled.div`
    height: 100%;
    width: 100%;
`

const sidebar = css`
    height: 100%;
    width: 30%;
    max-width: 400px;
    display: inline-block;
    vertical-align: top;
`

const content = css`
    height: 100%;
    width: 70%;
    width: 600px;
    display: inline-block;
    vertical-align: top;
`

export default ({ page, children }) => (
    <SiteContainer>
        <Global styles={globalStyles} />
        <div css={sidebar}>
            <Sidebar page={page}></Sidebar>
        </div>
        <div css={content}>{children}</div>
    </SiteContainer>
)
