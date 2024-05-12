import React, { useState } from "react";
import "./Navbar.css";
import { assExp } from '../../assets/assets'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu,setMenu] = useState("home")
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={assExp.logo} alt="" />
      </div>
      <div className="navbar-menu">
      <ul className="navbar-menu-list">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href="#aboutme" onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</a>
        <a href="#explore-skill" onClick={()=>setMenu("skills")} className={menu==="skills"?"active":""}>Skills</a>
        <a href="#projects" onClick={()=>setMenu("projects")} className={menu==="projects"?"active":""}>Projects</a>
        <a href="#footer" onClick={()=>setMenu("contacts")} className={menu==="contacts"?"active":""}>Contacts</a>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
