import React from "react";
import styles from "./InstructorSignup.module.css";

class InstuctorSignup extends React.Component {
  render() {
    return (
      <div id={styles.instructorSignupContainer}>
        <p id={styles.instructorSignup}> OR signup as instructor here</p>
      </div>
    );
  }
}

export default InstuctorSignup;
