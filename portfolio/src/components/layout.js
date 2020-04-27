import React from "react"
import { Global } from "@emotion/core"

import globalStyles from "../styles/global"

export default ({ children }) => (
    <div
        style={{
            height: `100vh`,
            width: `100%`,
            backgroundColor: "red",
        }}
    >
        <Global styles={globalStyles} />
        {children}
    </div>
)
