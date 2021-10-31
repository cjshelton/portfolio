import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { colours } from "../styles/variables";

const imageStyles = {
    borderRadius: "50%",
    boxShadow: `0px 6px 6px ${colours.primaryDark}`,
};

const Image = () => {
    return (
        <StaticImage
            src="../images/mugshot-colour.jpg"
            alt="Chris Shelton mugshot"
            width={200}
            layout="constrained"
            placeholder="none"
            quality={100}
            // Image styles need to be provided to both props to account for inconsistent
            // behaviour on different browsers.
            style={imageStyles}
            imgStyle={imageStyles}
        />
    );
};

export default Image;
