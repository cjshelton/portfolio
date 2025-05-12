import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { colours } from "../styles/variables";
import { css } from "@emotion/react";

// Ensure icon CSS is loaded immediately to prevent large icon sizes on page load.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const iconSize = "30px";

const profileLinkIconStyles = css`
    width: ${iconSize};
    font-size: ${iconSize};
    line-height: ${iconSize};
    display: inline-block;
    vertical-align: middle;
    color: ${colours.primaryTextLight};
`;

const ProfileLinks = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    profileLinks {
                        github
                        linkedIn
                    }
                }
            }
        }
    `);

    return (
        <div>
            <a
                href={data.site.siteMetadata.profileLinks.github}
                aria-label="Github profile"
            >
                <StaticImage
                    src="../images/github.png"
                    alt="GitHub logo"
                    width={30}
                    layout="fixed"
                    placeholder="tracedSVG"
                    quality={80}
                    css={profileLinkIconStyles}
                />
            </a>

            <a
                href={data.site.siteMetadata.profileLinks.linkedIn}
                aria-label="LinkedIn profile"
            >
                <StaticImage
                    src="../images/linked-in.png"
                    alt="LinkedIn logo"
                    width={30}
                    layout="fixed"
                    placeholder="tracedSVG"
                    quality={80}
                    css={profileLinkIconStyles}
                    style={{ marginLeft: "10px" }}
                />
            </a>
            <a href="mailto:cjshelton@outlook.com" aria-label="Email me">
                <div css={profileLinkIconStyles} style={{ marginLeft: "10px" }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </a>
        </div>
    );
};

export default ProfileLinks;
