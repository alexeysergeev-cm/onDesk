
import { withRouter } from "react-router-dom";

class DeskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      background_picture: "",
      author_id: this.props.currentUserId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.chooseBackground = this.chooseBackground.bind(this);
    this.inputRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createDesk(this.state)
      .then(this.props.closeModal)
      .then(() => this.props.history.push(`/${this.props.lastId}/deskshow`));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  componentDidMount() {
    let check = $("<i class='fa fa-check' aria-hidden='true'></i>");
    let defaultItem = $(".desk-background").children()[0];
    $(defaultItem).append(check);

    this.inputRef.current && this.inputRef.current.focus();
  }

  chooseBackground(e) {
     this.inputRef.current && this.inputRef.current.focus();
    let allPics = e.target.parentElement.parentElement.children;
    for (let pic of allPics) {
      if (pic.children.length > 1) {
        pic.lastElementChild.remove();
      }
    }
    let check = $("<i class='fa fa-check' aria-hidden='true'></i>");
    $(e.target.parentElement).append(check);
    document.getElementsByClassName(
      "desk-form-box"
    )[0].style.backgroundImage = `url(${e.target["currentSrc"]})`;
    this.setState({ background_picture: e.target["currentSrc"] });
  }

  render() {
    const { backgroundPics } = this.props;
    console.log("in FORM", backgroundPics);
    return (
      <div className="desk-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="desk-form-box">
            <div className="desk-form">
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="desk-input"
                placeholder="Add desk title"
                ref={this.inputRef}
              />
              <div onClick={this.props.closeModal} className="close-x">
                <i className="fa fa-times"></i>
              </div>
            </div>
          </div>
          <div className="desk-background" onClick={this.chooseBackground}>
            {backgroundPics.map((pic, i) => (
              <div key={i} className="">
                {pic}
              </div>
            ))}
          </div>
          <div className="button is-success" onClick={this.handleSubmit}>
            Create Desk
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(DeskForm);
