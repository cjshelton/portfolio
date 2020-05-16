import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { colours } from "../styles/variables"
import { css } from "@emotion/core"

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const iconSize = "30px"

const socialIcon = css`
    width: ${iconSize};
    font-size: ${iconSize};
    line-height: ${iconSize};
    display: inline-block;
    vertical-align: middle;
    color: ${colours.primaryTextLight};
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
            <a
                href={data.site.siteMetadata.socials.github}
                aria-label="Github profile"
            >
                <Img
                    fluid={data.gitHubImage.childImageSharp.fluid}
                    alt="GitHub logo"
                    css={socialIcon}
                />
            </a>

            <a
                href={data.site.siteMetadata.socials.linkedIn}
                aria-label="LinkedIn profile"
            >
                <Img
                    fluid={data.linkedInImage.childImageSharp.fluid}
                    alt="LinkedIn logo"
                    css={socialIcon}
                    style={{ marginLeft: "10px" }}
                />
            </a>
            <a href="mailto:cjshelton@outlook.com" aria-label="Email me">
                <div css={socialIcon} style={{ marginLeft: "10px" }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </a>
        </div>
    )
}

export default Socials
