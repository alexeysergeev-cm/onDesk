import React from "react";
import DeskIndexItem from "./desk_index_item";
import { Link } from "react-router-dom";
import HomePageMenu from "../home_page_menu/home_page_menu";
import classNames from "classnames";
class DeskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoadedPictures: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = url;

        loadImg.onload = () => resolve(url);
        loadImg.onerror = (err) => reject(err);
      });
    };

    this.props
      .fetchDesks()
      .then(() => this.setState({ projects: this.props.desks }))
      .then(() => {
        Promise.all(
          this.state.projects.map((proj) => loadImage(proj.background_picture))
        )
          .then(() => this.setState({ isLoadedPictures: true }))
          .catch((err) => console.log("Failed to load images", err));
      });
  }

  handleClick(targetProjects) {
    let currUserId = this.props.currentUserId;

    let projects = [];
    if (targetProjects === "Created By You") {
      this.props.desks.forEach((desk) => {
        if (desk.author_id === currUserId) {
          projects.push(desk);
        }
      });
    } else if (targetProjects === "Shared With You") {
      this.props.desks.forEach((desk) => {
        if (desk.author_id !== currUserId) {
          projects.push(desk);
        }
      });
    } else {
      projects = this.props.desks;
    }

    this.setState({ projects: projects });
  }

  render() {
    const { desks } = this.props;

    if (!desks) return null;

    return (
      <div className="home-container">
        <div className="home-sticky-container">
          <nav className="home-left-sidebar">
            <HomePageMenu handleClick={this.handleClick} />
          </nav>
          <div
            className={classNames("desk-page", {
              "is-loading": !this.state.isLoadedPictures,
            })}
          >
            {this.state.isLoadedPictures ? (
              this.state.projects.map((desk) => (
                <Link key={desk.id} to={`/${desk.id}/deskshow`}>
                  <span
                    className="desk-tile"
                    style={{
                      backgroundImage: `url(${desk.background_picture})`,
                    }}
                  >
                    <div className="desk-tile-details">
                      <DeskIndexItem desk={desk} />
                    </div>
                  </span>
                </Link>
              ))
            ) : (
              <progress className="progress is-small is-link" max="100">
                60%
              </progress>
            )}
          </div>
        </div>
        <footer id="main-footer">
          <div>Developed by</div>
          <div>Alexey Sergeev</div>
        </footer>
      </div>
    );
  }
}

export default DeskIndex;
