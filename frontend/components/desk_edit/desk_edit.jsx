import React from 'react';

class EditDesk extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitDesk({
      title: this.state.title, 
      id: this.props.deskId
    })
    .then(this.setState({title: ''}))

    let deskTitle = document.getElementsByClassName('desk-title');
    let updateForm = document.getElementsByClassName('udate-form-container');
    deskTitle[0].classList.remove('hide')
    updateForm[0].classList.remove('show')

    setTimeout(() => this.props.clearErrors(), 5000)
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className='update-desk-container show'>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className='desk-edit-input'
            placeholder="Update title"
          />
        </div>
        <div className='edit-btn-container'>
          <button className='edit-submit'>Update</button>
        </div>
      </form>
    )
  }
}

export default EditDesk;