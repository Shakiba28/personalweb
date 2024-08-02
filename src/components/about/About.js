import React from "react";
import './About.css'
import Me from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image" >
                        <img src={Me} />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Client</h5>
                            <small>4+ Worldeide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>8+ Completed</small>
                        </article>
                    </div>
                    <p>
                        I am Shakiba,  Working with HTML, CSS, JavaScript, bootstrap and tailwind, familiar with Typescript and next js, I also have experience working with React framework. I also have the ability to design an attractive and efficient user interface (UI) and I am familiar with web optimization standards.
                        {/* I am Shakiba, I work in the field of designing web pages and I am interested in it.I make beautiful web pages with html, css, bootstrap and js and in this roadmap I have reached react.
                        This site you see is the result of my work with react. */}

                    </p>
                    <a href="#contact" className="btn btn-primery">
                        Let's Talk
                    </a>

                </div>
            </div>
        </section >
    )
}


export default About