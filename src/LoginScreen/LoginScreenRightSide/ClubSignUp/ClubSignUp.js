import React from "react";
import styles from "./ClubSignUp.module.css";

class ClubSignUp extends React.Component {
  render() {
    return (
      <div>
        <button id={styles.signUpClubButton}>Register Your Tennis Club</button>
      </div>
    );
  }
}

export default ClubSignUp;
