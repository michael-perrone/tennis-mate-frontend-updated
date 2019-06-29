import React from "react";
import styles from "./LoginScreen.module.css";
import Title from "./SloganTitle/Title";
import LoginScreenRightSide from "./LoginScreenRightSide/LoginScreenRightSide";
import Captions from "./Captions/Captions";

class LoginScreen extends React.Component {
  render() {
    return (
      <div id={styles.loginScreenContainer}>
        <div id={styles.loginScreenLeftSide}>
          <Captions />
          <Title />
        </div>
        <LoginScreenRightSide />
      </div>
    );
  }
}

export default LoginScreen;
