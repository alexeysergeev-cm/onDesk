import React from 'react'
import DeskIndexItem from './desk_index_item'
import { Link } from 'react-router-dom'

class DeskIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchDesks()
  }

  render(){
    const { desks } = this.props

    return(
      <div className='home-container'>
        <div className='home-sticky-container'>
          <nav className='home-left-sidebar'>
            <div className='li-items'>
              <li className='li-h active' href='/'>
                <a href="/">Desk</a> 
                </li>
              <li className='li-h'>Templates</li>
              <li className='li-h'>Home</li>
            </div>
            <div className='li-items'>
              <div className='shadowed-text big'>Teams</div> 
              <li className='li-h'>Peronal Projects</li>
              <li className='li-h'>Team Projects</li>
            </div>
          </nav>
          
          <div className='desk-page'>
            {desks.map(desk => (
              <Link key={desk.id} to={`/${desk.id}/deskshow`}> 
              <span className='desk-tile'>
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