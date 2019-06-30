import React from "react";
import UserRegisterForm from "./UserRegisterForm/UserRegisterForm";
import styles from "./LoginScreenRightSide.module.css";
import ClubSignUp from "./ClubSignUp/ClubSignUp";

class LoginScreenRightSide extends React.Component {
  render() {
    return (
      <div id={styles.rightSideContainer}>
        <UserRegisterForm />
        <ClubSignUp />
      </div>
    );
  }
}

export default LoginScreenRightSide;
