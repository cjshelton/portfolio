import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Image = () => {
    return (
        <StaticImage
            src="../images/bluesmith-logo.png"
            alt="Bluesmith logo"
            layout="constrained"
            placeholder="tracedSVG"
            quality={80}
        />
    );
};

export default Image;
