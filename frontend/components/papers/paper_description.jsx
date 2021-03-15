import React from 'react';

class PaperDescription extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: this.props.title,
      id: this.props.paperId,
      description: '',
      list_id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updatePaper(this.state)
      .then(this.props.closeModal)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    // debugger
    return(
      <div className='paper-description'>
        <h1>Description</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea name="description" id="description" cols="40" rows="15" 
                value={this.state.description}
                onChange={this.update('description')}
              ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PaperDescription