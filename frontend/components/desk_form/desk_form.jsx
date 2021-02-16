import React from 'react';
import { withRouter } from 'react-router-dom'

class DeskForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      id: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createDesk(this.state)
      .then(this.props.closeModal)
      .then(() => this.props.history.push(`/${this.props.lastId}/deskshow`))
  }

  update(field){
    let input = document.getElementsByClassName('desk-input')
    if (input.length){
      let b = document.getElementsByClassName('desk-submit')
      if (input[0].value.length > 0) {
        b[0].classList.add('allowed')
      } else {
        b[0].classList.remove('allowed')
      }
    }
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <div className='desk-form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='desk-form-box'>
            <div className='desk-form'>
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className='desk-input'
                  placeholder="Add desk title"
                />
              <div onClick={this.props.closeModal} className="close-x"><i className="fa fa-times"></i></div>
            </div>
          </div>
          <input type="submit" className='desk-submit' value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(DeskForm);