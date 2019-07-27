import React from "react";
import styles from "./AlertUserPhoneNumber.module.css";

class AlertUserPhoneNumber extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Please enter a Phone Number</p>
      </div>
    );
  }
}

export default AlertUserPhoneNumber;
