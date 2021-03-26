import React from 'react'

class CommentForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      body: '',
      paper_id: this.props.paperId,
      author_id: this.props.authorId
    }

    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault()
    debugger
    this.props.createComment(this.state)
      .then(() => this.setState({body: ''}))
  }

  
  render(){
    return (
      <div className='comment-form'>
        <form onSubmit={this.handleSubmit} className='comment-create'>
          <input type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Write a comment..."
          />
          <button>Add comment</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;