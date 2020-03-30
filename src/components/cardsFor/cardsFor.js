
import React, {Component} from 'react';
import Select from './select'

import './cardsFor.css'


function cardsFor({x}){

    return(

        x.map(el=>
            <div
            className="cardsFor"
            style={{backgroundColor:el.bgColor}}>
            <h1 className="cardsFor-title"> {el.title}</h1>
            <p className="cardsFor-description">{el.description}</p>
            <p className="cardsFor-select">{el.select && <Select />}</p> 
            <img src={el.image} className="cardsFor-image"></img>
            </div>
            )
    )
}

export default cardsFor;