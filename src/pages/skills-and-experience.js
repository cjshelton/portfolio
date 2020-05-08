import React from "react"
import Page from "../components/layouts/page"

const seo = {
    title: "Skills and Experience",
    description: `Skills and experience for Chris Shelton. Leeds-based software engineer,
        specialising in full-stack web application development using
        ASP.NET Core and Node.js`,
}

const headerJsx = (
    <div>
        <h1>Skills &amp; Experience</h1>
        <h2>
            Learn more about my skills &amp; experience as a software engineer
        </h2>
    </div>
)

const contentJsx = (
    <div>
        <section>
            <h1 className="section-header">Education</h1>
            <p className="section">
                I proudly graduated from The University of Leeds in 2016, with a
                First-class (Hons) in Computer Science.
            </p>
            <p className="section">
                Prior to going to university, I had very little experience of
                computing. In all honesty, it wasn&apos;t something I was even
                thinking about as a career; I wasn&apos;t sure what I wanted to
                do. But getting started in programming, I was instantly engaged,
                and have been since.
            </p>
            <p className="section">
                I thoroughly enjoyed my degree. I enjoyed the challenges it gave
                me, and the opportunities it has given me for my future. I
                worked hard, and it paid off, and that has enabled me to do
                something as a job every day, which feels much more like a
                hobby.
            </p>
        </section>
        <section>
            <h1 className="section-header">Core Skills</h1>
            <p className="section">
                Below is a list of skills I am experienced in, gained either in
                my professional career or through personal and side projects at
                home.
            </p>
        </section>
        <section>
            <h1 className="section-header">Other Skills</h1>
            <p className="section">
                Below are skills I am less experienced in, but contribute to my
                experiences and abilities as a well-rounded software engineer.
            </p>
        </section>
    </div>
)

const SkillsPage = () => {
    return (
        <Page
            header={headerJsx}
            content={contentJsx}
            page="Skills and Experience"
            seo={seo}
            backgroundImageUrl="/images/code.jpg"
            initialBackgroundColour="#1e2022"
        ></Page>
    )
}

export default SkillsPage
