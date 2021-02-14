import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

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

    return(
      <div>
        <div>
            {id}
            {title}
        </div>

      </div>
    )
  }
}

export default DeskShow;