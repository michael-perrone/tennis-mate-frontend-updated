import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import TennisClubSignup from "./TennisClubSignUp/TennisClubSignup";
import TennisCourts from "./TennisCourts/TennisCourts";
import TennisClubsList from "./TennisClubsList/TennisClubsList";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/clubs" exact component={TennisClubsList} />
        <Route
          path={`/tennisClub/admin/:clubName`}
          exact
          component={TennisCourts}
        />
        <Route path="/registerTennisClub" exact component={TennisClubSignup} />
      </BrowserRouter>
    );
  }
}

export default App;
