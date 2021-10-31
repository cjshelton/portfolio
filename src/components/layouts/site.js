import React from "react";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import Footer from "../footer";

import globalStyles from "../../styles/global";
import { sizes, colours } from "../../styles/variables";

import CookieBanner from "../cookie-banner";

const SiteContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const navbarContainer = css`
    flex-shrink: 1;
`;

const sidebarContainer = css`
    height: 100%;
    width: 30%;
    position: fixed;

    @media (min-width: ${sizes.large}) {
        width: 400px;
    }

    @media (max-width: ${sizes.medium}) {
        display: none;
    }
`;

const content = css`
    flex-grow: 1;
    margin-left: 30%;

    @media (min-width: ${sizes.large}) {
        margin-left: 400px;
    }

    @media (max-width: ${sizes.medium}) {
        margin-left: 0;
    }
`;

const footer = css`
    display: none;
    flex-shrink: 1;
    padding: 20px;

    background-color: ${colours.primary};
    color: ${colours.primaryTextLight};

    @media (max-width: ${sizes.medium}) {
        display: block;
    }
`;

const Site = ({ page, children }) => (
    <SiteContainer>
        <Global styles={globalStyles} />
        <div css={navbarContainer}>
            <Navbar page={page}></Navbar>
        </div>
        <div css={sidebarContainer}>
            <Sidebar page={page}></Sidebar>
        </div>
        <main css={content}>{children}</main>
        <div css={footer}>
            <Footer></Footer>
        </div>
        <CookieBanner />
    </SiteContainer>
);

export default Site;
