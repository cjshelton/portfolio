import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import Img from "gatsby-image";

const Image = ({ image, altText }) => {
    const data = useStaticQuery(graphql`
        fragment ImageData on ImageSharp {
            gatsbyImageData(
                width: 150
                placeholder: BLURRED
                layout: CONSTRAINED
                quality: 75
            )
        }

        query {
            cSharp: file(relativePath: { eq: "tech-logos/c-sharp.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            dotNetCore: file(
                relativePath: { eq: "tech-logos/dot-net-core.png" }
            ) {
                childImageSharp {
                    ...ImageData
                }
            }
            frontEnd: file(relativePath: { eq: "tech-logos/front-end.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            git: file(relativePath: { eq: "tech-logos/git.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            nodeJs: file(relativePath: { eq: "tech-logos/nodejs.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            sqlServer: file(relativePath: { eq: "tech-logos/sql-server.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            vue: file(relativePath: { eq: "tech-logos/vue.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            docker: file(relativePath: { eq: "tech-logos/docker.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            javascript: file(
                relativePath: { eq: "tech-logos/javascript.png" }
            ) {
                childImageSharp {
                    ...ImageData
                }
            }
            typescript: file(
                relativePath: { eq: "tech-logos/typescript.png" }
            ) {
                childImageSharp {
                    ...ImageData
                }
            }
            mongodb: file(relativePath: { eq: "tech-logos/mongo-db.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            openApi: file(relativePath: { eq: "tech-logos/open-api.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
            jest: file(relativePath: { eq: "tech-logos/jest.png" }) {
                childImageSharp {
                    ...ImageData
                }
            }
        }
    `);

    const imageData = getImage(data[image]);

    return <GatsbyImage image={imageData} alt={altText} objectFit="contain" />;
};

export default Image;
