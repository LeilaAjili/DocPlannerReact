import React from "react";
import Btn from "./button";
import './office.css';


const OfficeItem = props => {
  return (
    <div>
      <img src={props.obj.image} alt="" className="office-image" />
      <div className="countryButton">
        <h6>{props.obj.country}</h6>
        <Btn />
      </div>
    </div>
  );
};

export default OfficeItem;
