import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Aboutme from '../../Components/Aboutme/Aboutme'
import ExploreSkill from '../../Components/ExploreSkill/ExploreSkill'
import Projects from '../../Components/Projects/Projects'

const Home = () => {
  return (
    <div>
        <Header/>
        <Aboutme/>
        <ExploreSkill/>
        <Projects/>
    </div>
  )
}

export default Home