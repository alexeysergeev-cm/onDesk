import React from 'react';

class EditDesk extends React.Component{
  constructor(props){
    super(props)
  }


  componentDidMount(){
    this.props.fetchDesk(this.props.match.params.deskId)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  render(){

    const { desk, formType, submitEvent } = this.props;
    if (!desk) return null;

    return(
      <div className='update-desk-container'>
        <input type="text"
          value={this.state.title}
          onChange={this.update('title')}
          className='desk-input'
          placeholder="Update title"
        />
      </div>
    )
  }
}

export default EditDesk;