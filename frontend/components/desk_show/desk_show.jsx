import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import GreetingContainer from '../greetings/greeting_container'
import SearchContainer from './search_container';
import DeskEditContainer from '../desk_edit/desk_edit_container';
import ListIndexContainer from '../lists/list_index_container'



class DeskShow extends React.Component{
  constructor(props) {
    super(props)
    this.clickDropDown = this.clickDropDown.bind(this)
    this.handleDeleteDesk = this.handleDeleteDesk.bind(this)
    this.clickInvite = this.clickInvite.bind(this)
    this.titleUpdate = this.titleUpdate.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  componentDidMount(){
    this.props.fetchDesk(this.props.deskId)
  }

  titleUpdate(){
    let deskTitle = document.getElementsByClassName('desk-title');
    let updateForm = document.getElementsByClassName('udate-form-container');
    deskTitle[0].classList.add('hide')
    updateForm[0].classList.add('show')
  }

  clickInvite(e){
    e.stopPropagation();
    let $dropInvite = document.getElementsByClassName('invite-dropdown')[0]

    if (e.target.innerText === "Invite Another User" || e.target.offsetParent.classList.value === 'close-x invite'){
      $dropInvite.classList.toggle('open')
    }
  }

  clickDropDown(e) {
    if (e.target.innerText === "Show Menu"){
      const $drop = document.getElementById('show-menu')
      $drop.classList.toggle('active')
    } 
  }


  handleDeleteDesk(){
    this.props.deleteDesk(this.props.deskId)
      .then(() => this.props.history.push('/'))
    
    setTimeout(() => this.props.clearErrors(), 5000)
  }

  closeMenu(e){
    if (e.target.offsetParent.className === 'menu-dropdown'){
      document.getElementById('show-menu').classList.remove('active')
    }
  }

  render(){
    const { title, deskErr, deskId, currUserId } = this.props

    let background;
    if (this.props.desk[deskId]){
      if (this.props.desk[deskId].background_picture){
        background = this.props.desk[deskId].background_picture
      } else {
        background = "https://ondesk-dev.s3-us-west-1.amazonaws.com/desert.jpeg"
      }
    }

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
            <ul className='menu-dropdown' >
              <li>MENU</li>
              <i className="fa fa-times" onClick={this.closeMenu}></i>
              <hr className="Solid" />
              <li>Settings (coming soon)</li>
              <hr className="Solid" />
              <li onClick={this.handleDeleteDesk}>Delete Desk</li>
            </ul>
          </div>
    )

    //-------invite Dropdown 
    let invite = (
      <div className='invite-btn' id='show-invite' onClick={this.clickInvite}>
        <div className="invite-text" id='show-invite'>
          <span>Invite Another User</span>
        </div>
        <ul className='invite-dropdown '>
          <div className='invite-pop-over'>
            <span >Invite To Desk</span>
            <div className="close-x invite" onClick={this.clickInvite}><i className="fa fa-times" ></i></div>
          </div>
          <hr className="Solid" />
          <SearchContainer 
            deskId={deskId}
          />
        </ul>
      </div>
    )
  
    return(
      <div className='desk-show-container' style={{backgroundImage: `url(${background})`}}>
        <div className='desk-header-container'>
          <GreetingContainer />
        </div>
        <div style={{width: '100%', display: 'block', position: 'absolute', top: '40px'}}>
          <div className='desk-name-header'>
            <div className='desk-name-header-btn'>
              <div className='desk-title' onClick={this.titleUpdate}>
                {title}
              </div>
              <div className='udate-form-container'>
                <DeskEditContainer 
                  deskId={deskId}
                  currUserId={currUserId}
                  clearErrors={this.props.clearErrors}
                />
              </div>
            </div>
            {invite}
            {menu}
          </div>
        </div>
        <div className='desk-errors-container'>
          <div className='desk-errors'>
            {error}
          </div>
        </div>
        <ListIndexContainer 
          deskId={deskId}
          desk={this.props.desk[deskId]}
        />
      </div>
    )
  }
}

export default DeskShow;