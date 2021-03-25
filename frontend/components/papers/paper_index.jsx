import React, { useState } from 'react'
// import PaperFormContainer from './paper_form_container'
import PaperIndexItem from './paper_index_item'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';



const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle,
  background: isDragging ? 'lightgreen' : 'white',    
});

class PaperIndex extends React.Component{
  

  render(){
    const { papers, list_id, openModal } = this.props

    if (!papers) return null    


    let organizedPapers = []; 
    this.props.list.paper_order.forEach(paperId => {
        if (papers[paperId]){
          if (papers[paperId].list_id === this.props.list_id){
            organizedPapers.push(papers[paperId])
          }
        }
    })

    return(
      <Droppable droppableId={(list_id).toString()}
              type="paper">
              {(provided) => (
                <div className="paper-index-container"
                    {...provided.droppableProps} ref={provided.innerRef}>

                  {organizedPapers.map((paper, i) => {
                      return (
                        <Draggable key={paper.id} draggableId={(paper.id).toString()} index={i}>
                          {(provided, snapshot) => (
                            <div className='paper-wrapper' 
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef} 
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div className='paper-item'>
                                <PaperIndexItem
                                  paper={paper}
                                  listId={list_id}
                                  deletePaper={this.props.deletePaper}
                                  openModal={openModal}
                                  />
                              </div>      
                            </div>
                          )}
                        </Draggable>
                      )
                  })}
                  {provided.placeholder}
                </div>
              )}
      </Droppable >
    )
  }
}

export default PaperIndex