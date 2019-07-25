import React from "react";
import UserRegisterForm from "./UserRegisterForm/UserRegisterForm";
import styles from "./LoginScreenRightSide.module.css";
import ClubSignUpButton from "./ClubSignUp/ClubSignUpButton";
import { connect } from "react-redux";
import InstructorNotes from "./InstructorNotes/InstructorNotes";
import InstructorRegisterForm from "./InstructorRegisterForm/InstructorRegisterForm";
import Alert from "./Alert/Alert";

class LoginScreenRightSide extends React.Component {
  render() {
    return (
      <div id={styles.rightSideContainer}>
        <UserRegisterForm />
        <InstructorRegisterForm />

        {this.props.instructorRegister && <InstructorNotes />}
        {!this.props.instructorRegister && this.props.alerts.length === 0 && (
          <ClubSignUpButton />
        )}
        {!this.props.instructorRegister && this.props.alerts.length > 0 && (
          <Alert />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alerts: state.alert,
    instructorRegister: state.instructorRegister
  };
};

export default connect(mapStateToProps)(LoginScreenRightSide);
