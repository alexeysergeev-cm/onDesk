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
      form = (<div>
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
      </div>)
    }
    

    return(
      <>  
        <div className='session-form'>
          <h2>{this.props.formType}</h2>
          <form onSubmit={this.handleSubmit}>
            {form}
            <button>{this.props.formType}</button>
          </form>
        </div>
      </>
    )
  }
}

export default SessionForm;