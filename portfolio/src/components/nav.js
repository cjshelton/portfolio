import React from "react"

import navData from "../data/nav.json"

navData.sort((a, b) => {
    if (a.order < b.order) {
        return -1
    }

    return 1
})

const Nav = ({ page }) => (
    <nav>
        <ul>
            {navData.map((data, index) => {
                return (
                    <li
                        key={`nav_item_${index}`}
                        className={page === data.name ? "current" : ""}
                    >
                        <a href={data.link}>{data.name}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
)

export default Nav
