import React from "react";
import styles from "./AlertInstructorPasswordConfirm.module.css";

class AlertInstructorPasswordConfirm extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Passwords must match</p>
      </div>
    );
  }
}

export default AlertInstructorPasswordConfirm;
