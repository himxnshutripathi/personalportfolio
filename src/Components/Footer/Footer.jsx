import React from 'react'
import './Footer.css'
import { assExp } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assExp.logo}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates odio soluta earum, numquam sequi!</p>
                <div className="footer-social-icon">
                    <a href="https://www.linkedin.com/in/himxnshutripathi/" target='_blank'><img src={assExp.linkedin_ico}/></a>
                    <a href="mailto:tripathi.himanshu9329@gmail.com" target='_blank'><img src={assExp.gmail_ico} /></a>
                    <a href="https://github.com/himxnshutripathi" target='_blank'><img src={assExp.github_ico} /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Himanshu Tripathi</h2>
                <ul>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li><a href="tel:+91 7009728086">+91-70*******6</a></li>
                    <li><a href="mailto:tripathi.himanshu9329@gmail.com">tripathi.himanshu9329@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © itshimanshu.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer