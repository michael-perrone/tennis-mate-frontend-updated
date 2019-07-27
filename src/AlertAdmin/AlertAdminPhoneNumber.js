import React from "react";
import styles from "./AlertadminPhoneNumber.module.css";

class AlertadminPhoneNumber extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Please enter a Phone Number</p>
      </div>
    );
  }
}

export default AlertadminPhoneNumber;
