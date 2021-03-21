import React from 'react';


class EditPaper extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      id: this.props.paperId,
      list_id: this.props.listId,
      author_id: this.props.currUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.updatePaper(this.state)
    let lists = document.getElementsByClassName('paper-edit-container')
    for (let item of lists){
      if (item.style.display === 'flex'){
        item.style.display = 'none'
        item.parentElement.firstChild.style.display = 'flex'
        item.parentElement.lastChild.style.display = 'flex'
      }
    }
  }

  render(e){

    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text'
            value={this.state.title}
            onChange={this.update('title')}
            className='paper-edit-input'
            placeholder='Update title'
          />
          <button>Update</button>
      </form>
    )
  }
}
export default EditPaper