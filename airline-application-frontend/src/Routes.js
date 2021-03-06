import React from 'react'
import {BrowserRouter, Switch, Route,Link} from "react-router-dom"
import Home from "./core/Home"
import Login from './components/login.component';
import SignUp from './components/signup.component';
import AdminRoute from './authHelper/AdminRoute'
import AdminDashBoard from './components/AdminDashboard'
import FlightBooking from './components/FlightBooking';
import SignOut from './components/SignOut';

const Routes = ()=>{
    return (
        <BrowserRouter>
{/* 
        <div className="App">
         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Travel.com</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner"> */}



            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard}/>
                <Route path="/FlightBooking" exact component={FlightBooking} />
                <Route path="/signout" exact component={SignOut}/>
            </Switch>
            {/* </div>
      </div>
    </div> */}
        </BrowserRouter>
    )
}

export default Routes;