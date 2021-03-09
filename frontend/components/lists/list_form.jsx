import React from 'react';
import { withRouter } from 'react-router-dom'

class ListForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }

    this.update = this.update.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleClick(){

    // debugger
    let clicked = document.getElementsByClassName('list-new-click')
    clicked[0].style.display = "none"
    let form = document.getElementsByClassName('list-form')
    form[0].style.display = "block"
    
  }

  render(){
    const { deskId, currentUserId } = this.props

    let form = <form onSubmit={this.handleSubmit}>
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="list-form-input"
                  placeholder="Enter list title..."
                />
                {/* <input type="submit" className="list-submit" value="Add"/> */}
              </form>

    return(
      <div className="list-form-cont">
        <span className="list-new-click" onClick={this.handleClick}>
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
          Add another list
        </span>        
        <div className="list-form">
          {form}
        </div>
      </div>
    )
  }
  
       
}

export default withRouter(ListForm);