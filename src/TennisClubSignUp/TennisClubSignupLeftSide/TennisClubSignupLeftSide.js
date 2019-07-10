import React from "react";
import LeftSidePTags from "./LeftSidePTags/LeftSidePTags";
import styles from "./TennisClubSignupLeftSide.module.css";
import TennisClubForm from "./TennisClubForm/TennisClubForm";
import { connect } from "react-redux";
import { ADMIN_ENTERED } from "../../actions/actions";

class TennisClubSignupLeftSide extends React.Component {
  render() {
    return (
      <div id={styles.containerLeft}>
        <LeftSidePTags />

        <TennisClubForm getTennisClubInfo={this.props.getTennisClubInfo} />

        {this.props.adminEntered && (
          <p id={styles.unEnterAdmin} onClick={this.props.unEnterAdmin}>
            Go back to admin info enter
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminEntered: state.adminEntered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    unEnterAdmin: () => dispatch({ type: ADMIN_ENTERED })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TennisClubSignupLeftSide);
