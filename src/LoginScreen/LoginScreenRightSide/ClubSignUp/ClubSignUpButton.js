import React from "react";
import styles from "./ClubSignUpButton.module.css";
import { Link } from "react-router-dom";

class ClubSignUp extends React.Component {
  render() {
    return (
      <div>
        <Link to="/registerTennisClub">
          <button id={styles.signUpClubButton}>
            Register Your Tennis Club
          </button>
        </Link>
      </div>
    );
  }
}

export default ClubSignUp;
