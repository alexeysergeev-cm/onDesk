import React from 'react';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.comment.id,
      body: '',
      author_id: this.props.authorId,
    }
    this.updateComment = this.updateComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.updateComment(this.state)
    .then(this.setState({body: ''}))

    e.target.parentElement.parentElement.children[1].style.display = 'block'
    e.target.parentElement.style.display = 'none' 
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  updateComment(e){
    e.target.parentElement.parentElement.children[1].style.display = 'none'
    e.target.parentElement.parentElement.children[2].style.display = 'block'
  }

  render(){

    let updateCom;
    let deleteCom;
    if (this.props.comment.author_id === this.props.authorId){
      updateCom = <div onClick={this.updateComment}>Update</div>
      deleteCom = <div onClick={() => this.props.deleteComment(this.props.comment.id)}>Delete</div>
    } 



    return(
      <div className='comment-item'>
        <div className="comment-author">
          {this.props.comment.username}
          <div className="time">
            {this.props.comment.time}
          </div>
        </div>
        <div className='comment-body'>
          {this.props.comment.body}
        </div>
        <div className='update-comment'>
          <form className='edit-com-form' onSubmit={this.handleSubmit}>
            <input type='text'
                value={this.state.body}
                onChange={this.update('body')}
                className='comment-edit-input'
              />
              <button className='upd-btn'>update</button>
          </form>
        </div>
        <div className='manipulate-comment'>
          {updateCom}
          {deleteCom}
        </div>
      </div>
    )
  }
}


export default CommentIndexItem;