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

    // this.update = this.update.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }


  render(){


    return(
      // <form onSubmit={this.handleSubmit}>
      //   <input type="text"
      //     value={this.state.title}
      //     onChange={this.update('title')}
      //     className="list-form-input"
      //     placeholder="Enter list title..."
      //   />
      //   <button>Add List</button>
      //   <i className="fa fa-window-close-o" aria-hidden="true" onClick={this.handleClick}></i>
      // </form>
      <div>hello</div>
    )
  }
}

export default PaperForm