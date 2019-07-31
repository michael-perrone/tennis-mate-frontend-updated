import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import TennisClubSignup from "./TennisClubSignUp/TennisClubSignup";
import TennisClub from "./TennisClub/TennisClub";
import TennisClubsList from "./TennisClubsList/TennisClubsList";
import UserProfile from "./UserProfile/UserProfile";
import decoder from "jwt-decode";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  componentWillMount() {
    if (localStorage.getItem("token")) {
      const token = decoder(localStorage.getItem("token"));
      this.setState({ token });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => {
            if (this.state.token !== "") {
              return <Redirect to={`/user/${this.state.token.user.id}`} />;
            }
          }}
        />
        <Route path="/user/:id" exact component={UserProfile} />
        <Route path="/clubs" exact component={TennisClubsList} />
        <Route path="/clubs/:clubName" exact component={TennisClub} />
        <Route path="/registerTennisClub" exact component={TennisClubSignup} />
      </BrowserRouter>
    );
  }
}

export default App;
