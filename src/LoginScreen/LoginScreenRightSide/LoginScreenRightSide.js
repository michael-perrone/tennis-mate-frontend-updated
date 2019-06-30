import React from "react";
import UserRegisterForm from "./UserRegisterForm/UserRegisterForm";
import styles from "./LoginScreenRightSide.module.css";
import ClubSignUp from "./ClubSignUp/ClubSignUp";
import InstructorRegister from "./InstructorRegister/InstructorRegister";

class LoginScreenRightSide extends React.Component {
  render() {
    return (
      <div id={styles.rightSideContainer}>
        <UserRegisterForm />
        <InstructorRegister />
        <ClubSignUp />
      </div>
    );
  }
}

export default LoginScreenRightSide;
