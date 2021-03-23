import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      photoFile: null
    };

    this.clickDropDown = this.clickDropDown.bind(this)
    this.updatePhoto = this.updatePhoto.bind(this)
    
    this.handleFile = this.handleFile.bind(this);
  }

  clickDropDown(e){
    if (e.target.classList.value === 'btn-logout' || e.target.parentElement.className === "btn-logout"){
      const $drop = document.getElementsByClassName('btn-logout')
      $drop[0].classList.toggle('active')
    }
  }

  closeMenu(e){
    if (e.target.offsetParent.className === "home-dropdown"){
      document.getElementsByClassName('btn-logout')[0].classList.remove('active')
    }
  }

  handleFile(e) {
    this.setState({photoFile: e.target.files[0]});
  }

  updatePhoto(e){
    const formData = new FormData();
    debugger
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
    $.ajax({
      url: `/api/users/${this.props.currentUser.id}`,
      method: "PATCH",
      data: formData,
      contentType: false,
      processData: false
    })
  }

  componentDidMount(){
    if (this.props.currentUser.photoUrl) {
        $($('.btn-logout'))[0].firstChild.remove()
        $($('.btn-logout'))[0].style.backgroundImage = `url(${this.props.currentUser.photoUrl})`
    } 
  }

  render(){
    const { logout, currentUser, email, openModal } = this.props;
    let welcome;
    let name;
    
    if (currentUser){
      let splitName = currentUser.username.split(' ')[0]
      name = splitName[0].toUpperCase() + splitName.slice(1).toLowerCase()


      welcome = (
        <div className='btn-logout-home'>
            <button className="btn-logout" onClick={this.clickDropDown}>
              <div onClick={this.clickDropDown}>{name[0]}</div>
              <ul className='home-dropdown' >
                <li>Welcome {name}</li> 
                <i className="fa fa-times" onClick={this.closeMenu}></i>
                <li className='shadowed-text'>{currentUser.email}</li>
                <hr className="Solid"/>
                <form onSubmit={this.updatePhoto} className='add-photo'>
                  <label>Choose profile photo</label>
                  <input type="file" onChange={this.handleFile}/>
                  <button>submit</button>
                </form>
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
                <h1>Add a desk</h1>
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