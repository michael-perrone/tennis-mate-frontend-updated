import React from "react";
import styles from "./AlertAdminEmail.module.css";

class AlertAdminEmail extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Please enter a valid Email</p>
      </div>
    );
  }
}

export default AlertAdminEmail;
