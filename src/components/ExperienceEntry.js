import styled from "@emotion/styled";
import React from "react";

import { sizes, colours } from "../styles/variables";

// Employment logos
import ShellLogo from "../components/shell-logo";
import BluesmithLogo from "../components/bluesmith-logo";

const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 10px;

    background-color: ${colours.primaryLight};
    border-left: 5px solid ${colours.primary};
`;

const Logo = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`;

const Info = styled.div`
    flex: 1 0 0;
    padding-left: 10px;
`;

const Company = styled.h2`
    font-size: 20px;
    font-weight: 600;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 5vw;
    }
`;

const Title = styled.h3`
    font-size: 16px;
    margin-bottom: 10px;

    @media (max-width: ${sizes.xSmall}) {
        font-size: 4vw;
    }
`;

const logoMap = {
    shell: <ShellLogo />,
    bluesmith: <BluesmithLogo />,
};

const ExperienceEntry = ({ experience }) => {
    const { company, period, title, description, logo } = experience;

    return (
        <Container>
            <Logo>{logoMap[logo]}</Logo>
            <Info>
                <Company>
                    {company}, {period}
                </Company>
                <Title>{title}</Title>
                <p>{description}</p>
            </Info>
        </Container>
    );
};

export default ExperienceEntry;
