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
          <a className='float-left' href="/">onDesk</a>
          <div className='float-right'>
            {display}
          </div>
        </nav>
      </header>
    );
  }
};

export default NavBar
