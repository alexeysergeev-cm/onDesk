import React from 'react';

class CreateAcc extends React.Component{

  render(){
    return (

    <div className='session-form'>
      <form onSubmit={this.handleSubmit}>
        <h2>Sign up for you account</h2>
        <input type="text" value={this.state.email}
          className='form-field'
          placeholder="Enter email"
          onChange={this.update('email')}
        />
        <input type="text" value={this.state.username}
          className='form-field'
          placeholder="Enter username"
          onChange={this.update('username')}
        />
        <input type="password" className='form-field'
          placeholder="Enter password"
          onChange={this.update('password')}
        />
        <h6> By signing up, I accept the Atlassian <a href="">Cloud Terms of Service</a> and acknowledge the <a href="">Privacy Policy</a>.</h6>
        <button className='acc-btn blue'>{this.state.formChange}</button>
      </form>
    </div>
    )
  }
}

export default CreateAcc; 