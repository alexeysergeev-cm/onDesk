import React from 'react'
import ListIndexItem from './list_index_item'

class ListIndex extends React.Component{

  render(){
    return(
      <div className="list-index-container">
        {lists.map(list => (
          <div className='list-item'>
            <ListIndexItem
              list={list}
              key={list.id}
              />
          </div>      
        ))}
      </div>
    )
  }
}

export default ListIndex