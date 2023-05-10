import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
         <Routes>
        <Route exact path="/" element={ <News setProgress={setProgress} key="general" pageSize={this.pageSize} country="in" category= "general"/>} />
        <Route exact path="/business" element={ <News setProgress={setProgress} key="business" pageSize={this.pageSize} country="in" category= "business"/>} />
        <Route exact path="/entertainment" element={ <News setProgress={setProgress} key="entertainment" pageSize={this.pageSize} country="in" category= "entertainment"/>} /> 
        <Route exact path="/general" element={ <News setProgress={setProgress} key="general" pageSize={this.pageSize} country="in" category= "general"/>} />
        <Route exact path="/health" element={ <News setProgress={setProgress} key="health" pageSize={this.pageSize} country="in" category= "health"/>} />
        <Route exact path="/science" element={ <News setProgress={setProgress} key="science" pageSize={this.pageSize} country="in" category= "science"/>} />
        <Route exact path="/sports" element={ <News setProgress={setProgress} key="sports" pageSize={this.pageSize} country="in" category= "sports"/>} />
        <Route exact path="/technology" element={ <News setProgress={setProgress} key="technology" pageSize={this.pageSize} country="in" category= "technology"/>} />
      </Routes>
      </BrowserRouter>
      </div>
    )
}


