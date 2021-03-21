import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component{

  constructor(props){
    super(props)
    this.clickDropDown = this.clickDropDown.bind(this)
  }

  clickDropDown(e){
    if (e.target.classList.value === 'btn-logout' ){
      const $drop = document.getElementsByClassName('btn-logout')
      $drop[0].classList.toggle('active')
    }
  }

  closeMenu(e){
    if (e.target.offsetParent.className === "home-dropdown"){
      document.getElementsByClassName('btn-logout')[0].classList.remove('active')
    }
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
          <button className="btn-logout" onClick={this.clickDropDown}>
            <ul className='home-dropdown' >
              <li>Welcome {name}</li> 
              <i className="fa fa-times" onClick={this.closeMenu}></i>
              <li className='shadowed-text'>{currentUser.email}</li>
              <hr className="Solid"/>
              <li>Settings (coming soon)</li>
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