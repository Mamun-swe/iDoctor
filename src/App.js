import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ScrollToTop from './Components/ScrollToTop/Index'

import HomeIndex from './Pages/Home/Index'
import AboutIndex from './Pages/About/Index'
import ContactIndex from './Pages/Contact/Index'
import SearchResultIndex from './Pages/SearchResult/Index'

import LoginIndex from './Pages/Auth/Login'
import RegisterIndex from './Pages/Auth/Register'
import ResetIndex from './Pages/Auth/Reset'

import DoctorAccountMaster from './Pages/Account/Doctor/Master'

import FourOFour from './Pages/FourOFour/Index'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={HomeIndex} />
            <Route exact path="/about-us" component={AboutIndex} />
            <Route exact path="/contact-us" component={ContactIndex} />
            <Route exact path="/search" component={SearchResultIndex} />

            <Route exact path="/login" component={LoginIndex} />
            <Route exact path="/register" component={RegisterIndex} />
            <Route exact path="/reset" component={ResetIndex} />

            <Route path="/doctor" component={DoctorAccountMaster} />

            <Route path="*" component={FourOFour} />

          </Switch>
        </ ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
