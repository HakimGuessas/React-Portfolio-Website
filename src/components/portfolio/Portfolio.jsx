import React from 'react'
import "./Portfolio.css"
import img1 from "../../assets/portfolio1.jpg"
import img2 from "../../assets/portfolio2.jpg"
import img3 from "../../assets/portfolio3.jpg"
import img4 from "../../assets/portfolio4.jpg"
import img5 from "../../assets/portfolio5.png"
import img6 from "../../assets/portfolio6.jpg"


const Portfolio = () => {


  const projects = [
    {
      id: 1,
      image: img1,
      title: "React Portfolio Website",
      github: "https://github.com/HakimGuessas/React-Portfolio-Website",
      demo: "https://hakimguessas.github.io/React-Portfolio-Website/"
    },
    {
      id: 2,
      image:  img2,
      title: "React Shopping Cart",
      github: "https://github.com/HakimGuessas/React-Shopping-Cart",
      demo: "https://hakimguessas.github.io/React-Shopping-Cart/"
    },
    {
      id: 3,
      image: img3,
      title: "JS Shopping Cart",
      github: "https://github.com/HakimGuessas/ShppingCartApplication",
      demo: "https://hakimguessas.github.io/ShppingCartApplication/"
    },
    {
      id: 4,
      image: img4,
      title: "Arabic Template Usign Bootstrap",
      github: "https://github.com/HakimGuessas/ArabicTemplatewithBootstrap",
      demo :"https://hakimguessas.github.io/ArabicTemplatewithBootstrap/"
    },
    {
      id: 5,
      image: img5,
      title: "Video Games Website",
      github: "https://github.com/HakimGuessas/Template_Three",
      demo: "https://hakimguessas.github.io/Template_Three/"
    },
    {
      id: 6,
      image: img6,
      title: "Kasper",
      github: "https://github.com/HakimGuessas/Html_Css-Template2",
      demo: "https://hakimguessas.github.io/Html_Css-Template2/"
    }
  ]
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {projects.map((project) => (
          <article className='portfolio__item' key={project.id}>
            <div className="portfolio__image">
              <img src={project.image} alt={project.title} />
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