import { css } from "@emotion/react"

function getResponsiveFontSize(size, maxSize) {
    return `
        font-size: ${size}vw;
        @media (min-width: 350px) {
            font-size: ${maxSize}px;
        }
    `
}

const mugshotContainer = css`
    width: 200px;
    max-width: 60%;
`

const name = css`
    margin-top: 20px;
    ${getResponsiveFontSize(10, 40)}
`

const location = css`
    ${getResponsiveFontSize(6, 18)}
`

const title = css`
    margin-top: 20px;
    ${getResponsiveFontSize(8, 25)}
`

const experience = css`
    margin-top: 5px;
    ${getResponsiveFontSize(5, 18)}
`

const bold = css`
    font-weight: 600;
`

export default {
    mugshotContainer,
    name,
    location,
    title,
    experience,
    bold,
}
