import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import TennisClubSignup from "./TennisClubSignUp/TennisClubSignup";
import TennisClub from "./TennisClub/TennisClub";
import TennisClubsList from "./TennisClubsList/TennisClubsList";
import UserHome from "./UserHome/UserHome";
import decoder from "jwt-decode";
import InstructorHome from "./InstructorHome/InstructorHome";

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
    let token = false;
    let instructorToken = false;

    if (localStorage.getItem("token")) {
      token = decoder(localStorage.getItem("token"));
    } else if (localStorage.getItem("instructorToken")) {
      instructorToken = decoder(localStorage.getItem("instructorToken"));
    }

    console.log(instructorToken.instructor.id);

    return (
      <Switch>
        {token.user && (
          <Route path={`/user/${token.user.id}`} exact component={UserHome} />
        )}
        {instructorToken.instructor.id && (
          <Route
            path={`/instructor/${instructorToken.instructor.id}`}
            exact
            component={InstructorHome}
          />
        )}
        <Route path="/clubs" exact component={TennisClubsList} />
        <Route path="/clubs/:clubName" exact component={TennisClub} />
        <Route path="/registerTennisClub" exact component={TennisClubSignup} />

        <Route
          exact
          path="/"
          render={() => {
            console.log("in render");
            if (instructorToken) {
              console.log("in instructorToken");
              return (
                <Redirect to={`/instructor/${instructorToken.instructor.id}`} />
              );
            } else {
              return <Route exact path="/" component={LoginScreen} />;
            }
          }}
        />

        <Route
          exact
          path="/"
          render={() => {
            if (token) {
              console.log(token.user);
              return <Redirect to={`/user/${token.user.id}`} />;
            } else {
              return <Route exact path="/" component={LoginScreen} />;
            }
          }}
        />

        {instructorToken.instructor && (
          <Redirect
            from="*"
            to={
              localStorage.getItem("instructorToken") !== null
                ? `/instructor/${instructorToken.instructor.id}`
                : `/`
            }
          />
        )}
        {token.user && (
          <Redirect
            from="*"
            to={
              localStorage.getItem("token") !== null
                ? `/user/${token.user.id}`
                : `/`
            }
          />
        )}
      </Switch>
    );
  }
}

export default withRouter(App);
