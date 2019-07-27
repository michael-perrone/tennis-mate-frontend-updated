import React from "react";
import styles from "./AlertInstructorEmail.module.css";

class AlertInstructorEmail extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Please enter a valid Email</p>
      </div>
    );
  }
}

export default AlertInstructorEmail;
