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
      formChange: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleClick(){
    this.setState({
      formChange: 'Sign Up'
    })
    return < Redirect to='/signup' />;
  };

  handleSubmit(e){
    e.preventDefault()
    this.props.processForm(this.state)
      .then(() => this.setState({ redirect: true }))

  }


  render(){
    const { redirect } = this.state;


    if (redirect) {
      return <Redirect to='/' />;
    }
    debugger
    const errors = Object.values(this.props.errors).map((err, i) =>(
      <h1 key={i}>{err}</h1>
    ))

    let form; 
    if (this.props.formType === 'Create Acc' && !this.state.formChange){
      form = (<div className='session-form'> 
        <form>
          <h1>Sign up for you account</h1>
          <input type="email" value={this.state.email}
            className='form-field inner-section'
              placeholder="Enter email"
            onChange={this.update('email')}
          />
          <h6>By signing up, you confirm that you've read and accepted our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></h6>
          <button className='acc-btn' onClick={this.handleClick} >Continue</button>
        </form>
      </div>)
    } else if (this.state.formChange === 'Sign Up') {
      form = (<div className='session-form blue'>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign up for you account</h1>
          <input type="email" value={this.state.email}
            className='form-field inner-section'
            placeholder="Enter email"
            onChange={this.update('email')}
          />
          <input type="text" value={this.state.username}
            className='form-field inner-section'
            placeholder="Enter username"
            onChange={this.update('username')}
          />
          <input type="password" className='form-field inner-section'
            placeholder="Enter password"
            onChange={this.update('password')}
          />
          <h6> By signing up, I accept the Atlassian <a href="">Cloud Terms of Service</a> and acknowledge the <a href="">Privacy Policy</a>.</h6>
          <button className='acc-btn blue'>{this.state.formChange}</button>
        </form>
      </div>)
    } else {
      let formType = this.props.formType.split(' ')[0] + ' ' + this.props.formType.split(' ')[1].toLowerCase()
      // debugger
      form = (<div className='session-form'>
        <form onSubmit={this.handleSubmit}>
        <h1>{formType} to onDesk</h1>
            <input type="email" value={this.state.email}
            className='form-field inner-section'
              placeholder="Enter email"
              onChange={this.update('email')}
            />
          <input type="password" className='form-field inner-section'
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
          {errors}
          {form}
      </div>
    )
  }
}

export default SessionForm;