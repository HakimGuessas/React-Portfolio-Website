import React from 'react'
import "./Portfolio.css"
import Projects from "./myWork.json"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {Projects.map((project) => (
          <article className='portfolio__item' key={project.id}>
          <div className="portfolio__image">
              <img src={project.image} alt="React Portfolio Website" />
          </div>
            <h3>{project.title}</h3>
          <div className="portfolio__item-cta">
              <a href={ project.github} target="_blank" className='btn'>Github</a>
            <a href={project.demo} target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
       ))}
      </div>
    </section>
  )
}

export default Portfolio