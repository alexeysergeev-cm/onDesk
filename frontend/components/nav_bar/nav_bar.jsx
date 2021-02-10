import React from 'react';
import { Link } from 'react-router-dom';

class NavBar  extends  React.Component{
  render() {
    const { currentUser, logout } = this.props
    const display = (
      <div>
        {/* <p>Hello, {currentUser.username}</p>
        <button onClick={logout}>Log Out</button> */}
        <Link className="" to="/login">Log In</Link>
        <Link className="btn" to="/signup">Sign Up</Link>
      </div>
    );
  
    return (
      <header className="nav-bar">
        <h1 className="logo">onDesk</h1>
        <div>
          {display}
        </div>
      </header>
    );
  }
};

export default NavBar
