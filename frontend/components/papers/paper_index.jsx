import React from 'react'
// import PaperFormContainer from './paper_form_container'
import PaperIndexItem from './paper_index_item'


class PaperIndex extends React.Component{

  render(){
    const { papers, list_id } = this.props
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
          <div className='paper-wrapper'>
            <div className='paper-item'>
              <PaperIndexItem
                paper={paper}
                key={paper.id}
                // deleteList={this.props.deleteList}
                />
            </div>      
          </div>
        ))}
        {/* <PaperFormContainer /> */}
      </div>
    )
  }
}

export default PaperIndex