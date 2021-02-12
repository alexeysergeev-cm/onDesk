import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component{


  render(){
    const { logout, currentUser} = this.props;
    let welcome;
    let name;

    if (currentUser){
      welcome = (
      <div>
          <button className="btn-bg-home loggedIn" onClick={() => logout()}></button>
      </div>
      )
      name = currentUser.username[0].toUpperCase() + currentUser.username.slice(1)
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