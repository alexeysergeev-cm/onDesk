import React from 'react';
import CommentsIndexContainer from '../comments/comment_index_container'


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
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updatePaper(this.state)
      .then(this.props.closeModal)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <div className='paper-description'>
        <h1>Description</h1>
        <form onSubmit={this.handleSubmit} className='paper-create'>
          <div>
            <textarea name="description" id="description" cols="50" rows="10" 
                value={this.state.description}
                onChange={this.update('description')}
              ></textarea>
          </div>
          <button>Save</button>
        </form>
        <CommentsIndexContainer 
                    paperId={this.props.paperId}
                    authorId={this.props.currUserId}
        />
      </div>
    )
  }
}

export default PaperDescription