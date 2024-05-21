import React from 'react'
import './ExploreSkill.css'
import {skill_list} from '../../assets/assets'

const ExploreSkill = () => {
  return (
    <div className='explore-skill' id='explore-skill'>
        <div className="explore-skill-list">
            {skill_list.map((skill,index)=>{
                return (
                    <div key={index} className='explore-skill-list-item'>
                        <a href={skill.skill_link} target='_blank'><img src={skill.skill_image}></img></a>
                        <p>{skill.skill_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreSkill