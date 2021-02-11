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
      form = (<div className='session-form'> 
        <form onSubmit={this.handleSubmit}>
          <h2>{formType} for you account</h2>
          <input type="text" value={this.state.email}
            className='form-field'
              placeholder="Enter email"
            onChange={this.update('email')}
          />
          <h6>By signing up, you confirm that you've read and accepted our <a href="#">Terms of Service</a> and <a href="http://">Privacy Policy.</a></h6>
          <button className='acc-btn'>Continue</button>
        </form>
      </div>)
    } else {
      let formType = this.props.formType.split(' ')[0] + ' ' + this.props.formType.split(' ')[1].toLowerCase()
      // debugger
      form = (<div className='session-form'>
        <form onSubmit={this.handleSubmit}>
        <h2>{formType} to onDesk</h2>
            <input type="text" value={this.state.email}
              className='form-field'
              placeholder="Enter email"
              onChange={this.update('email')}
            />
            <input type="password" className='form-field'
              placeholder="Enter password"
              onChange={this.update('password')}
            />
          <button className='acc-btn'>{formType}</button>
        </form>
      </div>)
    }
    

    return(
      <div className='session'>  
        <h1 className="logo">onDesk</h1>
          {form}
      </div>
    )
  }
}

export default SessionForm;