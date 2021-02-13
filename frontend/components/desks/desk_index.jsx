import React from 'react'
import DeskIndexItem from './desk_index_item'

class DeskIndex extends React.Component{
  constructor(props){
    // debugger 
    super(props)

  }

  componentDidMount(){
    this.props.fetchDesks()
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
  }

  render(){
    const { desks } = this.props
    // debugger
    let color = () => getRandomColor()
    return(
      <div className='home-container'>
        <div className='home-sticky-container'>
          <nav className='home-left-sidebar'>
            <div className='li-items'>
              <li>Desks</li>
              <li>Templates</li>
              <li>Home</li>
            </div>
            <div className='li-items'>
              <div>Teams</div>
              <li>Peronal Projects</li>
              <li>Team Projects</li>
            </div>
          </nav>
          <div className='desk-page'>
            {desks.map(desk => (
              <span className='desk-tile'>
                <div  key={desk.id} className='desk-tile-details'>
                  <DeskIndexItem 
                  desk={desk}
                />  
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default DeskIndex