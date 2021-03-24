import React from 'react'
import ListIndexItem from './list_index_item'
import ListFormContainer from './list_form_container'

class ListIndex extends React.Component{
  

  render(){
    const { lists, deskId } = this.props
    if (!lists) return null

    return(
      <div className="list-index-container">
        {lists.map(list => (
          <div key={list.id} className='list-wrapper'>
            <div className='list-item'>
              <ListIndexItem
                list={list}
                deskId={deskId}
                deleteList={this.props.deleteList}
                />
            </div>      
          </div>
        ))}
        <ListFormContainer 
          deskId={deskId}
        />
      </div>
    )
  }
}

export default ListIndex