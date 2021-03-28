import React from 'react'
import DeskIndexItem from './desk_index_item'
import { Link } from 'react-router-dom'

class DeskIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      projects: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchDesks()
  }

  handleClick(e){
    let currUserId = this.props.currentUserId
    document.getElementsByClassName('desk-page')[0].style.display = 'none'
    document.getElementsByClassName('desk-page-projects')[0].style.display = 'flex'
    document.getElementsByClassName('li-h active')[0].classList.remove('active')

    let projects = [];
    if (e.currentTarget.innerText === "Created By You"){
      e.currentTarget.classList.add('active')
      this.props.desks.forEach(desk => {
        if (desk.author_id === currUserId){
          projects.push(desk)
        }
      })
    } else if (e.currentTarget.innerText === "Shared With You"){
      e.currentTarget.classList.add('active')
      this.props.desks.forEach(desk => {
        if (desk.author_id !== currUserId){
          projects.push(desk)
        }
      })
    } else {
      e.currentTarget.firstElementChild.classList.add('active')
      document.getElementsByClassName('desk-page')[0].style.display = 'flex'
      document.getElementsByClassName('desk-page-projects')[0].style.display = 'none'
      projects = this.props.desks
    }
    this.setState({projects: projects})
  }


  render(){
    const { desks } = this.props
    desks.forEach(desk => {
      if (!desk.background_picture){
        desk.background_picture = "https://ondesk-dev.s3-us-west-1.amazonaws.com/desert.jpeg"
      }
    })

    if (!desks) return null;

    return(
      <div className='home-container'>
        <div className='home-sticky-container'>
          <nav className='home-left-sidebar'>
            <div className='li-items'>
              <div className='shadowed-text big'>Projects</div> 
              <a onClick={this.handleClick}><li className='li-h active'>All Desks</li></a> 
              <li className='li-h' onClick={this.handleClick}>Created By You</li>
              <li className='li-h' onClick={this.handleClick}>Shared With You</li>
            </div>

            <div className='shadowed-text big'>Find me on</div>
            <a href="https://angel.co/u/alexey-sergeev-cm"><li className='li-h'>Angel List<i className="fa fa-angellist" aria-hidden="true"></i></li></a>
            <a href="https://github.com/alexeysergeev-cm"><li className='li-h'>Github <i className="fa fa-github" aria-hidden="true"></i></li></a>
            <a href="https://www.linkedin.com/in/alexey-sergeev-cm"><li className='li-h'>LinkedIn <i className="fa fa-linkedin-square" aria-hidden="true"></i></li></a>
          </nav>

          <div className='desk-page'>
            {desks.map(desk => (
              
              <Link key={desk.id} to={`/${desk.id}/deskshow`}> 
              <span className='desk-tile' style={{backgroundImage: `url(${desk.background_picture})`}}>
                <div className='desk-tile-details'>
                  <DeskIndexItem 
                  desk={desk}
                />  
                </div>
              </span>
              </Link>
            ))}
          </div>
          <div className='desk-page-projects'>
            {this.state.projects.map(desk => (
              <Link key={desk.id} to={`/${desk.id}/deskshow`}> 
              <span className='desk-tile' style={{backgroundImage: `url(${desk.background_picture})`}}>
                <div className='desk-tile-details'>
                  <DeskIndexItem 
                  desk={desk}
                />  
                </div>
              </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
    
  }
}

export default DeskIndex