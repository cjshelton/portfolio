import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ image, altText }) => {
    const data = useStaticQuery(graphql`
        query {
            cSharp: file(relativePath: { eq: "tech-logos/c-sharp.png" }) {
                childImageSharp {
                    fluid(maxHeight: 100, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            dotNetCore: file(
                relativePath: { eq: "tech-logos/dot-net-core.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            frontEnd: file(relativePath: { eq: "tech-logos/front-end.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            git: file(relativePath: { eq: "tech-logos/git.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            nodeJs: file(relativePath: { eq: "tech-logos/nodejs.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sqlServer: file(relativePath: { eq: "tech-logos/sql-server.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vue: file(relativePath: { eq: "tech-logos/vue.png" }) {
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
            fluid={data[image].childImageSharp.fluid}
            alt={altText}
            style={{ maxHeight: "100%" }}
            imgStyle={{ objectFit: "contain" }}
        />
    )
}

export default Image
