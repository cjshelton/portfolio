import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight as faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import Seo from "../components/seo";
import Mugshot from "../components/mugshot";
import Button from "../components/btn";
import Footer from "../components/footer";
import CookieBanner from "../components/cookie-banner";

import globalStyles from "../styles/global";
import pageStyles from "../styles/index";
import { BackgroundGradientStyles } from "../styles/shared";

const Container = styled.div`
    height: 100vh;
    min-height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;

    ${BackgroundGradientStyles}
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
    description: `The landing page for Chris Shelton's Portfolio. I am a UK-based Principal Software Engineer and technical leader, specialising in data, analytics and AI engineering for commodities trading.`,
};

const IndexPage = () => (
    <Container>
        <Seo title={seo.title} description={seo.description} />
        <Global styles={globalStyles} />
        <Content>
            <div css={pageStyles.mugshotContainer}>
                <Mugshot />
            </div>
            <div css={pageStyles.name}>Chris Shelton</div>
            <div css={pageStyles.location}>UK - Leeds / London / Remote</div>
            <div css={pageStyles.title}>Principal Software Engineer</div>
            <p css={pageStyles.experience}>
                Technical leader specialising in{" "}
                <span className="bold">data</span>,{" "}
                <span className="bold">analytics</span> and{" "}
                <span className="bold">AI</span> engineering for commodities
                trading
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
