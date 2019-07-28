import React from "react";
import styles from "./AlertAdminPhoneNumber.module.css";

class AlertAdminPhoneNumber extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Please enter a Phone Number</p>
      </div>
    );
  }
}

export default AlertAdminPhoneNumber;
