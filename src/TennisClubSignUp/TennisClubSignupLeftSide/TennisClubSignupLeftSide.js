import React from "react";
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
      <div id={styles.newContainerLeft} className={styles.containerLeft}>
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
    adminEntered: state.booleanReducers.adminEntered
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
