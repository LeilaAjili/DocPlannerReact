import React from "react";
import './healthcarePlatform.css'


const PlatformElement = props => {
  return (
    <div className={props.style}>
      <img src={props.image} alt="" className="" />
      <h4>{props.title}</h4>
      <p>{props.info}</p>
    </div>
  );
};

export default PlatformElement;