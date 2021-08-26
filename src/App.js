import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//Home page
import './App.css';
import Nav from './Component/Nav/Nav';
import Main from './Component/Main/Main';
import Footerprp from './Component/Footer/Footerprp';
//Pages
import Mac from './Pages/Mac/Mac';
import Iphone from './Pages/Iphone/Iphone';
import Productpage from './Pages/ProductPage/ProductPage';
import Four04 from './Pages/Four04/Four04';

function App() {
  return (
    <Router>
    <div>
        <Nav />
        <br />
        <br />
        <br/>
        <Switch>
          < Route path="/" exact component={Main} />
          < Route path="/mac" exact component={Mac} />
          < Route path="/iphone" exact component={Iphone} />
          < Route path="/iphone/:pid" exact component={Productpage} /> 
          < Route path="/" component= {Four04} />
          </Switch>
      <Footerprp/>
      </div>
      </Router>
  );
}

export default App;
