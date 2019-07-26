import React from "react";
import styles from "./AdminForm.module.css";
import { connect } from "react-redux";

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        tennisClub: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        createPassword: "",
        passwordConfirm: ""
      },
      touched: {
        tennisClub: false,
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        createPassword: false,
        passwordConfirm: false
      }
    };
    this.tellIfTouched = this.tellIfTouched.bind(this);
    this.getAdminInput = this.getAdminInput.bind(this);
  }

  getAdminInput(event) {
    const newStateObject = { ...this.state.admin };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ admin: newStateObject });
  }
  render() {
    let animationSubRight = "";
    if (this.props.adminEntered) {
      animationSubRight = styles.animationSubRight;
    }
    return (
      <div className={styles.subContainerRight} id={animationSubRight}>
        <p id={styles.registerP}>Admin Register</p>

        <form id={styles.registerForm}>
          <div style={{ marginTop: "14px" }} className={styles.divWidthControl}>
            <label className={styles.labels}>Tennis Club:</label>
            <input
              onFocus={this.tellIfTouched}
              onChange={this.getAdminInput}
              value={this.state.admin.tennisClub}
              name="tennisClub"
              placeholder="Tennis Club Name"
              id={styles.input1}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>First Name:</label>
            <input
              onFocus={this.tellIfTouched}
              onChange={this.getAdminInput}
              value={this.state.admin.firstName}
              name="firstName"
              placeholder="First Name"
              id={styles.input1}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Last Name:</label>
            <input
              onFocus={this.tellIfTouched}
              onChange={this.getAdminInput}
              value={this.state.admin.lastName}
              name="lastName"
              placeholder="Last Name"
              id={styles.input15}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Email Address:</label>
            <input
              onFocus={this.tellIfTouched}
              onChange={this.getAdminInput}
              value={this.state.admin.email}
              name="email"
              placeholder="Email Address"
              id={styles.input2}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Phone Number:</label>
            <input
              onFocus={this.tellIfTouched}
              onChange={this.getAdminInput}
              value={this.state.admin.phoneNumber}
              name="phoneNumber"
              placeholder="Phone Number"
              id={styles.input2}
              className={styles.inputs}
              type="text"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Create Password:</label>
            <input
              onFocus={this.tellIfTouched}
              onChange={this.getAdminInput}
              value={this.state.admin.createPassword}
              name="createPassword"
              placeholder="Create Password"
              id={styles.ml26}
              className={styles.inputs}
              type="password"
            />
          </div>
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Password Confirm:</label>
            <input
              onFocus={this.tellIfTouched}
              onChange={this.getAdminInput}
              value={this.state.admin.passwordConfirm}
              name="passwordConfirm"
              placeholder="Password Confirm"
              id={styles.ml8}
              className={styles.inputs}
              type="password"
            />
          </div>
          <button
            onClick={this.props.getAdminInfo(this.state.admin)}
            id={styles.registerButton}
          >
            Register As Club Admin
          </button>
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

export default connect(mapStateToProps)(AdminForm);
