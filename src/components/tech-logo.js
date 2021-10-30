import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import Img from "gatsby-image";

const Image = ({ image, altText }) => {
    const data = useStaticQuery(graphql`
        fragment ImageProperties on ImageSharp {
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
                    ...ImageProperties
                }
            }
            dotNetCore: file(
                relativePath: { eq: "tech-logos/dot-net-core.png" }
            ) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            frontEnd: file(relativePath: { eq: "tech-logos/front-end.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            git: file(relativePath: { eq: "tech-logos/git.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            nodeJs: file(relativePath: { eq: "tech-logos/nodejs.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            sqlServer: file(relativePath: { eq: "tech-logos/sql-server.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            vue: file(relativePath: { eq: "tech-logos/vue.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            docker: file(relativePath: { eq: "tech-logos/docker.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            javascript: file(
                relativePath: { eq: "tech-logos/javascript.png" }
            ) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            typescript: file(
                relativePath: { eq: "tech-logos/typescript.png" }
            ) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            mongodb: file(relativePath: { eq: "tech-logos/mongo-db.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            openApi: file(relativePath: { eq: "tech-logos/open-api.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
            jest: file(relativePath: { eq: "tech-logos/jest.png" }) {
                childImageSharp {
                    ...ImageProperties
                }
            }
        }
    `);

    const imageData = getImage(data[image]);

    return <GatsbyImage image={imageData} alt={altText} objectFit="contain" />;
};

export default Image;
