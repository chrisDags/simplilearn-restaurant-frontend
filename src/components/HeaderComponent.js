import React, { Component } from 'react'
import { withRouter } from 'react-router'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './HeaderCSS.css'
class HeaderComponent extends Component {
    render() {
        return (
            <header style = {{paddingBottom: "40px"}}>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div class="navbar-brand" style={{fontSize: '30px', paddingRight: '20px'}}> <Link className="nav-link" style={{color: 'white', fontSize:'30px'}} to="/"> Ming's Diner</Link></div>
                         <ul className="navbar-nav" ><Link className="nav-link" style={{color: 'white', fontSize:'20px'}} to="/about"> About</Link></ul>
                         
                         <ul className="navbar-nav"><Link className="nav-link" style={{color: 'white', fontSize:'20px'}} to="/contact"> Contact</Link></ul>
               
                    
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)