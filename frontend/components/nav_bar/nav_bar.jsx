import React from 'react';
import { Link } from 'react-router-dom';

class NavBar  extends  React.Component{
  render() {
    const { currentUser, logout } = this.props
    const display = (
      <div>
        <Link className="btn btn-sm" to="/login">Log In</Link>
        <Link className="btn btn-bg" to="/signup">Sign Up</Link>
      </div>
    );
  
    return (
      <header className="fixed-top">
        <nav className="nav-bar">
          
          <a className='float-left'>
            <img src={window.logo} className='nav-bar-logo'/>
            <div>onDesk</div>
          </a>
          <div className='float-right'>
            {display}
          </div>
        </nav>
        <div className='intro-container'>
          <div className='intro-text'>
            <h1 className='intro-text-big'> 
              onDesk helps teams work more collaboratively and get more done.
            </h1>
            <p className='lead'>onDesk’s desks, lists, and papers enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p> 
          </div>
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" />
        </div>
      </header>
    );
  }
};

export default NavBar
