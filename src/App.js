import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import TennisClubSignup from "./TennisClubSignUp/TennisClubSignup";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/registerTennisClub" exact component={TennisClubSignup} />
      </BrowserRouter>
    );
  }
}

export default App;
