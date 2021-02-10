import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component{


  render(){
    const { logout, currentUser} = this.props;
    let welcome;

    const log = (<Link to='/login'>Log In</Link>);
    const sign = (<Link to='/signup'>Sign Up</Link>);
    if (!currentUser){
      welcome = (
        <div>
          <h3>Please {log} or {sign}</h3>
        </div>
      )
    } else {
      welcome = (
      <div>
        <h3>Welcome {currentUser.username[0].toUpperCase() + 
            currentUser.username.slice(1)}!</h3>
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