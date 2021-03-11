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

  //---place random background for deskTile
  componentDidUpdate(){

    let imagesArr = ["https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2401x1600/203ad19e43893965eaf4bc367b1c0458/photo-1591567462181-19db8b0fd818.jpg",
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1440x1920/de30dbd911cb5dd88f8130ab68b8119d/photo-1596710216028-6e11b9c1a5e6.jpg",
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2398x1600/31c25173aff1c30215f1f11dc10c6dde/photo-1528932860067-7e2e27b3185f.jpg",
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1288x1920/5454b070c19ef0cf77c3a2e0ba91e6f9/photo-1552472947-2abd68d0d927.jpg",
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x1920/9d2eead0ddc23a92d7e2e24576363205/photo-1602623056709-8a613a29940c.jpg",
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1536x1920/b567216700fb2072ce3dbc3ec428bd88/photo-1552679699-dafca9d2c58c.jpg",
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/83d0104570a205a798ea33a5c6fcc9e3/photo-1528779794993-d2f7f51a53a4.jpg",
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1536x1920/7fd0c6004a901817109fb465a92a07fd/photo-1552671641-8cbdd17c492e.jpg",
      "https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/cosmos/medium.jpg"]

      
      let tiles = Array.from(document.getElementsByClassName('desk-tile'))
      
      if (tiles){
        tiles.forEach(ele => { 
          let randomImg = imagesArr[Math.floor(Math.random() * imagesArr.length)]
        if (!ele.style["backgroundImage"].length) {
          ele.style["backgroundImage"] = `url(${randomImg})`
        }
      })
    }
  }

  render(){
    const { desks } = this.props

    
    if (!desks) return null;

    return(
      <div className='home-container'>
        <div className='home-sticky-container'>
          <nav className='home-left-sidebar'>
            <div className='li-items'>
              {/* <li className='li-h active' href='/'> */}
                <a href="/"><li className='li-h active' href='/'>All Desks</li></a> 
                {/* </li> */}
              <div className='shadowed-text big'>Find me on</div>

              <a href="https://angel.co/u/alexey-sergeev-cm"><li className='li-h'>Angel List<i class="fa fa-angellist" aria-hidden="true"></i></li></a>
              <a href="https://github.com/alexeysergeev-cm"><li className='li-h'>Github <i class="fa fa-github" aria-hidden="true"></i></li></a>
              <a href="https://www.linkedin.com/in/alexey-sergeev-cm"><li className='li-h'>LinkedIn <i class="fa fa-linkedin-square" aria-hidden="true"></i></li></a>

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