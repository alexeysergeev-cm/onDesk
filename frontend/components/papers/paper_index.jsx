import React, { useState } from 'react'
// import PaperFormContainer from './paper_form_container'
import PaperIndexItem from './paper_index_item'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';

class PaperIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      paperOrder: []
    }
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this)
  }

  componentDidMount(){
    let organizedPapers = []; 
    this.props.papers.forEach(paper => {
      if (paper.list_id === this.props.list_id){
        organizedPapers.push(paper)
      }
    })
    this.setState({paperOrder: organizedPapers})
    // debugger
  }

  handleOnDragEnd(result) {
    // console.log(result)
    // debugger
    const items = this.state.paperOrder;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    this.setState({paperOrder: items})
  }

  render(){
    const { papers, list_id, openModal } = this.props
    if (!papers) return null

    // debugger
    let organizedPapers = []; 
    this.state.paperOrder.forEach(paper => {
      if (paper.list_id === this.props.list_id){
        organizedPapers.push(paper)
      }
    })
    
    

    return(
      <div className="paper-index-container">
        <DragDropContext onDragEnd={this.handleOnDragEnd}>
          <Droppable droppableId={list_id.toString()}>
            {(provided) => (
              <ul className="paper-droppable-container" 
                {...provided.droppableProps} ref={provided.innerRef}>

                {organizedPapers.map((paper, i) => (
                  <Draggable key={paper.id} draggableId={(paper.id).toString()} index={i}>
                    {(provided) => (
                      <div className='paper-wrapper' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable >
        </DragDropContext>
      </div>
    )
  }
}

export default PaperIndex