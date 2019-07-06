import React from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personLoggingIn: {
        email: "",
        password: ""
      }
    };
    this.getLoginInfo = this.getLoginInfo.bind(this);
    this.sendLoginInfo = this.sendLoginInfo.bind(this);
  }

  getLoginInfo(event) {
    const newStateObject = { ...this.state.personLoggingIn };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ personLoggingIn: newStateObject });
    console.log(newStateObject);
  }

  sendLoginInfo(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/auth/login", this.state.personLoggingIn)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id={styles.loginFormContainer}>
        <div id={styles.loginFormSubContainer}>
          <form id={styles.forms}>
            <input
              onChange={this.getLoginInfo}
              className={styles.loginInputs}
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.personLoggingIn.email}
            />
            <input
              onChange={this.getLoginInfo}
              className={styles.loginInputs}
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.personLoggingIn.password}
            />
            <button id={styles.loginButton} onClick={this.sendLoginInfo}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
