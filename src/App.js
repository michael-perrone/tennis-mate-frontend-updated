import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import TennisClubSignup from "./TennisClubSignUp/TennisClubSignup";
import TennisClub from "./TennisClub/TennisClub";
import TennisClubsList from "./TennisClubsList/TennisClubsList";
import UserHome from "./UserHome/UserHome";
import AdminHome from "./AdminHome/AdminHome";
import decoder from "jwt-decode";
import InstructorHome from "./InstructorHome/InstructorHome";
import InstructorProfileCreate from "./InstructorHome/InstructorProfileCreate/InstructorProfileCreate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  /* componentWillMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/");
    }
  } */

  render() {
    let token = false;
    let instructorToken = false;
    let adminToken = false;

    if (localStorage.getItem("token")) {
      token = decoder(localStorage.getItem("token"));
    } else if (localStorage.getItem("instructorToken")) {
      instructorToken = decoder(localStorage.getItem("instructorToken"));
    } else if (localStorage.getItem("adminToken")) {
      adminToken = decoder(localStorage.getItem("adminToken"));
    }

    return (
      <Switch>
        <Route path="/clubs" exact component={TennisClubsList} />
        <Route path="/clubs/:clubName" exact component={TennisClub} />
        <Route path="/registerTennisClub" exact component={TennisClubSignup} />
        {instructorToken && (
          <Route
            path={`/instructor/${instructorToken.instructor.id}/createeditprofile`}
            exact
            component={InstructorProfileCreate}
          />
        )}
        {token && (
          <Route path={`/user/${token.user.id}`} exact component={UserHome} />
        )}
        {instructorToken && (
          <Route
            path={`/instructor/${instructorToken.instructor.id}`}
            exact
            component={InstructorHome}
          />
        )}

        {adminToken && (
          <Route
            path={`/admin/${adminToken.admin.id}`}
            exact
            component={AdminHome}
          />
        )}

        <Route
          exact
          path="/"
          render={() => {
            if (instructorToken) {
              return (
                <Redirect to={`/instructor/${instructorToken.instructor.id}`} />
              );
            } else if (token) {
              return <Redirect to={`/user/${token.user.id}`} />;
            } else if (adminToken) {
              return <Redirect to={`/admin/${adminToken.admin.id}`} />;
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
        {adminToken.admin && (
          <Redirect
            from="*"
            to={
              localStorage.getItem("adminToken") !== null
                ? `/admin/${adminToken.admin.id}`
                : `/`
            }
          />
        )}
      </Switch>
    );
  }
}

export default withRouter(App);
