import { css } from "@emotion/react";

function getResponsiveFontSize(size, maxSize) {
    return `
        font-size: ${size}vw;
        @media (min-width: 350px) {
            font-size: ${maxSize}px;
        }
    `;
}

const mugshotContainer = css`
    width: 150px;
    margin: 0 auto;
`;

const name = css`
    margin-top: 20px;
    ${getResponsiveFontSize(8, 30)}
`;

const location = css`
    ${getResponsiveFontSize(4, 15)}
`;

const title = css`
    margin-top: 20px;
    ${getResponsiveFontSize(8, 22)}
`;

export default {
    mugshotContainer,
    name,
    location,
    title,
};
