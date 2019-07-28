import React from "react";
import styles from "./AdminForm.module.css";
import AlertAdminFirstName from "../../../AlertAdmin/AlertAdminFirstName";
import AlertAdminLastName from "../../../AlertAdmin/AlertAdminLastName";
import AlertAdminEmail from "../../../AlertAdmin/AlertAdminEmail";
import AlertAdminPhoneNumber from "../../../AlertAdmin/AlertAdminPhoneNumber";
import AlertAdminPassword from "../../../AlertAdmin/AlertAdminPassword";
import AlertAdminPasswordConfirm from "../../../AlertAdmin/AlertAdminPasswordConfirm";
import { connect } from "react-redux";

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.signingUp = this.signingUp.bind(this);
    this.setDirty = this.setDirty.bind(this);
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
      signingUpState: false,
      dirty: {
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        createPassword: false,
        passwordConfirm: false,
        tennisClub: false
      },
      showOptionals: false
    };
    this.getAdminInput = this.getAdminInput.bind(this);
  }

  setDirty(event) {
    console.log(event.target.name);
    const newObject = { ...this.state.dirty };
    newObject[event.target.name] = true;
    this.setState({ dirty: newObject });
  }

  validatePhone = phone => {
    let newRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return newRe.test(phone);
  };

  showOptionals = () => {
    this.setState({ showOptionals: true });
  };

  hideOptionals = () => {
    this.setState({ showOptionals: false });
  };

  validateEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  signingUp() {
    this.setState({ signingUpState: true });
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

        <form
          onMouseEnter={this.showOptionals}
          onMouseLeave={this.hideOptionals}
          id={styles.registerForm}
        >
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>First Name:</label>
            <input
              onBlur={this.setDirty}
              onFocus={this.signingUp}
              onChange={this.getAdminInput}
              value={this.state.admin.firstName}
              name="firstName"
              placeholder="First Name"
              id={styles.input1}
              className={styles.inputs}
              type="text"
            />
          </div>
          {this.state.dirty.firstName === true &&
            this.state.admin.firstName === "" && <AlertAdminFirstName />}
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Last Name:</label>
            <input
              onBlur={this.setDirty}
              onFocus={this.signingUp}
              onChange={this.getAdminInput}
              value={this.state.admin.lastName}
              name="lastName"
              placeholder="Last Name"
              id={styles.input15}
              className={styles.inputs}
              type="text"
            />
          </div>
          {this.state.dirty.lastName === true &&
            this.state.admin.lastName === "" && <AlertAdminLastName />}
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Email Address:</label>
            <input
              onBlur={this.setDirty}
              onFocus={this.signingUp}
              onChange={this.getAdminInput}
              value={this.state.admin.email}
              name="email"
              placeholder="Email Address"
              id={styles.input2}
              className={styles.inputs}
              type="text"
            />
          </div>
          {this.validateEmail(this.state.admin.email) === false &&
            this.state.dirty.email === true && <AlertAdminEmail />}
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Phone Number:</label>
            <input
              onBlur={this.setDirty}
              onFocus={this.signingUp}
              onChange={this.getAdminInput}
              value={this.state.admin.phoneNumber}
              name="phoneNumber"
              placeholder="Phone Number"
              id={styles.input2}
              className={styles.inputs}
              type="text"
            />
          </div>
          {this.validatePhone(this.state.admin.phoneNumber) === false &&
            this.state.dirty.phoneNumber === true && <AlertAdminPhoneNumber />}
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Create Password:</label>
            <input
              onBlur={this.setDirty}
              onFocus={this.signingUp}
              onChange={this.getAdminInput}
              value={this.state.admin.createPassword}
              name="createPassword"
              placeholder="Create Password"
              id={styles.ml26}
              className={styles.inputs}
              type="password"
            />
          </div>
          {this.state.dirty.createPassword === true &&
            this.state.admin.createPassword.length < 7 && (
              <AlertAdminPassword />
            )}
          <div className={styles.divWidthControl}>
            <label className={styles.labels}>Password Confirm:</label>
            <input
              onBlur={this.setDirty}
              onFocus={this.signingUp}
              onChange={this.getAdminInput}
              value={this.state.admin.passwordConfirm}
              name="passwordConfirm"
              placeholder="Password Confirm"
              id={styles.ml8}
              className={styles.inputs}
              type="password"
            />
          </div>
          {this.state.dirty.passwordConfirm === true &&
            this.state.admin.passwordConfirm !==
              this.state.admin.createPassword && <AlertAdminPasswordConfirm />}
          <div style={{ marginTop: "14px" }} className={styles.divWidthControl}>
            <label className={styles.labels}>Tennis Club Name:</label>
            <input
              onBlur={this.setDirty}
              onFocus={this.signingUp}
              onChange={this.getAdminInput}
              value={this.state.admin.tennisClub}
              name="tennisClub"
              placeholder="Tennis Club Name"
              className={styles.inputs}
              type="text"
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
