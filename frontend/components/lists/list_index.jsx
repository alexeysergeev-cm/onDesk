import React from 'react'
import ListIndexItem from './list_index_item'
import ListFormContainer from './list_form_container'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';

class ListIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      paperOrder: []
    }
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this)
  }

  handleOnDragEnd(result) {
    if (!result.destination) return;
    // console.log(result)
    // debugger
    const items = this.state.paperOrder;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    this.setState({paperOrder: items})
  }

  render(){
    const { lists, deskId, desk } = this.props
    if (!lists) return null

    return(

      <DragDropContext onDragEnd={this.handleOnDragEnd}>
        <Droppable droppableId="all-lists" 
                    direction="horizontal" 
                    type="list">
                    {(provided) => (
                      <div className="list-index-container"
                        {...provided.droppableProps} ref={provided.innerRef}>

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
                        {provided.placeholder}
                        <ListFormContainer 
                          deskId={deskId}
                          desk={desk}
                        />
                      </div>
                    )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default ListIndex