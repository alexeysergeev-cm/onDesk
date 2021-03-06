import React from 'react';
import { withRouter } from 'react-router-dom'



class ListForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      desk_id: this.props.deskId,
      author_id: this.props.currentUserId
    }

    this.update = this.update.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }


  handleSubmit(e){
    e.preventDefault()
    let g = 'created'
    let desk = this.props.desk

    this.props.createList(this.state)
    .then((newList) => {
        this.props.updateDesk({
                id: this.props.deskId,
                list_order: desk.list_order.concat([newList.list.id.toString()])
            })
      })
      .then(() => this.handleClick(g))
      .then(() => this.setState({title: ''}))
  }

  handleClick(e){
    let clicked = document.getElementsByClassName('list-new-click')
    let form = document.getElementsByClassName('list-form')
    if (e === 'created' || e.currentTarget.className === 'fa fa-window-close-o'){
      clicked[0].style.display = "block"
      form[0].style.display = "none"
    } else {
      clicked[0].style.display = "none"
      form[0].style.display = "block"
      document.getElementsByClassName('list-form-input')[0].focus()
    }
  }

  render(){

    let form = <form onSubmit={this.handleSubmit}>
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="list-form-input"
                  placeholder="Enter list title..."
                />
                <button>Add List</button>
                <i className="fa fa-window-close-o" aria-hidden="true" onClick={this.handleClick}></i>
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