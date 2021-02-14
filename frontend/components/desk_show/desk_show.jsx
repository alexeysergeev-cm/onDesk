import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class DeskShow extends React.Component{

  componentDidMount(){
    debugger
    this.props.fetchDesk(this.props.match.params.deskId)
  }

  render(){
    const { title, id } = this.props
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