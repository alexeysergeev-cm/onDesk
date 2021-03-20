import React from 'react';

class PaperDescription extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: this.props.title,
      id: this.props.paperId,
      description: this.props.description || '',
      list_id: this.props.listId,
      author_id: this.props.currUserId,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
    this.addDesc = this.addDesc.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updatePaper(this.state)
      .then(this.props.closeModal)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  addDesc(desc){
    this.setState({description: desc})
  }


  render(){
    // const { papers, paperId } = this.props

    // let desc = ''
    // for (let paper of papers){
    //   if (paper.id === paperId){
    //     desc = paper.description
    //   }
    // }


    return(
      <div className='paper-description'>
        <h1>Description</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea name="description" id="description" cols="40" rows="15" 
                value={this.state.description}
                onChange={this.update('description')}
              ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PaperDescription