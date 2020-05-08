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
                First-class (Hons) in Computer Science. I also received an award
                for academic excellence two years in a row during my time at
                University.
            </p>
            <p className="section">
                Prior to going to university, I had very little experience of
                computing. In all honesty, it wasn&apos;t something I was even
                thinking about as a career; I wasn&apos;t sure what I wanted to
                do. But getting started in programming, I was instantly engaged,
                and have been since.
            </p>
            <p className="section">
                I thoroughly enjoyed my degree. I enjoyed the challenges it
                presented, and the opportunities it has given me for my future.
                I worked hard, and it paid off, and that has enabled me to do
                something as a job every day, which feels much more like a
                hobby.
            </p>
        </section>
        <section>
            <h1 className="section-header">Professional Experience</h1>
            <p className="section">
                Since graduating from university in 2016, I have worked as a
                Technical Specialist at Bluesmith Information Systems in Leeds,
                focusing on full-stack web development for enterprise
                applications.
            </p>
            <p className="section">
                I have 3 years' experience in the Microsoft tech-stack,
                designing and building ASP.NET and SQL Server applications, with
                the last year working with ASP.NET Core.
            </p>
            <p className="section">
                More recently, I have been up-skilling in JavaScript, working
                exclusively with Node.js and front-end technologies like
                Knockout and Vue.
            </p>
        </section>
        <section>
            <h1 className="section-header">Core Skills</h1>
            <p className="section">
                Since graduating from university in 2016, I have worked as a
                Technical Specialist at Bluesmith Information Systems in Leeds,
                focusing on full-stack web development for enterprise
                applications.
            </p>
            <p className="section">
                I have 3 years' experience in the Microsoft tech-stack,
                designing and building ASP.NET and SQL Server applications, with
                the last year working with ASP.NET Core.
            </p>
            <p className="section">
                More recently, I have been up-skilling in JavaScript, working
                exclusively with Node.js and front-end technologies like
                Knockout and Vue.
            </p>
        </section>
        <section>
            <h1 className="section-header">Other Skills</h1>
            <p className="section">
                Below are skills I am less experienced in, or have learnt
                through side projects, but contribute to my abilities as a
                well-rounded software engineer.
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
