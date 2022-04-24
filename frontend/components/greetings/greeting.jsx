import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";
import { withRouter } from "react-router-dom";
import "./greeting.scss";
import LogOutButton from "../logout_button/logOutButton";
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
    const { location, history } = this.props;

    const { logout, currentUser, email, openModal } = this.props;

    const defaultBackground = [
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/desert.jpeg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/water.jpeg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/space.jpg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/skyscraper.jpeg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/shark.jpeg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/ocean.jpeg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/mountains1.jpeg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/mountains.jpeg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/ggbridge.jpeg" />,
      <img src="https://ondesk-dev.s3-us-west-1.amazonaws.com/forest.jpeg" />,
    ];

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
                onClick={() => openModal(["Create Desk", defaultBackground])}
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
