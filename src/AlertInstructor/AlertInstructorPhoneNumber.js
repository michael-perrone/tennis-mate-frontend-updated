import React from "react";
import styles from "./AlertInstructorPhoneNumber.module.css";

class AlertInstructorPhoneNumber extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Please enter a Phone Number</p>
      </div>
    );
  }
}

export default AlertInstructorPhoneNumber;
