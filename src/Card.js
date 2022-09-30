import React from 'react'

export default function Card (props) {
    return (
        <div className='card' onClick={props.clickHandle} >
                <img src={props.img} alt=""/>
        </div>
    )
}