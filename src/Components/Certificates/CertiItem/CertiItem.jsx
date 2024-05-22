import React from 'react'
import './CertiItem.css'

const CertiItem = (props) => {
  return (
    <div className='CertiItem'>
        <div className="left">
            <img src={props.img} />
        </div>
        <div className="right">
            <h2>{props.date}</h2>
            <h3>{props.name}</h3>
            <ul>
                <li>{props.l1}</li>
                <li>{props.l2}</li>
                <li>{props.l3}</li>
            </ul>
            <div className="buttons">
                <a href={props.link} target='_blank'><button>View Certificate</button></a>
            </div>
        </div>
    </div>
  )
}

export default CertiItem