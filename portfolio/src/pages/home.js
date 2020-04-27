import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const seo = {
    title: "Home",
    description: `Portfolio for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const HomePage = () => (
    <Layout>
        <SEO title={seo.title} description={seo.description} />
        <Sidebar page="Home"></Sidebar>
    </Layout>
)

export default HomePage
