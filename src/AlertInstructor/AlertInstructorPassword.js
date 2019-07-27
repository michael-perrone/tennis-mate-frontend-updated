import React from "react";
import styles from "./AlertInstructorPassword.module.css";

class AlertInstructorPassword extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Password must be eight characters</p>
      </div>
    );
  }
}

export default AlertInstructorPassword;
