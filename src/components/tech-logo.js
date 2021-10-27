import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = ({ image, altText }) => {
    const data = useStaticQuery(graphql`
        query {
            cSharp: file(relativePath: { eq: "tech-logos/c-sharp.png" }) {
                childImageSharp {
                    fluid(maxHeight: 100, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            dotNetCore: file(
                relativePath: { eq: "tech-logos/dot-net-core.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            frontEnd: file(relativePath: { eq: "tech-logos/front-end.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            git: file(relativePath: { eq: "tech-logos/git.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            nodeJs: file(relativePath: { eq: "tech-logos/nodejs.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sqlServer: file(relativePath: { eq: "tech-logos/sql-server.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vue: file(relativePath: { eq: "tech-logos/vue.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            react: file(relativePath: { eq: "tech-logos/react.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            docker: file(relativePath: { eq: "tech-logos/docker.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            javascript: file(
                relativePath: { eq: "tech-logos/javascript.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            typescript: file(
                relativePath: { eq: "tech-logos/typescript.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mongodb: file(relativePath: { eq: "tech-logos/mongo-db.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            openApi: file(relativePath: { eq: "tech-logos/open-api.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jest: file(relativePath: { eq: "tech-logos/jest.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Img
            fluid={data[image].childImageSharp.fluid}
            alt={altText}
            style={{ maxHeight: "100%" }}
            imgStyle={{ objectFit: "contain" }}
        />
    );
};

export default Image;
