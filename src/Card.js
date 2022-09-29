import React from 'react'

export default function Card (props) {
    return (
        <div className='card' onClick={props.clickHandle} >
                <h3 key={props.id}>{props.input}</h3>
        </div>
    )
}