import React from 'react';
import Navmenu from './components/navbar/navbar'
import Header from './components/header/header'
import CardsFor from './components/cardsFor/cardsFor'
import GlobalCompany from './components/globalCompany/globalCompany'
import HealthcarePlatform from './components/healthcarePlatform/healthcarePlatform'
import Improve from './components/improve/improve'
import Offices from './components/office/office'
import Footer from './components/footer/footer'


import {data,cardsFor} from "./components/data"
import './App.css';

function App() {
   


    return(

        <div>

      <Navmenu x={data}/>

      <Header />

      <div className="cardsFor-principal"> <CardsFor x={cardsFor}/> </div>

      <div> <GlobalCompany /> </div>

      <HealthcarePlatform />

      <Improve />

      <Offices />

      <Footer />


        </div>

        


    );
 
}

export default App;
