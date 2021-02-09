import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: '',
      password: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.processForm(this.state)
  }


  render(){
    return(
      <>  
        <div className='session-form'>
          <h2>{this.props.formType}</h2>
          <form onSubmit={handleSubmit}>
            <label>Username
              <input type="text" value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <label>Email
              <input type="text" value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <label>Username
              <input type="password" value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <button>{this.props.formType}</button>
          </form>
        </div>
      </>
    )
  }
}