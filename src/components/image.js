import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { colours } from "../styles/variables"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "mugshot-colour.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <h1>HELLO</h1>
        // <Img
        //     fluid={data.placeholderImage.childImageSharp.fluid}
        //     alt="Chris Shelton portfolio"
        //     style={{
        //         borderRadius: `50%`,
        //         boxShadow: `0px 6px 6px ${colours.primaryDark}`,
        //     }}
        // />
    )
}

export default Image
