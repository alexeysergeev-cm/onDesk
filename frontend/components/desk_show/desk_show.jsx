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

    debugger

    return(
      <div id='desk-show-container'>
        <div className='desk-header-container'>
          <GreetingContainer />
        </div>
            {id}
            {title}

      </div>
    )
  }
}

export default DeskShow;