import React from 'react';

class EditDesk extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      id: "" 
        // || desk.id 
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
      .then(() => this.props.history.push(`/${this.state.id}/deskshow`))
  }


  render(){
    // const { desk, formType, submitEvent } = this.props;
    // if (!desk) return null;
    debugger
    return(
      <form onSubmit={this.handleSubmit}>
        <div className='update-desk-container'>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className='desk-input'
            placeholder="Update title"
          />
        </div>
      </form>
    )
  }
}

export default EditDesk;