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

  handleSubmit(e){
    e.preventDefault();

  }

  handleInputChange(field){
    return event => this.setState({ [field]: event.currentTarget.value})
  };

  // componentWillMount() {
  //   this.props.fetchUser(this.state.query);
  // }
  
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
        </form>
        <button className='acc-btn'>Invite</button>
      </div>
    )
  }

}

export default Search;