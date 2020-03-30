import React, {Component} from 'react';

import './globalCompany.css'


const data=[
    {
        title:"ZnanyLekarz",
        link:"https://www.znanylekarz.pl/?_ga=2.214171479.1997378697.1581371014-1136133463.1581200373",
    },
    {
       title:"Doctoralia",
       link:"https://www.znamylekar.cz",
   },
   {
       title:"MioDottore",
       link:"https://www.doctoralia.es",
   },
   {
       title:"DoctorTakvimi",
       link:"https://www.miodottore.it/?_ga=2.59940205.1997378697.1581371014-1136133463.1581200373",
   },
   {
       title:"ZnanyLekar",
       link:"https://www.doktortakvimi.com/?_ga=2.47381607.1997378697.1581371014-1136133463.1581200373",
   }
]

function logos(){
    return(
        
           

        data.map(el =>
        <div>
          <a href={el.link}>
          <img
          src="https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/8e/7d/4d/8e7d4d9b-65d0-e043-fbfd-a28839ccf00e/AppIcon-1x_U007emarketing-85-220-4.png/246x0w.jpg"
          className="doc-planner"
        />

      
      {el.title}
    </a>
  </div>
      
      
      
      )


      
  )



}
export default logos;