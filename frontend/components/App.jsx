import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "../components/sessions/login_form_container";
import SignupFormContainer from "../components/sessions/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Home from "./nav_bar/home/home";
import DeskIndexContainer from "../components/desks/desk_index_container";
import DeskShowContainer from "./desk_show/desk_show_container";
import ModalBaseContainer from "./modal/modalBaseContainer";

const App = () => (
  <div className="document-container">
    <Route exact path="/">
      <Home />
    </Route>
    <ProtectedRoute exact path="/" component={DeskIndexContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/:deskId/deskshow" component={DeskShowContainer} />
    <ModalBaseContainer />
  </div>
);

export default App;
