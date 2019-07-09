import React from "react";
import LeftSidePTags from "./LeftSidePTags/LeftSidePTags";
import styles from "./TennisClubSignupLeftSide.module.css";
import TennisClubForm from "./TennisClubForm/TennisClubForm";
import { connect } from "react-redux";

class TennisClubSignupLeftSide extends React.Component {
  render() {
    return (
      <div id={styles.containerLeft}>
        <LeftSidePTags />

        <TennisClubForm getTennisClubInfo={this.props.getTennisClubInfo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminEntered: state.adminEntered
  };
};

export default connect(mapStateToProps)(TennisClubSignupLeftSide);
