import React from "react";
import styles from "./AlertAdminLastName.module.css";

class AlertAdminLastName extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Field cannot be blank</p>
      </div>
    );
  }
}

export default AlertAdminLastName;
