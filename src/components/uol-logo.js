import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "uol-logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="University of Leeds logo"
        />
    )
}

export default Image
