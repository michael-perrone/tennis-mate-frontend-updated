import React from "react";
import styles from "./AdminForm.module.css";

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
      }
    };
    this.getAdminInput = this.getAdminInput.bind(this);
  }

  getAdminInput(event) {
    const newStateObject = { ...this.state.admin };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ admin: newStateObject });
  }
  render() {
    return (
      <React.Fragment>
        <p id={styles.registerP}>Admin Register</p>
        <div id={styles.subContainerRight}>
          <form id={styles.registerForm}>
            <div
              style={{ marginTop: "14px" }}
              className={styles.divWidthControl}
            >
              <label className={styles.labels}>Tennis Club:</label>
              <input
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
      </React.Fragment>
    );
  }
}

export default AdminForm;
