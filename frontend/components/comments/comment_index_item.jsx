import React from 'react';

class CommentIndexItem extends React.Component{

  render(){
    return(
      <div className='comment-item'>
        <div className="comment-author">
          {this.props.comment.username}
        </div>
        <div className='comment-body'>
          {this.props.comment.body}
        </div>
      </div>
    )
  }
}


export default CommentIndexItem;