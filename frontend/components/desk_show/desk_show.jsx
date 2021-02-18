import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import GreetingContainer from '../greetings/greeting_container'
import SearchContainer from './search_container';



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

  //--Invite DropDown
  clickInvite(e){
    const $drop = document.getElementsByClassName('home-dropdown invite')
    const $xMark = document.getElementsByClassName('close-x invite')
    if ($xMark && $drop[0].classList.contains('open')){
      $drop[0].classList.remove('open')
      return
    }
    if (!$drop[0].classList.contains('open') ) {
      $drop[0].classList.add('open')
    } else {
        $drop[0].classList.remove('open')
      }
  }

  clickDropDown() {
    const $drop = document.getElementById('show-menu')
    $drop.classList.toggle('active')
  }


  handleDeleteDesk(){
    this.props.deleteDesk(this.props.deskId)
      .then(() => this.props.history.push('/'))
    
    setTimeout(() => this.props.clearErrors(), 5000)
  }

  render(){
    const { title, deskErr } = this.props

    //----errors
    let error = deskErr[0];
    if (deskErr.length) {
      let $error = document.getElementsByClassName('desk-errors')
      $error[0].classList.add('err-on')
    } 
    //--- 


    //turning greating header` background to transparent
    let header = document.getElementsByClassName('desk-header-container');
    if (header.length) {
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
      <div className='invite-btn' id='show-invite' >
        <div className="invite-text" id='show-invite' onClick={this.clickInvite}>
          <span>Invite</span>
        </div>
        <ul className='home-dropdown invite'>
          <div className='invite-pop-over'>
            <span >Invite To Desk</span>
            <div className="close-x invite" onClick={this.clickInvite}><i className="fa fa-times" ></i></div>
          </div>
          <hr className="Solid" />
          <SearchContainer />
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
        <div className='desk-errors-container'>
          <div className='desk-errors'>
            {error}
          </div>
        </div>
      </div>
    )
  }
}

export default DeskShow;