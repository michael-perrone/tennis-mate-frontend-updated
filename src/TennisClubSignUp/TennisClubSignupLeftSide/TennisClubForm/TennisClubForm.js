import React from "react";
import styles from "./TennisClubForm.module.css";
import { ADMIN_ENTERED } from "../../../actions/actions";
import { connect } from "react-redux";

class TennisClubForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tennisClub: {
        numberCourts: "",
        clubCity: "",
        clubState: "",
        clubZip: "",
        clubPhoneNumber: "",
        clubWebsite: "",
        clubAddress: "",
        clubOpenTime: "",
        clubCloseTime: ""
      }
    };
    this.getTennisClubInput = this.getTennisClubInput.bind(this);
  }

  getTennisClubInput(event) {
    const newStateObject = { ...this.state.admin };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ tennisClub: newStateObject });
  }
  render() {
    let animationContainerLeft = "";
    if (this.props.adminEntered) {
      animationContainerLeft = styles.animationSubContainerLeft;
    }

    return (
      <div className={styles.subContainerLeft} id={animationContainerLeft}>
        <p id={styles.registerP}>Tennis Club Info Register</p>
        <form id={styles.registerForm}>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Address:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubAddress}
              name="clubAddress"
              placeholder="Street Address"
              id={styles.input1}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Club City:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubCity}
              name="clubCity"
              placeholder="City"
              id={styles.input15}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Club State:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubState}
              name="clubState"
              placeholder="State"
              id={styles.input2}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Club Zip:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubZip}
              name="clubZip"
              placeholder="Zip Code"
              id={styles.ml26}
              className={styles.inputs}
              type="password"
            />
          </div>

          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Website URL:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubWebsite}
              name="clubWebsite"
              placeholder="WebSite URL"
              id={styles.ml8}
              className={styles.inputs}
              type="password"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Phone Number:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.phoneNumber}
              name="phoneNumber"
              placeholder="Phone Number"
              id={styles.input2}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Time Club Opens:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubOpenTime}
              name="clubOpenTime"
              placeholder="Time Club Opens"
              id={styles.ml8}
              className={styles.inputs}
              type="password"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Time Club Closes:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubCloseTime}
              name="clubCloseTime"
              placeholder="Time Club Closes"
              id={styles.ml8}
              className={styles.inputs}
              type="password"
            />
          </div>
          <div style={{ marginTop: "2px" }} className={styles.divWidthControl}>
            <label className={styles.labels}>Number of Courts:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.numberCourts}
              name="numberCourts"
              placeholder="Number of Courts"
              id={styles.input1}
              className={styles.inputs}
              type="text"
              style={{ width: "180px" }}
              onClick={this.props.adminInfoUnentered}
            />
          </div>
          <button
            onClick={this.props.getTennisClubInfo(this.state.tennisClub)}
            id={styles.registerButton}
          >
            Continue Registration
          </button>
        </form>
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
    adminInfoUnentered: () => dispatch({ type: ADMIN_ENTERED })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TennisClubForm);
