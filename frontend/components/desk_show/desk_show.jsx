import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import GreetingContainer from '../greetings/greeting_container'
class DeskShow extends React.Component{
  constructor(props) {
    super(props)
    this.clickDropDown = this.clickDropDown.bind(this)
  }

  componentDidMount(){
    this.props.fetchDesk(this.props.deskId)
  }

  clickDropDown() {
    const $drop = document.getElementById('show-menu')
    $drop.classList.toggle('active')
  }


  render(){
    const { desk } = this.props

    let id;
    let title;
    if (desk){
      id = desk.id
      title = desk.title
    }

    //turning greating header` background to transparent
    let header = document.getElementsByClassName('desk-header-container');
    if (header.length) {
      // debugger
      let greetFixedTop = header[0].lastElementChild;
      greetFixedTop.classList.add('show');
      let greetNavBar = greetFixedTop.lastElementChild
      greetNavBar.classList.add('show')
    }
    //-----

    //----dropDown Menu
    let menu;
    menu = (
        <div className='desk-name-header-btn' id='show-menu' onClick={this.clickDropDown}>
            <span className='icon-list-items'></span>
            <span>Show Menu</span>
            <ul className='home-dropdown' >
              <ul>
                {/* <li>{name}</li> */}
                {/* <li className='shadowed-text'>{currentUser.email}</li> */}
                <hr className="Solid" />
              </ul>
              <li>Papers</li>
              <li>Settings</li>
              <hr className="Solid" />
              {/* <li onClick={() => logout()}>Log Out</li> */}
            </ul>
          </div>



    )

    return(
      <div className='desk-show-container'>
        <div className='desk-header-container'>
          <GreetingContainer />
        </div>
        <div className='desk-name-header'>
          <div className='desk-name-header-btn'>
              {title}
          </div>
          {/* <div className='desk-name-header-btn' id='show-menu'>
            <span className='icon-list-items'></span>
            <span>Show Menu</span>
          </div> */}
          {menu}

        </div>


      </div>
    )
  }
}

export default DeskShow;