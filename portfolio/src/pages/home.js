import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const seo = {
    title: "Home",
    description: `Portfolio for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const HomePage = () => (
    <Layout page="Home">
        <SEO title={seo.title} description={seo.description} />
        <h1 style={{ color: "black" }}>Home</h1>
    </Layout>
)

export default HomePage
