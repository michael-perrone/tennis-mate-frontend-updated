import React from "react";
import UserRegisterForm from "./UserRegisterForm/UserRegisterForm";
import styles from "./LoginScreenRightSide.module.css";
import ClubSignUp from "./ClubSignUp/ClubSignUp";
import { connect } from "react-redux";
import InstructorNotes from "./InstructorNotes/InstructorNotes";
import InstructorRegisterForm from "./InstructorRegisterForm/InstructorRegisterForm";

class LoginScreenRightSide extends React.Component {
  render() {
    return (
      <div id={styles.rightSideContainer}>
        <UserRegisterForm />
        <InstructorRegisterForm />
        {this.props.instructorRegister && <InstructorNotes />}
        {!this.props.instructorRegister && <ClubSignUp />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    instructorRegister: state.instructorRegister
  };
};

export default connect(mapStateToProps)(LoginScreenRightSide);
