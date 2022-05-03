import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/session_actions";
// import landing1 from "../../../app/assets/images/landing1.png";
// import landing2 from "../../../app/assets/images/landing2.png";

function NavBar(props) {
  const { currentUser, logout } = props;
  const dispatch = useDispatch();

  const tryDemo = () => {
    const user = { email: "tori@io.com", password: "123456" };
    dispatch(login(user));
  }
  
  const display = (
    <div>
      <div className="btn btn-sm is-demo" onClick={tryDemo}>
        Demo User
      </div>
      <Link className="btn btn-sm" to="/login">
        Log In
      </Link>
      <Link className="btn btn-bg" to="/signup">
        Sign Up
      </Link>
    </div>
  );

  return (
    <header className="home-home">
      <div className="fixed-top">
        <nav className="nav-bar">
          <a className="float-left">
            <img src={window.logo} className="nav-bar-logo" />
            <div>onDesk</div>
          </a>
          <div className="float-right">{display}</div>
        </nav>
      </div>
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="intro-text-big">
            onDesk helps teams work more collaboratively and get more done.
          </h1>
          <p className="lead">
            onDesk’s desks, lists, and papers enable teams to organize and
            prioritize projects in a fun, flexible, and rewarding way.
          </p>
        </div>
        <div className="image-holder">
          <img
            className="img-trello"
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
          />
          {/* <img className="img-trello" src={landing1} alt="landing1" /> */}
          {/* <img src={landing2} alt="landing2" /> */}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
