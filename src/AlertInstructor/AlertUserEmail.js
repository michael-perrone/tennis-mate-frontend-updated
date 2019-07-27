import React from "react";
import styles from "./AlertUserEmail.module.css";

class ALertUserEmail extends React.Component {
  render() {
    return (
      <div id={styles.alertContainer}>
        <p>Please enter a valid Email</p>
      </div>
    );
  }
}

export default ALertUserEmail;
