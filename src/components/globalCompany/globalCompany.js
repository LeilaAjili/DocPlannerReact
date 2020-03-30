import React, {Component} from 'react';
import Logos from'./logos'
import './globalCompany.css'


function globalCompany(){


    return(
        <div className="globalCompany-principal">
            <div className="globalCompany1">
            <h1 className="globalCompany-title">
             We are a global company with <br /> local culture
            </h1>
            </div>
            <div className="globalCompany-logos">
            <Logos />
            </div>
            

        </div>
        
    )
    }


export default globalCompany;