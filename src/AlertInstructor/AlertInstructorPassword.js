import React from "react";
import styles from "./AlertUserPassword.module.css";

class AlertUserPassword extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Password must be eight characters</p>
      </div>
    );
  }
}

export default AlertUserPassword;
