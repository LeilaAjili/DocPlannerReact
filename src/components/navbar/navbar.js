import React, {Component} from 'react';

import './navbar.css'


function menu({x}) {

        return (
         
            
               
                <div className="navbar">
     
                <img class="log" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"></img>

               <ul className="menu">

               {x.map(el=>
               
               el.submenu?
               <a href="#"><li className="title">{el.title}
                 <ul className="submenu">
                     {el.submenu.map(el=> 
                     
                     <li className="element"> 
                     <a href="#">{el}</a> </li> )}  
                </ul>
                </li></a>
                
                     : <a href="#"> <li className="title"> {el.title}</li></a>
               )}
               

           </ul>
           </div>

           
          
        )
    
}

export default menu;