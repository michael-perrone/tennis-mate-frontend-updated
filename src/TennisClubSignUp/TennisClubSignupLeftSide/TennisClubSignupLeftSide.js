import React from "react";
import LeftSidePTags from "./LeftSidePTags/LeftSidePTags";
import styles from "./TennisClubSignupLeftSide.module.css";
import TennisClubForm from "./TennisClubForm/TennisClubForm";
import { connect } from "react-redux";
import { ADMIN_ENTERED } from "../../actions/actions";

class TennisClubSignupLeftSide extends React.Component {
  render() {
    let newContainerLeft = "";
    if (this.props.adminEntered) {
      newContainerLeft = styles.newContainerLeft;
    }
    return (
      <div id={newContainerLeft} className={styles.containerLeft}>
        <LeftSidePTags />

        <TennisClubForm
          unEnterAdmin={this.props.unEnterAdmin}
          getTennisClubInfo={this.props.getTennisClubInfo}
        />
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
