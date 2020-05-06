import React from "react"
import Socials from "../components/socials"

import styled from "@emotion/styled"
import { sizes } from "../styles/variables"

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    .socials {
        flex-grow: 1;
        text-align: left;
    }

    .copyright {
        flex-grow: 1;
        text-align: right;
    }

    @media (max-width: ${sizes.small}) {
        flex-direction: column;
        justify-content: center;

        .copyright {
            margin-top: 8px;
        }
    }
`

const Footer = () => (
    <footer>
        <Content>
            <div className="socials">
                <Socials></Socials>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()}, Chris Shelton
            </div>
        </Content>
    </footer>
)

export default Footer
