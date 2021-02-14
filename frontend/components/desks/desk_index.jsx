import React from 'react'
import DeskIndexItem from './desk_index_item'

class DeskIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchDesks()
  }

  // getRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  // return color;
  // }

  render(){
    const { desks } = this.props
    // debugger
    // let color = () => getRandomColor()
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
              <span key={desk.id} className='desk-tile'>
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