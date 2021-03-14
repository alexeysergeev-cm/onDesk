import React from 'react';


class EditList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      id: this.props.listId,
      desk_id: this.props.deskId,
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
    this.props.submitList(this.state)
    let lists = document.getElementsByClassName('edit-l-title')
    for (let item of lists){
      if (item.style.display === 'flex'){
        item.style.display = 'none'
        item.parentElement.firstChild.style.display = 'flex'
      }
    }
  }

  render(e){
    
    let input = document.getElementsByClassName('list-edit-input')[0]
    if (input !== undefined) {
      document.getElementsByTagName('body')[0]
      .addEventListener('click', (e) => {
        if (e.currentTarget !== input)
          this.handleSubmit(e)
        })
    }

    return(
      <form>
        <input type='text'
            value={this.state.title}
            onChange={this.update('title')}
            className='list-edit-input'
            placeholder='Update title'
          />
      </form>
    )
  }
}
export default EditList