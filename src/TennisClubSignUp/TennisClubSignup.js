import styles from "./TennisClubSignup.module.css";
import React from "react";
import TennisClubSignupLeftSide from "./TennisClubSignupLeftSide/TennisClubSignupLeftSide";
import TennisClubSignupRightSide from "./TennisClubSignupRightSide/TennisClubSignupRightSide";
import { ADMIN_ENTERED } from "../actions/actions";
import { connect } from "react-redux";
import axios from "axios";
import BackDrop from "./BackDrop/BackDrop";
import DropdownModal from "./DropdownModal/DropdownModal";

class TennisClubSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        firstName: "",
        tennisClub: ""
      },
      tennisClub: {
        clubName: ""
      },

      allInfoReadyToSend: false
    };
    this.sendAllInfo = this.sendAllInfo.bind(this);
    this.getAdminInfo = this.getAdminInfo.bind(this);
    // this.sendAdminInfo = this.sendAdminInfo.bind(this);
    this.getTennisClubInfo = this.getTennisClubInfo.bind(this);
    this.unShowConfirmModal = this.unShowConfirmModal.bind(this);
  }

  unShowConfirmModal() {
    this.setState(prevState => {
      return { allInfoReadyToSend: !prevState.allInfoReadyToSend };
    });
  }

  getTennisClubInfo = stateParamObj => event => {
    event.preventDefault();
    this.setState({ tennisClub: stateParamObj, allInfoReadyToSend: true });
  };

  getAdminInfo = stateParamObj => event => {
    event.preventDefault();
    this.setState({ admin: stateParamObj });
    this.props.adminInfoSent();
  };

  sendAllInfo() {
    const bigStateObject = {
      admin: this.state.admin,
      tennisClub: this.state.tennisClub
    };

    axios
      .post("http://localhost:8080/api/adminSignup", bigStateObject)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let newContainer = "";
    if (this.props.adminEntered) {
      newContainer = styles.newContainer;
    }
    return (
      <div id={newContainer} className={styles.container}>
        <TennisClubSignupLeftSide getTennisClubInfo={this.getTennisClubInfo} />

        <TennisClubSignupRightSide
          name={this.state.admin.firstName}
          tennisClub={this.state.admin.tennisClub}
          getAdminInfo={this.getAdminInfo}
        />

        {this.state.allInfoReadyToSend && (
          <BackDrop unShowConfirmModal={this.unShowConfirmModal} />
        )}
        <DropdownModal
          admin={this.state.admin}
          tennisClub={this.state.tennisClub}
          sendAllInfo={this.sendAllInfo}
          unShowConfirmModal={this.unShowConfirmModal}
          allInfoReadyToSend={this.state.allInfoReadyToSend}
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
    adminInfoSent: () => dispatch({ type: ADMIN_ENTERED })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TennisClubSignup);
