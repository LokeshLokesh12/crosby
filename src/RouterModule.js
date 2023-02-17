import React,{Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'
import './index.css'
import Shop from "./Components/Shop";
import Product from "./Components/Product";
import Story from "./Components/Story"; 
import Contact from "./Components/Contact";
import Journal from "./Components/Journal";
import JournalInfo from "./Components/JournalInfo";
import Header from "./Components/Header";

let domjournal = ()=>{
  return(
    <Fragment>
      <Header/>
      <Journal/>
    </Fragment>
  )
}
function RourerModule() {
  return (
    <Fragment>
        <Router>
            <Routes>
              <Route Exect path='/' element={<App/>}></Route>
              <Route Exect path='/shop' element={<Shop/>}></Route>           
              <Route Exect path='/products' element={<Product/>}></Route>           
              <Route Exect path='/ourstory' element={<Story/>}></Route>           
              <Route Exect path='/contact' element={<Contact/>}></Route>           
              {/* <Route Exect path='/journal' element={<Journal/>}></Route>    */}
              <Route Exect path='/journal' element={domjournal()}></Route>   
              <Route Exect path='/journal-info' element={<JournalInfo/>}></Route>           
            </Routes>
        </Router>
    </Fragment>
  )
}
export default RourerModule