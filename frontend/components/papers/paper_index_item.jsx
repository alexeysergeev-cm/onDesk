import React from 'react';

class PaperIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    const { title, id } = this.props.paper
    return(
      <>
        <div className='single-paper'>
          <div className='paper-title'>
            {title}
          </div>
          <div className='paper-extras'>
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <div className='delete-paper'>
              <h5>Paper Actions</h5>
              <hr className="Solid"/>
              <div onClick={() => this.props.deletePaper(id)}>Delete Paper</div>
            </div>
          </div>
          
        </div>
      </>
    )
  }
}

export default PaperIndexItem;