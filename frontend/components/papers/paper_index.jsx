import React from 'react'
// import PaperFormContainer from './paper_form_container'
import PaperIndexItem from './paper_index_item'


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
      <div className="paper-index-container">
        {organizedPapers.map(paper => (
          <div key={paper.id} className='paper-wrapper'>
            <div className='paper-item'>
              <PaperIndexItem
                paper={paper}
                listId={list_id}
                deletePaper={this.props.deletePaper}
                openModal={openModal}
                />
            </div>      
          </div>
        ))}
      </div>
    )
  }
}

export default PaperIndex