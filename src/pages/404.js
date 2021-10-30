import React from "react";
import { Global } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Seo from "../components/seo";
import Footer from "../components/footer";
import Button from "../components/btn";

import globalStyles from "../styles/global";
import { colours, sizes } from "../styles/variables";

const seo = {
    title: "Page Not Found",
    description: `The requested page could not be found.`,
};

const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: ${colours.primary};
`;

const Content = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    .sad-face {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 140px;
        color: ${colours.primaryMediumLight};

        @media (max-width: ${sizes.xSmall}) {
            font-size: 30vw;
        }
    }

    .title {
        font-size: 35px;
        margin-top: 20px;

        @media (max-width: ${sizes.xSmall}) {
            font-size: 7vw;
        }
    }

    .message {
        margin-top: 5px;
        font-size: 18px;
        margin-bottom: 40px;

        @media (max-width: ${sizes.xSmall}) {
            font-size: 4vw;
        }
    }

    .home-button {
        min-width: 80px;
    }
`;

const FooterContainer = styled.div`
    flex-shrink: 1;
`;

const NotFoundPage = () => (
    <div css={container}>
        <Seo title={seo.title} description={seo.description} />
        <Global styles={globalStyles} />
        <Content>
            <div className="sad-face">:(</div>
            <h1 className="title">Page Not Found</h1>
            <p className="message">
                Oops! The page you requested does not exist.
            </p>
            <Button className="home-button" mediumLight to="/home">
                Home
            </Button>
        </Content>

        <FooterContainer>
            <Footer></Footer>
        </FooterContainer>
    </div>
);

export default NotFoundPage;
