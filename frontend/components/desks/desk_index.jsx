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

  render(){
    const { desks } = this.props
    // debugger
    return(
      <div>
        {desks.map(desk => (
          <button key={desk.id}>
            <DeskIndexItem 
            desk={desk}
          />  
          </button>
        ))}
      </div>
    )
  }
}

export default DeskIndex