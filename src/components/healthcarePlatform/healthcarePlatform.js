import React from 'react';
import PlatformElement from "./platformElement";
import './healthcarePlatform.css'





const platformList = [
    {
      image: "https://www.docplanner.com/img/flag.png",
      title: "Leader in 10 countries",
      info:
        "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile",
        style:"platformItem"
        
    },
    {
      image: "https://www.docplanner.com/img/visits.png",
      title: "1 million appointments",
      info: "booked last month",
      style:"platformItem x"
    },
    {
      image: "https://www.docplanner.com/img/patients.png",
      title: "30 million unique patients",
      info: "visit us every month",
      style:"platformItem"
    },
    {
      image: "https://www.docplanner.com/img/doctors.png",
      title: "2 million active doctors",
      info: "trust in our solutions",
      style:"platformItem x"
    }
  ];


function healthcarePlatform() {
    return (
      <div className="stats">
        <div>
          <h1 className="title-stats">
            The world's <br />
            biggest healthcare platform
          </h1>
          <p className="paragraph-stats">
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
          <img
            src="https://www.docplanner.com/img/logo.png"
            alt="signet"
            className="signet-stats"
          />
        </div>
        <div className="platform">
          {platformList.map((elm, i) => {
            return (
              <PlatformElement
                key={i}
                image={elm.image}
                title={elm.title}
                info={elm.info}
                style={elm.style}
              />
            );
          })}
        </div>
      </div>
    );
  }
  
export default healthcarePlatform;