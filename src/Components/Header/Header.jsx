import React from 'react'
import './Header.css'
import {Typewriter,Cursor} from 'react-simple-typewriter'
import { assExp } from '../../assets/assets'

const Header = () => {

  return (
    <div className='header'>
        <div className="header-contents">
            <p>Hey!&nbsp; There It's</p>
            <h2>Himanshu Tripathi</h2>
            <p> I'm a &nbsp;
              <span>
                <Typewriter 
                  words={['Developer', 'Designer','Programmer','Reader']}
                  loop={true}
                  typeSpeed={120}
                />
              </span><Cursor cursorStyle="_"/></p>
            <div className="buttons">
                <button><a href="mailto:tripathi.himanshu9329@gmail.com">Hire Me</a></button>
                <button><a href="https://drive.google.com/file/d/1InTVitk1az5fvaNFxRY4fZA_1lju7ckh/view?usp=drive_link" target='_blank'>Get Resume</a></button>
                <button><a href="https://github.com/himxnshutripathi" target='_blank'>Github Profile</a></button>
            </div>
        </div>
    </div>
  )
}

export default Header