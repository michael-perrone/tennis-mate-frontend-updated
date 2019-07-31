import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import TennisClubSignup from "./TennisClubSignUp/TennisClubSignup";
import TennisClub from "./TennisClub/TennisClub";
import TennisClubsList from "./TennisClubsList/TennisClubsList";
import UserHome from "./UserHome/UserHome";
import decoder from "jwt-decode";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/");
    }
  }

  render() {
    let token = "";
    if (localStorage.getItem("token")) {
      token = decoder(localStorage.getItem("token"));
    }
    console.log(token);
    return (
      <Switch>
        {token && (
          <Route path={`/user/${token.user.id}`} exact component={UserHome} />
        )}
        <Route path="/clubs" exact component={TennisClubsList} />
        <Route path="/clubs/:clubName" exact component={TennisClub} />
        <Route path="/registerTennisClub" exact component={TennisClubSignup} />
        <Route
          exact
          path="/"
          render={() => {
            if (token) {
              return <Redirect to={`/user/${token.user.id}`} />;
            } else {
              return <Route exact path="/" component={LoginScreen} />;
            }
          }}
        />
        <Redirect
          from="*"
          to={
            localStorage.getItem("token") !== null
              ? `/user/${token.user.id}`
              : `/`
          }
        />
      </Switch>
    );
  }
}

export default withRouter(App);
