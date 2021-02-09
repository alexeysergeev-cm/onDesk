import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component{


  render(){
    const { logout, currentUser} = this.props;
    let welcome;
    
    if (!currentUser){
      welcome = (
        <div>
          <h3>Please Log In or Sign Up</h3>
          <Link to='/'>Sign Up</Link>
          {/* <Link to='/'>Sign Up</Link> */}
        </div>
      )
    } else {
      welcome = (
      <div>
        <h3>Welcome {currentUser.username}</h3>
        <button onClick={() => logout()}>Logout</button>
      </div>
      )
    }

    return(
      <>
        {welcome}
      </>
    )
  }
}

export default Greeting;