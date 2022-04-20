import React from 'react';


class EditList extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.list

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateList(this.state)
    let lists = document.getElementsByClassName('udate-list-container')
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
            value={this.state?.title || ""}
            onChange={this.update('title')}
            className='list-edit-input'
            placeholder='Update title'
          />
          <button>Update</button>
      </form>
    )
  }
}
export default EditList