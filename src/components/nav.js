import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import { colours, sizes } from "../styles/variables";
import navData from "../data/nav.json";

navData.sort((a, b) => {
    if (a.order < b.order) {
        return -1;
    }

    return 1;
});

const List = styled.ul`
    list-style: none;

    li {
        a,
        &:visited {
            text-decoration: none;
            color: ${colours.primaryTextLight};
        }

        a:hover {
            color: ${colours.primaryTextLight};
        }

        @media (max-width: ${sizes.medium}) and (min-width: ${sizes.small}) {
            &.current {
                text-decoration: underline;
            }
        }
    }
`;

const Nav = ({ page }) => (
    <nav>
        <List>
            {navData.map((data, index) => {
                const linkComponent = data.isExternal ? (
                    <a href={data.link}>{data.name}</a>
                ) : (
                    <Link to={data.link}>{data.name}</Link>
                );

                return (
                    <li
                        key={`nav_item_${index}`}
                        className={page === data.name ? "current" : ""}
                    >
                        {linkComponent}
                    </li>
                );
            })}
        </List>
    </nav>
);

export default Nav;
