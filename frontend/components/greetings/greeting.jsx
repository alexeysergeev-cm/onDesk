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
    const { logout, currentUser, email, openModal } = this.props;
    let welcome;
    let name;
    
    

    if (currentUser){
      name = currentUser.username[0].toUpperCase() + currentUser.username.slice(1)
      // debugger
      welcome = (
      <div className='btn-logout-home'>
          <button className="btn-logout" onClick={this.clickDropDown}
            >
            <ul className='home-dropdown' >
              <ul>
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
            <div className='float-left-home'>
              <a className='search' href='/'>
                <i className="fa fa-search"></i>
              </a>
            </div>
            <a href="/" className='h3-home-a'>
              <img src={window.logo} className='nav-bar-logo home-logo' />
              <h3 className='h3-home'>onDesk</h3>
            </a>
            <div className='float-right-home'>
              <button className='add-desk' onClick={() => openModal('Create Desk')}>
                <i className="fa fa-plus-square-o" aria-hidden="true"></i>
              </button>
              {welcome}
            </div>
          </nav>
        </header>
      </>
    )
  }
}

export default Greeting;