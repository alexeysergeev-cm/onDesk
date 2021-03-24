import React from 'react'
// import PaperFormContainer from './paper_form_container'
import PaperIndexItem from './paper_index_item'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';

class PaperIndex extends React.Component{

  render(){
    const { papers, list_id, openModal } = this.props
    if (!papers) return null

    let organizedPapers = []; 
    this.props.papers.forEach(paper => {
      if (paper.list_id === list_id){
        organizedPapers.push(paper)
      }
    })

    return(
      <DragDropContext>
        <div className="paper-index-container">
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
              </ul>
            )}
          </Droppable >
        </div>
      </DragDropContext>
    )
  }
}

export default PaperIndex