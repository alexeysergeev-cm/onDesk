import React from "react";
import GreetingContainer from "../greetings/greeting_container";
import DeskEditContainer from "../desk_edit/desk_edit_container";
import ListIndexContainer from "../lists/list_index_container";
import MembersList from "../membersList/membersList";
import classnames from "classnames";
import "./deskShow.scss";
import Invite from "../invite/invite";
import ActionCable from "actioncable";

class DeskShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTitleUpdate: false,
    };

    this.clickDropDown = this.clickDropDown.bind(this);
    this.handleDeleteDesk = this.handleDeleteDesk.bind(this);
    this.setIstitleUpdate = this.setIstitleUpdate.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.cable = ActionCable.createConsumer(process.env.REACT_APP_CABLE_URL);
    this.channel = null;
  }

  componentDidMount() {
    this.props.fetchDesk(this.props.deskId);

    this.channel = this.cable.subscriptions.create(
      { channel: "DeskChannel", desk_id: this.props.deskId },
      {
        received: (data) => {
          switch (data.type) {
            // case "PAPER_ACTION":
            //   this.props.fetchDesk(this.props.deskId);
            //   break;
            // case "DESK_ACTION":
            //   this.props.fetchDesk(data.desk_id);
            //   break;
            // case "LIST_ACTION":
            //   // this.props.fetchDesk(this.props.deskId);
            //   console.log(data)
            //   break;
            default:
              break;
          }
          console.log("in desk show");
        },
      }
    );
  }

  componentWillUnmount() {
    this.channel.unsubscribe();
  }

  componentDidUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.fetchDesk(this.props.deskId);
    }
  }

  setIstitleUpdate(bool) {
    this.setState({ isTitleUpdate: bool });
  }

  clickDropDown(e) {
    if (e.target.innerText === "Show Menu") {
      const $drop = document.getElementById("show-menu");
      $drop.classList.toggle("active");
    }
  }

  handleDeleteDesk() {
    this.props
      .deleteDesk(this.props.deskId)
      .then(() => this.props.history.push("/"));

    setTimeout(() => this.props.clearErrors(), 5000);
  }

  closeMenu(e) {
    if (e.target.offsetParent.className === "menu-dropdown") {
      document.getElementById("show-menu").classList.remove("active");
    }
  }

  render() {
    const { title, deskErr, deskId, currUserId } = this.props;

    //--set background
    let background;
    if (this.props.desk[deskId]) {
      background =
        this.props.desk[deskId].background_picture ||
        "https://ondesk-dev.s3-us-west-1.amazonaws.com/desert.jpeg";
      if (document.getElementsByClassName("desk-show-container")[0]) {
        document.getElementsByClassName(
          "desk-show-container"
        )[0].style.backgroundImage = `url(${background})`;
      }
    }

    //----errors
    let error = deskErr[0];
    if (deskErr.length) {
      let $error = document.getElementsByClassName("desk-errors");
      $error[0].classList.add("err-on");
    }

    //----dropDown Menu
    let menu;
    menu = (
      <div
        className="desk-name-header-btn"
        id="show-menu"
        onClick={this.clickDropDown}
      >
        <span className="icon-list-items"></span>
        <span>Show Menu</span>
        <ul className="menu-dropdown">
          <li>MENU</li>
          <i className="fa fa-times" onClick={this.closeMenu}></i>
          <hr className="Solid" />
          <li>Settings (coming soon)</li>
          <hr className="Solid" />
          <li onClick={this.handleDeleteDesk}>Delete Desk</li>
        </ul>
      </div>
    );

    return (
      <div className="desk-show-container">
        {/* <div className='desk-show-container' style={ { backgroundImage: `url(${background})` } }> */}
        <div className="desk-header-container">
          <GreetingContainer />
        </div>
        <div
          style={{
            width: "100%",
            display: "block",
            position: "absolute",
            top: "40px",
          }}
        >
          <div className="desk-name-header">
            <div className="left-section-desk-name">
              <div className="desk-name-header-btn">
                <div
                  className={classnames("desk-title", {
                    "is-update": this.state.isTitleUpdate,
                  })}
                  onClick={() => this.setIstitleUpdate(true)}
                >
                  {this.state.isTitleUpdate ? (
                    <DeskEditContainer
                      deskId={deskId}
                      currUserId={currUserId}
                      clearErrors={this.props.clearErrors}
                      desk={this.props.desk}
                      titleUpdate={this.setIstitleUpdate}
                    />
                  ) : (
                    title
                  )}
                </div>
              </div>
              <Invite deskId={deskId} />
              <MembersList
                data={this.props.deskMembers}
                membershipIds={this.props.membershipIds}
                currUserId={currUserId}
              />
            </div>
            <div className="right-section-desk-name">{menu}</div>
          </div>
        </div>
        <div className="desk-errors-container">
          <div className="desk-errors">{error}</div>
        </div>
        <ListIndexContainer deskId={deskId} desk={this.props.desk[deskId]} />
      </div>
    );
  }
}

export default DeskShow;
