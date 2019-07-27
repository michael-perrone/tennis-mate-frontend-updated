import React from "react";
import styles from "./AlertAdminPassword.module.css";

class AlertAdminPassword extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Password must be eight characters</p>
      </div>
    );
  }
}

export default AlertAdminPassword;
