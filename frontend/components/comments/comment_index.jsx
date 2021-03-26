import React from 'react'
import CommentIndexItem from './comment_index_item';
import CommentForm from './comment_form'

class CommentIndex extends React.Component{


  render(){
    const { paperId, authorId, comments, 
      createComment, updateComment, deleteComment } = this.props

    return(
      <div className='comments-container'>
        <h1 className='activ'>
          <i className="fa fa-comments-o" aria-hidden="true"></i>
          Activity
        </h1>
        <CommentForm 
            paperId={paperId}
            authorId={authorId}
            createComment={createComment}
        />
        <div className='comments-box'>
          {Object.values(comments).reverse().map((comment, i) => {
            if (comment.paper_id === paperId){
              return(
                <div key={comment.id}>
                  <CommentIndexItem 
                        comment={comment}
                        authorId={authorId}
                        updateComment={updateComment}
                        deleteComment={deleteComment}
                  />
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default CommentIndex;