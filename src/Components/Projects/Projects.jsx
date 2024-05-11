import React from 'react'
import './Projects.css'
import { assExp } from '../../assets/assets'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="below-title">
      <div className="projects-item">
        <div className="projects-item-img">
          <img src={assExp.projectSS_01}/>
        </div>
        <div className="projects-item-cont">
          <h6>REACT JS - VITE</h6>
          <h2>Motato</h2>
          <p>A Food Delivery App made by using Full Stack development including ReactJS, Vite and the required back end technologies.</p>
          <div className="button-contain">
            <button className='button'><a href="https://github.com/himxnshutripathi/Motato---Eat-without-worries" target='_blank'>Github Link</a></button>
            <button className='button'><a href="https://motato.netlify.app/" target='_blank'>Live Website</a></button>
          </div>
        </div>
      </div>

      <div className="projects-item">
        <div className="projects-item-img">
          <img src={assExp.projectSS_02}/>
        </div>
        <div className="projects-item-cont">
          <h6>HTML5 - CSS3 - JS</h6>
          <h2>Amish Verse</h2>
          <p>This is a Book Surfer Website developed using HTML5, CSS3 and Javascript specially dedicated to a author Amish Tripathi.</p>
          <div className="button-contain">
            <button className='button'><a href="https://github.com/himxnshutripathi/amishverse" target='_blank'>Github Link</a></button>
            <button className='button'><a href="https://amishverse.netlify.app/" target='_blank'>Live Website</a></button>
          </div>
        </div>
      </div>

      <div className="projects-item">
        <div className="projects-item-img">
          <img src={assExp.projectSS_03}/>
        </div>
        <div className="projects-item-cont">
          <h6>PYTHON - TURTLE</h6>
          <h2>Space Invaders</h2>
          <p>A console game developed by using Turtle Library of the Python which turns out as combat game b/w spaceship and aliens.</p>
          <div className="button-contain">
            <button className='button'><a href="https://github.com/himxnshutripathi/SpaceInvadersPyturtle" target='_blank'>Github Link</a></button>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Projects