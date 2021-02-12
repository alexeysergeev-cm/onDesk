import React from 'react'
import DeskIndexItem from './desk_index_item'

class DeskIndex extends React.Component{

  componentDidMount(){
    this.props.fetchDesks()
  }

  render(){
    const { desks } = this.props
    // debugger
    return(
      <div>
        {/* {desks.map(bench => (
          <DeskIndexItem 
            desk={desk}
            key={bench.id}
          />
        ))} */}
      </div>
    )
  }
}

export default DeskIndex