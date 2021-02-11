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
          <button className="btn btn-bg loggedIn" onClick={() => logout()}>Logout</button>
      </div>
      )
      name = currentUser.username[0].toUpperCase() + currentUser.username.slice(1)
    }

    return(
      <>
        <header className="fixed-top">
          <nav className="nav-bar loggedIn">
            <a className='float-left'>onDesk</a>
            <h3>Welcome {name}!</h3>
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