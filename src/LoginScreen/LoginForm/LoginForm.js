import React from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import decoder from "jwt-decode";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personLoggingIn: {
        email: "",
        password: "",
        token: ""
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
        const token = decoder(response.data.token);
        if (token.instructor) {
          localStorage.setItem("instructorToken", response.data.token);
          this.props.history.push(`/instructor/${token.instructor.id}`);
        } else if (token.user) {
          localStorage.setItem("token", response.data.token);
          this.props.history.push(`/user/${token.user.id}`);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.token);
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
            <button
              id={styles.loginButton}
              onClick={this.sendLoginInfo}
              to={"/"}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
