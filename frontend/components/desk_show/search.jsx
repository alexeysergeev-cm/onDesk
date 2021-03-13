import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      query: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    let newMemberId;
    this.props.fetchUser(this.state.query)
    .then(() => Object.values(this.props.users).forEach(obj => { 
      
      if (obj.email == this.state.query) newMemberId = obj.id 
      // debugger
    }))
    .then(() => this.props.createMembership({ user_id: newMemberId, desk_id: this.props.deskId }))

    setTimeout(() => (this.props.clearMessage(), this.props.clearErrors()), 3000)

  }

  handleInputChange(field){
    return event => this.setState({ [field]: event.currentTarget.value})
  };
  
  render(){
    const { errors, message, membershipErr } = this.props

    let error = errors[0] || membershipErr[0];

    if (errors.length && !message){
      let $error = document.getElementsByClassName('invite-errors')
      $error[0].classList.add('err-on')
    } else if (message) {
      let $error = document.getElementsByClassName('invite-errors')
      $error[0].classList.remove('err-on')
      let $success = document.getElementsByClassName('invite-success')
      $success[0].classList.add('suc-on')
    } else if (membershipErr.length){
      let $error = document.getElementsByClassName('invite-errors')
      $error[0].classList.add('err-on')
    }

    return(
      <div className="searchForm">
        <form onSubmit={this.handleSubmit}>
          <input
            className='invite-input'
            placeholder="Email address"
            value={this.state.query}
            onChange={this.handleInputChange('query')}
          />
        <button className='invite-acc-btn'>Invite</button>
        </form>
            <hr className="Solid" />
        <div className='render-result'>
          <div className='invite-errors'>
            {error}
          </div>
          <div className='invite-success'>
            {message}
          </div>
        </div>
      </div>
    )
  }

}

export default Search;