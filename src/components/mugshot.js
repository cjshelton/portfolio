import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { colours } from "../styles/variables";

const Image = () => {
    return (
        <StaticImage
            src="../images/mugshot-colour.jpg"
            alt="Chris Shelton mugshot"
            width={200}
            layout="constrained"
            placeholder="blurred"
            quality={100}
            style={{
                WebkitBorderRadius: `50%`,
                borderRadius: `50%`,
                boxShadow: `0px 6px 6px ${colours.primaryDark}`,
            }}
        />
    );
};

export default Image;
