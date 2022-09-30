import React from 'react'

export default function Card (props) {
    return (
        <div className='card' onClick={props.clickHandle} >
                <h3>{props.input}</h3>
                <img src={props.img} width="250px" alt=""/>
        </div>
    )
}