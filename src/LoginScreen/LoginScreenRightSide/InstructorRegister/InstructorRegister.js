import React from "react";
import styles from "./InstructorRegister.module.css";

class InstructorRegister extends React.Component {
  render() {
    return (
      <button id={styles.instructorRegisterButton}>
        Register as an Instructor
      </button>
    );
  }
}

export default InstructorRegister;
