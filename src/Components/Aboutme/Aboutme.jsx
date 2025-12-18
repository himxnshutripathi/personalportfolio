import React from 'react'
import './Aboutme.css'
import { assExp } from '../../assets/assets'

const Aboutme = () => {
  return (
    <div className='aboutme' id='aboutme'>
        <div className="aboutme-pic">
            <img src={assExp.MainDpLong} />
        </div>
        <div className="aboutme-text">
            <h2>About Me</h2>
            <hr />
            <h4>Developer <span>& Web Designer</span></h4>
            <p>Hi, I'm Himanshu Tripathi a Full Stack Developer, Programmer and Web designer. I've completed my bachelor's degree in Computer Science and Engineering from Lovely Professional University.</p>
            <button><a href="mailto:tripathi.himanshu9329@gmail.com">Let's get Connected</a></button>
        </div>
    </div>
  )
}


export default Aboutme
