import React from "react";
import styles from "./AlertAdminPasswordConfirm.module.css";

class AlertAdminPasswordConfirm extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Passwords must match</p>
      </div>
    );
  }
}

export default AlertAdminPasswordConfirm;
