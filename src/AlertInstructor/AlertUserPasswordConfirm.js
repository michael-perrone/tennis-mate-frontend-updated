import React from "react";
import styles from "./AlertUserPasswordConfirm.module.css";

class AlertPasswordConfirm extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Passwords must match</p>
      </div>
    );
  }
}

export default AlertPasswordConfirm;
