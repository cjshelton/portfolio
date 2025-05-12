import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Image = () => {
    return (
        <StaticImage
            src="../images/uol-logo.png"
            alt="University of Leeds logo"
            width={200}
            layout="fixed"
            placeholder="tracedSVG"
            quality={80}
        />
    );
};

export default Image;
