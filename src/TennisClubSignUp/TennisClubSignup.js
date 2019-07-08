import styles from "./TennisClubSignup.module.css";
import React from "react";
import TennisClubSignupLeftSide from "./TennisClubSignupLeftSide/TennisClubSignupLeftSide";
import TennisClubSignupRightSide from "./TennisClubSignupRightSide/TennisClubSignupRightSide";
import { ADMIN_ENTERED } from "../actions/actions";
import { connect } from "react-redux";

class TennisClubSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        hi: null
      },
      tennisClub: {
        clubName: null
      }
    };
    this.getAdminInfo = this.getAdminInfo.bind(this);
    // this.sendAdminInfo = this.sendAdminInfo.bind(this);
    this.getTennisClubInfo = this.getTennisClubInfo.bind(this);
  }

  getTennisClubInfo = stateParamObj => event => {
    event.preventDefault();
    this.setState({ tennisClub: stateParamObj });
  };

  getAdminInfo = stateParamObj => event => {
    event.preventDefault();
    this.setState({ admin: stateParamObj });
    this.props.adminInfoSent();
  };
  /* 
  sendAdminAndTennisClubInfo(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/adminSignup", this.state.admin)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  } */

  render() {
    return (
      <div id={styles.container}>
        <TennisClubSignupLeftSide getTennisClubInfo={this.getTennisClubInfo} />
        <TennisClubSignupRightSide getAdminInfo={this.getAdminInfo} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    adminInfoSent: () => dispatch({ type: ADMIN_ENTERED })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TennisClubSignup);
