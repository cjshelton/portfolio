import React from "react"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import Sidebar from "../components/sidebar"

import globalStyles from "../styles/global"

const SiteContainer = styled.div`
    height: 100vh;
    width: 100%;
`

export default ({ page, children }) => (
    <SiteContainer>
        <Global styles={globalStyles} />
        <Sidebar page={page}></Sidebar>

        {children}
    </SiteContainer>
)
