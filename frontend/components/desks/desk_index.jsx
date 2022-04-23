import React from "react";
import DeskIndexItem from "./desk_index_item";
import { Link } from "react-router-dom";
import HomePageMenu from "../home_page_menu/home_page_menu";
class DeskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchDesks()
      .then((data) => this.setState({ projects: Object.values(data.desks) }));
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
    desks.forEach((desk) => {
      if (!desk.background_picture) {
        desk.background_picture =
          "https://ondesk-dev.s3-us-west-1.amazonaws.com/desert.jpeg";
      }
    });

    if (!desks) return null;

    return (
      <div className="home-container">
        <div className="home-sticky-container">
          <nav className="home-left-sidebar">
            <HomePageMenu handleClick={this.handleClick} />
          </nav>
          <div className="desk-page">
            {this.state.projects.map((desk) => (
              <Link key={desk.id} to={`/${desk.id}/deskshow`}>
                <span
                  className="desk-tile"
                  style={{ backgroundImage: `url(${desk.background_picture})` }}
                >
                  <div className="desk-tile-details">
                    <DeskIndexItem desk={desk} />
                  </div>
                </span>
              </Link>
            ))}
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
