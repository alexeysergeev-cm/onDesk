import React from "react";
import PaperIndex from "../papers/paper_index_container";
import PaperForm from "../papers/paper_form_container";
import ListEditContainer from "./list_edit_container";

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };

    this.handleClick = this.handleClick.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.titleUpdate = this.titleUpdate.bind(this);
  }

  handleClick(e) {
    e.currentTarget.style.display = "none";
    e.currentTarget.parentElement.lastElementChild.style.display = "block";
    let forms = document.getElementsByClassName("paper-form");
    for (let item of forms) {
      if (item.style.display === "block") {
        item.firstChild.firstChild.firstChild.firstChild.focus();
      }
    }
  }

  setEditing(bool) {
    this.setState({ isEditing: bool });
  }
  //---titleUpdate
  titleUpdate(e) {
    this.setEditing(true);
    //find children or parents to manipulate DOM
    e.target.offsetParent.offsetParent.firstChild.style.display = "none";
    e.target.offsetParent.offsetParent.lastChild.style.display = "none";
    e.target.parentNode.parentElement.parentElement.children[1].style.display =
      "flex";
    e.target.parentNode.parentElement.parentElement.children[1].firstElementChild.firstChild.focus();
  }

  render() {
    const { title, id } = this.props.list;
    const { updateList, desk } = this.props;

    return (
      <>
        <div className="list-title-cont">
          <div className="list-title">{title}</div>
          <div className="udate-list-container">
            {this.state.isEditing && (
              <ListEditContainer
                list={this.props.list}
                setEditing={this.setEditing}
              />
            )}
          </div>
          <div className="list-extras">
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            <div className="delete-list">
              <h5>List Actions</h5>
              <hr className="Solid" />
              <div onClick={this.titleUpdate}>Update Title</div>
              <div onClick={() => this.props.deleteList(id)}>Delete List</div>
            </div>
          </div>
        </div>
        <PaperIndex
          list_id={id}
          updateList={updateList}
          list={this.props.list}
          desk={desk}
        />
        <div className="open-paper-composer">
          <span className="paper-new-click" onClick={this.handleClick}>
            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
            Add a paper
          </span>
          <div className="paper-form">
            {/* {form} */}
            <PaperForm listId={id} list={this.props.list} />
          </div>
        </div>
      </>
    );
  }
}

export default ListIndexItem;
