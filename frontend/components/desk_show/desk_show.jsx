import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import GreetingContainer from '../greetings/greeting_container'
class DeskShow extends React.Component{

  componentDidMount(){
    this.props.fetchDesk(this.props.deskId)
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

    return(
      <div className='desk-show-container'>
        <div className='desk-header-container'>
          <GreetingContainer />
        </div>
        <div className='desk-name-header'>
          <div className='desk-name-header-btn'>

            {title}
          </div>

        </div>


      </div>
    )
  }
}

export default DeskShow;