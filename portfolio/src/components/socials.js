import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const socialImage = css`
    height: 30px;
    width: 30px;
    display: inline-block;
    vertical-align: middle;
`

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

const Socials = () => {
    const data = useStaticQuery(graphql`
        query {
            gitHubImage: file(relativePath: { eq: "socials/github.png" }) {
                childImageSharp {
                    fluid(maxWidth: 50, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            linkedInImage: file(relativePath: { eq: "socials/linked-in.png" }) {
                childImageSharp {
                    fluid(maxWidth: 50, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            site {
                siteMetadata {
                    socials {
                        github
                        linkedIn
                    }
                }
            }
        }
    `)

    return (
        <div>
            <a href={data.site.siteMetadata.socials.github}>
                <Img
                    fluid={data.gitHubImage.childImageSharp.fluid}
                    alt="GitHub logo"
                    css={socialImage}
                />
            </a>

            <a href={data.site.siteMetadata.socials.linkedIn}>
                <Img
                    fluid={data.linkedInImage.childImageSharp.fluid}
                    alt="LinkedIn logo"
                    css={socialImage}
                    style={{ marginLeft: "10px" }}
                />
            </a>
        </div>
    )
}

export default Socials
