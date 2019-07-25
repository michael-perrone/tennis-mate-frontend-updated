import React from "react";
import styles from "./TennisClubForm.module.css";
import { ADMIN_ENTERED } from "../../../actions/actions";
import { connect } from "react-redux";
import GoBackToAdmin from "./GoBackToAdmin/GoBackToAdmin";

class TennisClubForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tennisClub: {
        numberCourts: "",
        clubCity: "",
        clubState: "",
        clubZip: "",
        phoneNumber: "",
        clubWebsite: "",
        clubAddress: "",
        clubOpenTimeNumber: "",
        clubOpenTimeAMPM: "",
        clubCloseTimeNumber: "",
        clubCloseTimeAMPM: ""
      }
    };
    this.getTennisClubInput = this.getTennisClubInput.bind(this);
  }

  getTennisClubInput(event) {
    const newStateObject = { ...this.state.tennisClub };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ tennisClub: newStateObject });
    console.log(newStateObject);
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
              type="text"
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
              type="text"
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
            <select
              onChange={this.getTennisClubInput}
              name="clubOpenTimeNumber"
              value={this.state.tennisClub.clubOpenTimeNumber}
            >
              <option disabled>{}</option>
              <option>12:00</option>
              <option>12:30</option>
              <option>1:00</option>
              <option>1:30</option>
              <option>2:00</option>
              <option>2:30</option>
              <option>3:00</option>
              <option>3:30</option>
              <option>4:00</option>
              <option>4:30</option>
              <option>5:00</option>
              <option>5:30</option>
              <option>6:00</option>
              <option>6:30</option>
              <option>7:00</option>
              <option>7:30</option>
              <option>8:00</option>
              <option>8:30</option>
              <option>9:00</option>
              <option>9:30</option>
              <option>10:00</option>
              <option>10:30</option>
              <option>11:00</option>
              <option>11:30</option>
            </select>
            <select
              name="clubOpenTimeAMPM"
              value={this.state.tennisClub.clubOpenTimeAMPM}
              onChange={this.getTennisClubInput}
            >
              <option disabled>{}</option>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Time Club Closes:</label>
            <select
              onChange={this.getTennisClubInput}
              name="clubCloseTimeNumber"
              value={this.state.tennisClub.clubCloseTimeNumber}
            >
              <option disabled>{}</option>
              <option>12:00</option>
              <option>12:30</option>
              <option>1:00</option>
              <option>1:30</option>
              <option>2:00</option>
              <option>2:30</option>
              <option>3:00</option>
              <option>3:30</option>
              <option>4:00</option>
              <option>4:30</option>
              <option>5:00</option>
              <option>5:30</option>
              <option>6:00</option>
              <option>6:30</option>
              <option>7:00</option>
              <option>7:30</option>
              <option>8:00</option>
              <option>8:30</option>
              <option>9:00</option>
              <option>9:30</option>
              <option>10:00</option>
              <option>10:30</option>
              <option>11:00</option>
              <option>11:30</option>
            </select>
            <select
              name="clubCloseTimeAMPM"
              value={this.state.tennisClub.clubCloseTimeAMPM}
              onChange={this.getTennisClubInput}
            >
              <option disabled>{}</option>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
          <div style={{ marginTop: "2px" }} className={styles.divWidthControl}>
            <label className={styles.labels}>Number of Courts:</label>
            <input
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.numberCourts}
              name="numberCourts"
              placeholder="Number of Courts"
              id={styles.input12}
              className={styles.inputs}
              type="text"
            />
          </div>
          <button
            onClick={this.props.getTennisClubInfo(this.state.tennisClub)}
            id={styles.registerButton}
          >
            Continue Registration
          </button>
          <GoBackToAdmin unEnterAdmin={this.props.unEnterAdmin} />
        </form>
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
    adminInfoUnentered: () => dispatch({ type: ADMIN_ENTERED })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TennisClubForm);
