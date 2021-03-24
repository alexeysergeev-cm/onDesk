import React from 'react'
import ListIndexItem from './list_index_item'
import ListFormContainer from './list_form_container'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';

class ListIndex extends React.Component{
  constructor(props){
    super(props)

    this.handleOnDragEnd = this.handleOnDragEnd.bind(this)
  }

  handleOnDragEnd(result) {
    if (!result.destination) return;

    if (result.type === "list"){
      const deskId = this.props.desk.id
      const items = this.props.desk.list_order
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      this.props.updateDesk({
        id: deskId,
        list_order: items
      })
    } else if (result.type === "paper"){
      const papers = this.props.lists[result.source.droppableId].paper_order
      // debugger
      const [reorderedItem] = papers.splice(result.source.index, 1);
      papers.splice(result.destination.index, 0, reorderedItem);
      // debugger
      this.props.updateList({
        id: result.source.droppableId,
        paper_order: papers
      })
    } 
  }

  render(){
    const { lists, deskId, desk } = this.props
    if (!lists) return null
    if (!desk) return null

    return(
      <DragDropContext onDragEnd={this.handleOnDragEnd}>
        <Droppable droppableId="all-lists" 
                    direction="horizontal" 
                    type="list">
                    {(provided) => (
                      <div className="list-index-container"
                        {...provided.droppableProps} ref={provided.innerRef}>

                        {this.props.desk.list_order.map((listId, i) => {
                          if (lists[listId]){
                            return (
                               <Draggable key={i} draggableId={listId} index={i}>
                                  {(provided) => (
                                    <div className='list-wrapper' 
                                      ref={provided.innerRef}{...provided.draggableProps} {...provided.dragHandleProps}>
                                      <div className='list-item'>
                                        <ListIndexItem
                                                  list={lists[listId]}
                                                  deskId={deskId}
                                                  deleteList={this.props.deleteList}
                                                  updateList={this.props.updateList}
                                                  desk={desk}
                                          />
                                      </div>      
                                    </div>   
                                  )}
                               </Draggable>  
                            )}
                          })}
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