import React from 'react'
import ListIndexItem from './list_index_item'
import ListFormContainer from './list_form_container'

class ListIndex extends React.Component{

  render(){
    const { lists } = this.props
    if (!lists) return null
    return(
      <div className="list-index-container">
        {lists.map(list => (
          <div className='list-wrapper'>
            <div className='list-item'>
              <ListIndexItem
                list={list}
                key={list.id}
                />
            </div>      
          </div>
        ))}
        <ListFormContainer />
      </div>
    )
  }
}

export default ListIndex