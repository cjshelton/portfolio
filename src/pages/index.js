import React from "react";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight as faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import Image from "../components/image";
import Button from "../components/btn";
import Footer from "../components/footer";
import CookieBanner from "../components/cookie-banner";

import globalStyles from "../styles/global";
import pageStyles from "../styles/index";

import { colours } from "../styles/variables";

const Container = styled.div`
    height: 100vh;
    min-height: 600px;
    width: 100%;
    background-color: ${colours.primary};
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
`;

const Content = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    .view-portfolio-button {
        margin-top: 20px;
    }
`;

const FooterContainer = styled.div`
    flex-shrink: 1;
`;

const seo = {
    title: "Portfolio",
    description: `The landing page for Chris Shelton's Portfolio. I am a UK-based software engineer, specialising in full-stack web application development in the JavaScript technology stack.`,
};

const IndexPage = () => (
    <Container>
        <SEO title={seo.title} description={seo.description} />
        <Global styles={globalStyles} />
        <Content>
            <div css={pageStyles.mugshotContainer}>
                <Image />
            </div>
            <div css={pageStyles.name}>Chris Shelton</div>
            <div css={pageStyles.location}>Leeds, UK</div>
            <div css={pageStyles.title}>Software Engineer</div>
            <p css={pageStyles.experience}>
                Specialising in <span className="bold">full-stack</span> web
                application development in the{" "}
                <span className="bold">JavaScript</span> technology stack
            </p>
            <Button mediumLight className="view-portfolio-button" to="/home">
                <FontAwesomeIcon icon={faChevronCircleRight} /> View Portfolio
            </Button>
        </Content>
        <FooterContainer>
            <Footer></Footer>
        </FooterContainer>
        <CookieBanner />
    </Container>
);

export default IndexPage;
