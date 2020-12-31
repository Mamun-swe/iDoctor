import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop/Index'

import HomeIndex from './pages/Home/Index'
import AboutIndex from './pages/About/Index'
import ContactIndex from './pages/Contact/Index'
import SearchResultIndex from './pages/SearchResult/Index'

import LoginIndex from './pages/Auth/Login/Index'
import RegisterIndex from './pages/Auth/Register/Index'
import ResetIndex from './pages/Auth/Reset/Index'

import DoctorAccountMaster from './pages/Account/Doctor/Master/Index'
import PatientAccountMaster from './pages/Account/Patient/Master/Index'
import PrivateRoute from './components/PrivateRoute/Index'

import ChatIndex from './pages/Chat/Index'

import FourOFour from './pages/FourOFour/Index'

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

            {/* Doctor Master */}
            <PrivateRoute path="/doctor" role="doctor">
              <DoctorAccountMaster />
            </PrivateRoute>

            {/* Patient Master */}
            <PrivateRoute path="/patient" role="patient">
              <PatientAccountMaster />
            </PrivateRoute>

            {/* Council Master */}
            <Route exact path="/messages/:reciverId">
              <ChatIndex />
            </Route>

            <Route path="*" component={FourOFour} />

          </Switch>
        </ ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
