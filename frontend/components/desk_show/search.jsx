import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      query: "",
      data: [],
      filteredData: []
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    let newMemberId;
    debugger
    this.props.fetchUser(this.state.query)
      // .then(() => this.props.createMembership({ user_id: user.id, desk_id: this.props.deskId }))
      .then(() => Object.values(this.props.users).forEach(obj => { if (obj.email == this.state.query) newMemberId = obj.id }))
      .then(() => this.props.createMembership({ user_id: newMemberId, desk_id: this.props.deskId }))
  }


  handleInputChange(field){
    return event => this.setState({ [field]: event.currentTarget.value})
  };

  
  render(){
    return(
      <div className="searchForm">
        <form onSubmit={this.handleSubmit}>
          <input
            className='invite-input'
            placeholder="Email address"
            value={this.state.query}
            onChange={this.handleInputChange('query')}
          />
        <button className='acc-btn'>Invite</button>
        </form>
      </div>
    )
  }

}

export default Search;