import React from 'react'

class PaperForm extends React.Component{
  constructor(props){
    super(props)
    super(props)
    this.state = {
      title: '',
      desk_id: '',
      author_id: this.props.currentUserId
    }

    this.update = this.update.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleClick(e){
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.lastChild.style.display = 'none'
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.firstChild.style.display = 'flex'
    // debugger
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const deskId = parseInt(this.props.deskId)
    let g = 'created'

    this.setState({desk_id: deskId}, function(){
      this.props.createList(this.state)
        .then(() => this.handleClick(g))
        .then(() => this.setState({title: ''}))
    })
  }

  render(){

    return(
      <div className='p-form'>
        <form onSubmit={this.handleSubmit}>
          <div className="paper-form-input">
            <input type="text"
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="Enter a title for this paper..."
            />

          </div>
          <button className="paper-btn">Add a paper</button>
          <i className="fa fa-window-close-o" aria-hidden="true" onClick={this.handleClick}></i>
        </form>
      </div>
    )
  }
}

export default PaperForm