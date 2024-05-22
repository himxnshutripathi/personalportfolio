import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Aboutme from '../../Components/Aboutme/Aboutme'
import ExploreSkill from '../../Components/ExploreSkill/ExploreSkill'
import Projects from '../../Components/Projects/Projects'
import ExpSkill02 from '../../Components/ExpSkill02/ExpSkill02'

const Home = () => {
  return (
    <div>
        <Header/>
        <Aboutme/>
        <ExpSkill02/>
        <Projects/>
    </div>
  )
}

export default Home