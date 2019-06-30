import React from "react";
import styles from "./LoginScreen.module.css";
import Title from "./Title/Title";
import LoginScreenRightSide from "./LoginScreenRightSide/LoginScreenRightSide";
import Captions from "./Captions/Captions";
import Login from "./Login/Login";

class LoginScreen extends React.Component {
  render() {
    return (
      <div id={styles.loginScreenContainer}>
        <div id={styles.loginScreenLeftSide}>
          <Login />
          <Captions />
          <Title />
        </div>
        <LoginScreenRightSide />
      </div>
    );
  }
}

export default LoginScreen;
