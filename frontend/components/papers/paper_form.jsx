import React from 'react'

class PaperForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      list_id: this.props.listId,
      author_id: this.props.currentUserId
    }

    this.update = this.update.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleClick(e){
    if (e === 'created'){
      let paperForm = document.getElementsByClassName('paper-form')
      for (let item of paperForm) {
        if (item.style.display === 'block') {
          item.style.display = 'none'
          item.parentElement.firstChild.style.display = 'flex'
        }
      }
    } else {
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.lastChild.style.display = 'none'
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.firstChild.style.display = 'flex'
    }
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault()

    let listLength = e.target.parentElement.parentElement.parentElement.parentElement.children[1].children.length
    let listName = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.innerText
    let listId = this.props.listId

    let list = this.props.list
    let updateList = this.props.updateList
    let g = 'created'
    debugger
    this.props.createPaper(this.state)
      .then((newPaper) => {
          debugger
          updateList({
                  id: listId,
                  paper_order: list.paper_order.concat([newPaper.paper.id.toString()])
              })
        })
      .then(() => this.handleClick(g))
      .then(() => this.setState({title: ''}))
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