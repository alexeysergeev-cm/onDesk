import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";
import { withRouter } from "react-router-dom";
import "./greeting.scss";
import LogOutButton from "../logout_button/logOutButton";
import DeskFormModal from "../modal/deskFormModal/deskFormModal";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
    };

    this.clickDropDown = this.clickDropDown.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);

    this.handleFile = this.handleFile.bind(this);
    this.showSearchBar = this.showSearchBar.bind(this);
  }

  clickDropDown(e) {
    if (
      e.target.classList.value === "btn-logout" ||
      e.target.parentElement.className === "btn-logout"
    ) {
      const $drop = document.getElementsByClassName("btn-logout");
      $drop[0].classList.toggle("active");
    }
  }

  closeMenu(e) {
    if (e.target.offsetParent.className === "home-dropdown") {
      document
        .getElementsByClassName("btn-logout")[0]
        .classList.remove("active");
    }
  }

  handleFile(e) {
    this.setState({ photoFile: e.target.files[0] });
  }

  updatePhoto(e) {
    e.preventDefault();

    let formData = new FormData();
    if (this.state.photoFile) {
      formData.append("user[photo]", this.state.photoFile);
    }

    $.ajax({
      url: `/api/users/${this.props.currentUser.id}`,
      method: "PATCH",
      data: formData,
      contentType: false,
      processData: false,
    }).then((updatedUser) => {
      this.props.updateUser(updatedUser);
    });
  }

  showSearchBar() {
    document.querySelector(".search-bar").firstChild.focus();
  }

  render() {
    const { history } = this.props;
    const { logout, currentUser, openModal, defaultBackground } =
      this.props;
    // const defaultBackgroundPics = defaultBackground.map(b => b.props.src)

    return (
      <>
        <header className="fixed-top-home">
          <nav className="nav-bar-home loggedIn">
            <div className="float-left-home">
              <div
                className="button is-info is-small all-desk-btn"
                onClick={() => history.push("/")}
              >
                <i className="fa fa-window-restore" aria-hidden="true"></i>
                <div className="all-desk-text">AllDesks</div>
              </div>
              <div className="search" onClick={this.showSearchBar}>
                <i className="fa fa-search"></i>
              </div>
              <div className="search-bar">
                <SearchBar />
              </div>
            </div>
            <a href="/" className="h3-home-a">
              <img src={window.logo} className="nav-bar-logo home-logo" />
              <h3 className="h3-home">onDesk</h3>
            </a>
            <div className="float-right-home">
              <div
                className="button is-info is-small create-btn"
                onClick={() =>
                  openModal(
                    <DeskFormModal defaultBackground={defaultBackground} />
                  )
                }
              >
                <div className="create-desk-text">Create</div>
              </div>
              <LogOutButton
                currentUser={currentUser}
                logout={logout}
                updatePhoto={this.updatePhoto}
                handlePhotoFile={this.handleFile}
              />
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default withRouter(Greeting);
