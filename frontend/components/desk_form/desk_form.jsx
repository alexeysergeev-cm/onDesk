import React from 'react';
import { withRouter } from 'react-router-dom'

class DeskForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      background_picture: '', 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
    this.chooseBackground = this.chooseBackground.bind(this)
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

  componentDidMount(){
    let check = $("<i class='fa fa-check' aria-hidden='true'></i>")
    let defaultItem = $('.desk-background').children()[0]
    $(defaultItem).append(check)
  }


  chooseBackground(e){
    let allPics = e.target.parentElement.parentElement.children
    for (let pic of allPics) {
      if (pic.children.length > 1){
        pic.lastElementChild.remove()
      }
    }
    let check = $("<i class='fa fa-check' aria-hidden='true'></i>")
    $(e.target.parentElement).append(check)
    document.getElementsByClassName('desk-form-box')[0].style.backgroundImage = `url(${e.target["currentSrc"]})`
    this.setState({background_picture: e.target["currentSrc"]})
  }



  render(){
    let defaultBackground = [<div><img src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2401x1600/203ad19e43893965eaf4bc367b1c0458/photo-1591567462181-19db8b0fd818.jpg" /></div>,
                            <div><img src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1440x1920/de30dbd911cb5dd88f8130ab68b8119d/photo-1596710216028-6e11b9c1a5e6.jpg" alt=""/></div>,
                            <div><img src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2398x1600/31c25173aff1c30215f1f11dc10c6dde/photo-1528932860067-7e2e27b3185f.jpg" /></div>,
                            <div><img src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1288x1920/5454b070c19ef0cf77c3a2e0ba91e6f9/photo-1552472947-2abd68d0d927.jpg" /></div>,
                            <div><img src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x1920/9d2eead0ddc23a92d7e2e24576363205/photo-1602623056709-8a613a29940c.jpg" /></div>,
                            <div><img src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1536x1920/b567216700fb2072ce3dbc3ec428bd88/photo-1552679699-dafca9d2c58c.jpg" /></div>,
                            <div><img src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/83d0104570a205a798ea33a5c6fcc9e3/photo-1528779794993-d2f7f51a53a4.jpg" /></div>,
                            <div><img src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1536x1920/7fd0c6004a901817109fb465a92a07fd/photo-1552671641-8cbdd17c492e.jpg" /></div>,
                            <div><img src="https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/cosmos/medium.jpg"/></div>]

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
          <div className="desk-background" onClick={this.chooseBackground}>
            {defaultBackground}
          </div>
          <input type="submit" className='desk-submit' value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(DeskForm);