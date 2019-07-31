import React from "react";
import styles from "./TennisClubForm.module.css";
import otherStyles from "../../../LoginScreen/LoginScreenRightSide/UserRegisterForm/UserRegisterForm.module.css";
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
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "1.9px", color: "black" }}
              className={otherStyles.labels}
            >
              Club Street:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubAddress}
              name="clubAddress"
              placeholder="Street Address"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "5.2px", color: "black" }}
              className={otherStyles.labels}
            >
              Club City:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubCity}
              name="clubCity"
              placeholder="City"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "3.2px", color: "black" }}
              className={otherStyles.labels}
            >
              Club State:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubState}
              name="clubState"
              placeholder="State"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label style={{ color: "black" }} className={otherStyles.labels}>
              Club Zipcode:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubZip}
              name="clubZip"
              placeholder="Zip Code"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>

          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "0.15px", color: "black" }}
              className={otherStyles.labels}
            >
              Website URL:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubWebsite}
              name="clubWebsite"
              placeholder="WebSite URL"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "2.2px", color: "black" }}
              className={otherStyles.labels}
            >
              Club Telephone:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.phoneNumber}
              name="phoneNumber"
              placeholder="Phone Number"
              id={styles.input3}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div
            style={{ marginTop: "2px" }}
            className={otherStyles.divWidthControl}
          >
            <label style={{ color: "black" }} className={otherStyles.labels}>
              Number of Courts:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.numberCourts}
              name="numberCourts"
              placeholder="Number of Courts"
              id={styles.input3}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "1px", color: "black" }}
              className={otherStyles.labels}
            >
              Time Club Opens:
            </label>
            <select
              id={styles.timeSelectors}
              style={{ color: "black", border: "3px ridge #dededc" }}
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
            <label style={{ color: "black" }} className={otherStyles.labels}>
              AM/PM:
            </label>
            <select
              id={styles.AMPM}
              style={{ color: "black", border: "3px ridge #dededc" }}
              name="clubOpenTimeAMPM"
              value={this.state.tennisClub.clubOpenTimeAMPM}
              onChange={this.getTennisClubInput}
            >
              <option disabled>{}</option>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "0.8px", color: "black" }}
              className={otherStyles.labels}
            >
              Time Club Closes:
            </label>
            <select
              id={styles.timeSelectors}
              style={{ color: "black", border: "3px ridge #dededc" }}
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
            <label style={{ color: "black" }} className={otherStyles.labels}>
              AM/PM:
            </label>
            <select
              id={styles.AMPM}
              style={{ color: "black", border: "3px ridge #dededc" }}
              name="clubCloseTimeAMPM"
              value={this.state.tennisClub.clubCloseTimeAMPM}
              onChange={this.getTennisClubInput}
            >
              <option disabled>{}</option>
              <option>AM</option>
              <option>PM</option>
            </select>
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
