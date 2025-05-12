import React from "react";
import { HelmetProvider } from "react-helmet-async";

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "@fontsource/poppins";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => ({
    element,
});
