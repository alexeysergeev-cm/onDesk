import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component{

  constructor(props){
    super(props)
    this.clickDropDown = this.clickDropDown.bind(this)
  }

  clickDropDown(){

  }
  render(){
    const { logout, currentUser, email} = this.props;
    let welcome;
    let name;

    if (currentUser){
      name = currentUser.username[0].toUpperCase() + currentUser.username.slice(1)
      welcome = (
      <div>
          <button className="btn-logout" onClick={this.clickDropDown}>

            <ul className='home-dropdown' >
              <li>
                <li>name</li> 
                <li>{currentUser.email}</li>
              <hr className="Solid"/>
              </li>
              <li>Papers</li>
              <li>Settings</li>
              <hr className="Solid"/>
              <li onClick={() => logout()}>Log out</li>
            </ul>
          </button>
      </div>
      )
    }

    return(
      <>
        <header className="fixed-top-home">
          <nav className="nav-bar-home loggedIn">
            <a className='float-left'></a>
            <h3>onDesk</h3>
            <div className='float-right'>
              {welcome}
            </div>
          </nav>
        </header>
      </>
    )
  }
}

export default Greeting;