import React from "react";
import './Portfolio.css'
import IMG1 from '../../assets/Architect.png'
import IMG2 from '../../assets/Fashion Blog.png'
import IMG3 from '../../assets/Analytics.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Architect Template',
        github: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Fashion Blog',
        github: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Analytics',
        github: 'https://github.com',
        demo: 'https://dribble.com'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn">Github</a>
                                    <a href={demo} className="btn btn-primery" target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}


export default Portfolio


/*
<article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG} />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primery" target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG} />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primery" target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG} />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primery" target='_blank'>Live Demo</a>
                    </div>
                </article>
*/ 