import React from 'react';

class EditDesk extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      id: this.props.deskId,
      author_id: this.props.currUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
  }


  // componentDidMount(){
  //   this.props.fetchDesk(this.props.match.params.deskId)
  // }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitDesk(this.state)

    let deskTitle = document.getElementsByClassName('desk-title');
    let updateForm = document.getElementsByClassName('udate-form-container');
    deskTitle[0].classList.remove('hide')
    updateForm[0].classList.remove('show')

    setTimeout(() => this.props.clearErrors(), 5000)
  }


  render(){
    // const { desk, formType, submitEvent } = this.props;
    // if (!desk) return null;
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