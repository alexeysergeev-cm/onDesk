import React from 'react';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'


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
    this.demoUser = this.demoUser.bind(this)
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

  //questionable function :( ?
  removeErr(){
    let $errField = document.getElementsByClassName('session-errors err-on')
    // debugger
    $errField[0].classList.remove('err-on') 
    // debugger
  }

  demoUser(e){
    e.preventDefault()
    this.props.demoUser({email: 'tori@io.com', password: '123456'})
      .then(() => this.setState({ redirect: true }))
      // this.props.history.push('/')
  }

  render(){
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/' />;
    }
    // debugger
    const errors = Object.values(this.props.errors).map((err, i) =>(
      err
    ))

    if (errors[0] instanceof Array === false) {
      let $errField = document.getElementsByClassName('session-errors');
      if (errors[0].includes('another')){
        $errField[0].classList.remove('err-on');
      } else {
        $errField[0].classList.add('err-on')
      }
      if ($errField.length >= 1) {
        if ($errField[0].innerText !== "Email already in use by another account. You can use ") {
          $errField[0].classList.add('err-on')
        }
      } 
    }
    

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
          <h6>By signing up, you confirm that you've read and accepted our <a className='a' href="#">Terms of Service</a> and <a className='a' href="#">Privacy Policy.</a></h6>
          <button className='acc-btn' onClick={this.handleClick} >Continue</button>

          <hr className="solid" />
          <Link className='hr' to='/login'>Already have an account? Log In</Link>
        </form>
      </div>)
    } else if (this.state.formChange === 'Sign Up') {
      form = (<div className='session-form blue'>
        <form onSubmit={this.handleSubmit}>
          <div as='p' className='session-errors ' id="signup">{errors} 
          <Link onClick={this.removeErr} to="/login">log in</Link></div>
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
          <h6> By signing up, I accept the Atlassian <a className='a' href="">Cloud Terms of Service</a> and acknowledge the <a className='a' href="">Privacy Policy</a>.</h6>
          <button className='acc-btn blue'>{this.state.formChange}</button>

          <hr className="solid" />
          <Link className='hr' to='/login'>Already have an account? Log In</Link>
        </form>
      </div>)
    } else {
      let formType = this.props.formType.split(' ')[0] + ' ' + this.props.formType.split(' ')[1].toLowerCase()
      // debugger
        form = (<div className='session-form'>
        <form onSubmit={this.handleSubmit}>
        <div as='p' className='session-errors'>{errors}</div>
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

          <hr className="solid" />
          <Link className='hr' to='/signup'>Sign up for an account</Link>
          <p>or</p>
          <button onClick={this.demoUser}>Demo User</button>
          {/* <Link to onClick={this.demoUser}>Demo User</h2> ///?????? */}
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