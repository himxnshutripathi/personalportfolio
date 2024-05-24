import React from 'react'
import './ExpSkill02.css'
import { skill_list_01 , skill_list_02} from '../../assets/assets'

const ExpSkill02 = () => {

  return (
    <div className='ExpSkill02' id='ExpSkill02'>
        <h2>Skill Set</h2>
        <div className="ExpSkill02-list">
            {skill_list_01.map((skill, index)=>{
                return (
                    <div key={index} className='ExpSkill02-list-item'>
                        <div className="ExpSkill02-list-item-vid">
                            <video height="100%" autoplay="autoplay" muted loop>
                                <source src={skill.skill_vid} type='video/mp4'/>
                            </video>
                        </div>
                        <div className="ExpSkill02-list-item-contents">
                            <a href={skill.skill_link} target='_blank'>{skill.skill_ext}</a>
                            <p>{skill.skill_name}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="ExpSkill02-list">
            {skill_list_02.map((skill, index)=>{
                return (
                    <div key={index} className='ExpSkill02-list-item'>
                        <div className="ExpSkill02-list-item-vid">
                            <video height="100%" autoplay="autoplay" muted loop>
                                <source src={skill.skill_vid} type='video/mp4'/>
                            </video>
                        </div>
                        <div className="ExpSkill02-list-item-contents">
                            <a href={skill.skill_link} target='_blank'>{skill.skill_ext}</a>
                            <p>{skill.skill_name}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExpSkill02
