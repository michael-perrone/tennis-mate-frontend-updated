import React from "react";
import styles from "./AlertUserLastName.module.css";

class AlertUserLastName extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Field cannot be blank</p>
      </div>
    );
  }
}

export default AlertUserLastName;
