import React from "react";
import styles from "./AlertInstructorLastName.module.css";

class AlertInstructorLastName extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Field cannot be blank</p>
      </div>
    );
  }
}

export default AlertInstructorLastName;
