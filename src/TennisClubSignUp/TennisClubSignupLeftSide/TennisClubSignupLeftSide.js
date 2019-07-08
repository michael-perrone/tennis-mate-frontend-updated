import React from "react";
import LeftSidePTags from "./LeftSidePTags/LeftSidePTags";
import styles from "./TennisClubSignupLeftSide.module.css";
import TennisClubForm from "./TennisClubForm/TennisClubForm";

class TennisClubSignupLeftSide extends React.Component {
  render() {
    return (
      <div id={styles.containerLeft}>
        <LeftSidePTags />
        <TennisClubForm />
      </div>
    );
  }
}
export default TennisClubSignupLeftSide;
