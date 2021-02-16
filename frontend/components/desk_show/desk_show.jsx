import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import GreetingContainer from '../greetings/greeting_container'



class DeskShow extends React.Component{
  constructor(props) {
    super(props)
    this.clickDropDown = this.clickDropDown.bind(this)
    this.handleDeleteDesk = this.handleDeleteDesk.bind(this)
    this.clickInvite = this.clickInvite.bind(this)
  }

  componentDidMount(){
    this.props.fetchDesk(this.props.deskId)
  }

  clickInvite(){
    const $drop = document.getElementById('show-invite')
    $drop.classList.toggle('active')
  }
  clickDropDown() {
    const $drop = document.getElementById('show-menu')
    $drop.classList.toggle('active')
  }


  handleDeleteDesk(){
    this.props.deleteDesk(this.props.deskId)
      .then(() => this.props.history.push('/'))
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
                <li>MENU</li>
                <hr className="Solid" />
              </ul>
              <li>Papers</li>
              <li>Settings</li>
              <hr className="Solid" />
              <li onClick={this.handleDeleteDesk}>Delete Desk</li>
            </ul>
          </div>
    )

    //-------invite Dropdown 
    let invite = (
      <div className='desk-name-header-btn invite' id='show-invite' onClick={this.clickInvite}>
        <div className="invite-text">
          <span>Invite</span>
        </div>
        <ul className='home-dropdown invite' >
          <div className='invite-pop-over'>
            <span >Invite To Desk</span>
            <div className="close-x invite"><i className="fa fa-times"></i></div>
          </div>
          <hr className="Solid" />
          <input type="text"
            
            className='invite-input'
            placeholder="Email address"
          />
          <button onClick={this.handleInvite}>Invite</button>
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
          {invite}
          {menu}
        </div>


      </div>
    )
  }
}

export default DeskShow;