import React from 'react'
import './style.css';

function card(props) {
    return (
        <>
            <div className="pictureWindow">
                <img className = "image" src={props.pic} alt="Character"/>
                <div className="middle">
                    <p id = "inCard">{props.name}</p>
                    <p id = "inCard">{props.job}</p>
                </div>
            </div>
        </>
    )
}

export default card
