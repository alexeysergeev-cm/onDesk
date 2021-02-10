import React from 'react';
import { Redirect } from 'react-router'


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: '',
      password: "",
      redirect: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.processForm(this.state)
      .then(() => this.setState({ redirect: true }));
    // <Redirect path='/' />
  }


  render(){
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/' />;
    }

    let form; 
    if (this.props.formType === 'Sign Up'){
      let formType = this.props.formType.split(' ')[0] + ' ' + this.props.formType.split(' ')[1].toLowerCase()
      form = (<div>
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
        <label>Password
              <input type="password" value={this.state.password}
            onChange={this.update('password')}
          />
        </label>
      </div>)
    } else {
      let formType = this.props.formType.split(' ')[0] + ' ' + this.props.formType.split(' ')[1].toLowerCase()
      // debugger
      form = (<div>
        <form onSubmit={this.handleSubmit}>
        <h2>{formType} to onDesk</h2>
          <label>Username
                <input type="text" value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label>Password
                <input type="password" value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <button>{formType}</button>
        </form>
      </div>)
    }
    

    return(
      <div className='session'>  
        <h1 className="logo">onDesk</h1>
        <div className='session-form'>
          {form}
        </div>
      </div>
    )
  }
}

export default SessionForm;