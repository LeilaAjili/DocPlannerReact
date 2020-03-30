import React from "react";
import OfficeItem from "./officeItem";
import './office.css';

const offices = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    country: "Warsaw"
  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    country: "Barcelone"
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    country: "Istanbul"
  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    country: "Rome"
  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    country: "Mexico-City"
  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    country: "Curitiba"
  }
];

function Office() {
  return (
    <div className="offices">
      {offices.map((el, i) => {
        return <OfficeItem key={i} obj={el} />;
      })}
    </div>
  );
}

export default Office;
