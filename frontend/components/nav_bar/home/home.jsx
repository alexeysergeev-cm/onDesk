import React from 'react';
import GreetingContainer from '../../greetings/greeting_container';
import NavBarContainer from '../nav_bar_container';
import { connect } from 'react-redux';


const Header = (props) => {
  const nav = props.loggedIn ? <GreetingContainer /> : <NavBarContainer />
  return(
    <div>
      {nav}
    </div>
  )
}

const mSTP = state => ({
  loggedIn: !!state.session.currentUserId
})


export default connect(mSTP, null)(Header);