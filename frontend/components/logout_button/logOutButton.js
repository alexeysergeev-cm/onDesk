
function LogOutButton() {

  return (
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

export default LogOutButton;