import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';



function App() {

  return (
    <Router>
      {/* <Navbar />  */}
      <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/' component={() => <Home showIntro={() => setIntroState(false)} /> } /> */}
           { /* <Route path='/home' exact component={Logo} /> */ }
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

