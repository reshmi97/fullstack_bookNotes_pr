import React from "react";
import Header from "./Header";
import style from "./About.module.css";

function About() {
    return (
        <div>
            <Header />
            <div className={style.content}>
                <h1 style={{paddingBottom:"2rem"}}>About Book Notes</h1>
                <h5 className="text-center mx-5">
                    BookNotes is a simple web application that helps users store and manage notes related to the books they read. Along with personal notes, users can also save important details about each book—such as the title, author, and a short description—making it easier to track and revisit their reading journey.</h5>
            </div>
        </div>
    )
}

export default About;