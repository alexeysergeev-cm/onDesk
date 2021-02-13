import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component{

  constructor(props){
    super(props)
    this.clickDropDown = this.clickDropDown.bind(this)
  }

  clickDropDown(){
    const $drop = document.getElementsByClassName('btn-logout')
    $drop[0].classList.toggle('active')
  }

  render(){
    const { logout, currentUser, email} = this.props;
    let welcome;
    let name;
    
    

    if (currentUser){
      name = currentUser.username[0].toUpperCase() + currentUser.username.slice(1)
      // debugger
      welcome = (
      <div>
          <button className="btn-logout" onClick={this.clickDropDown}
            >
            <ul className='home-dropdown' >
              <ul>
                {/* <div id='x'></div> */}
                {/* <img src="logo.png" alt='ok' width="50" height="50"/> */}
                <li>{name}</li> 
                <li className='shadowed-text'>{currentUser.email}</li>
              <hr className="Solid"/>
              </ul>
              <li>Papers</li>
              <li>Settings</li>
              <hr className="Solid"/>
              <li onClick={() => logout()}>Log Out</li>
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
            <h3 className='h3-home'>onDesk</h3>
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