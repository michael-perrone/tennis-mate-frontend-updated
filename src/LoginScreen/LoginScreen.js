import React from "react";
import styles from "./LoginScreen.module.css";
import Title from "./Title/Title";
import LoginScreenRightSide from "./LoginScreenRightSide/LoginScreenRightSide";
import Captions from "./Captions/Captions";
import LoginForm from "./LoginForm/LoginForm";
import InstructorModal from "./InstructorModal/InstructorModal";
import { connect } from "react-redux";

class LoginScreen extends React.Component {
  render() {
    return (
      <div id={styles.loginScreenContainer}>
        <div id={styles.loginScreenLeftSide}>
          <LoginForm />
          <Captions />
          <Title />
        </div>
        <LoginScreenRightSide />
        {this.props.showModal && <InstructorModal />}
      </div>
    );
  }
}

const mapStateFromProps = state => {
  return {
    showModal: state.showModal
  };
};

export default connect(mapStateFromProps)(LoginScreen);
