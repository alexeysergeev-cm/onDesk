import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";

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

    document.getElementsByClassName("btn-logout")[0].classList.remove("active");
  }

  showSearchBar() {
    document.querySelector(".search-bar").firstChild.focus();
  }

  componentDidMount() {
    if (this.props.photoUrl) {
      $($(".btn-logout"))[0].firstChild.remove();
      $(
        $(".btn-logout")
      )[0].style.backgroundImage = `url(${this.props.photoUrl})`;
    }
  }

  componentDidUpdate() {
    if ($($(".btn-logout"))[0].firstChild.tagName === "DIV") {
      $($(".btn-logout"))[0].firstChild.remove();
      $(
        $(".btn-logout")
      )[0].style.backgroundImage = `url(${this.props.photoUrl})`;
    } else {
      $(
        $(".btn-logout")
      )[0].style.backgroundImage = `url(${this.props.photoUrl})`;
    }
  }

  render() {
    const { logout, currentUser, email, openModal } = this.props;
    let welcome;
    let name;

    if (currentUser) {
      let splitName = currentUser.username.split(" ")[0];
      name = splitName[0].toUpperCase() + splitName.slice(1).toLowerCase();

      welcome = (
        <div className="btn-logout-home">
          <button
            className="btn-logout"
            style={{ backgroundColor: this.props.currentUser.color }}
            onClick={this.clickDropDown}
          >
            <div onClick={this.clickDropDown}>{name[0]}</div>
            <ul className="home-dropdown">
              <li style={{ fontWeight: "600" }}>Welcome {name}</li>
              <i className="fa fa-times" onClick={this.closeMenu}></i>
              <li className="shadowed-text">{currentUser.email}</li>
              <hr className="Solid" />
              <form onSubmit={this.updatePhoto} className="add-photo">
                <label>Choose profile picture</label>
                <input type="file" onChange={this.handleFile} />
                <input type="submit" value="Submit Picture" />
              </form>
              <hr className="Solid" />
              <li style={{ border: "1px solid black", padding: "8px 0" }}>
                Settings (coming soon)
              </li>
              <hr className="Solid" />
              <li onClick={() => logout()}>Log Out</li>
            </ul>
          </button>
        </div>
      );
    }

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
              <a href="/" className="all-desks-link">
                {" "}
                <i className="fa fa-window-restore" aria-hidden="true"></i>All
                Desks
              </a>
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
              <a
                className="btn btn-create"
                onClick={() => openModal(["Create Desk", defaultBackground])}
              >
                Create
              </a>
              {welcome}
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Greeting;
