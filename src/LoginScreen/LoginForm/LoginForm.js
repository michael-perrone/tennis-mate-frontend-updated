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
      },
      error: ""
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
        if (response.status === 400) {
          console.log("EDJIWDIWJDQIWJD");
        }
        console.log(response);
        const token = decoder(response.data.token);
        console.log(token);

        if (token.instructor) {
          localStorage.setItem("instructorToken", response.data.token);
          this.props.history.push(`/instructor/${token.instructor.id}`);
        } else if (token.user) {
          localStorage.setItem("token", response.data.token);
          this.props.history.push(`/user/${token.user.id}`);
        } else if (token.admin) {
          localStorage.setItem("adminToken", response.data.token);
          this.props.history.push(`/admin/${token.admin.id}`);
        }
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 400) {
          this.setState({ error: error.response.data.error });
        }
        try {
          let newVar = error;
          console.log(newVar);
        } catch (erorr) {
          console.log(erorr);
        }
      });
  }

  render() {
    console.log(this.state.error);
    return (
      <div id={styles.loginFormContainer}>
        <div id={styles.loginFormSubContainer}>
          <form id={styles.forms}>
            <input
              onChange={this.getLoginInfo}
              className={styles.loginInputs}
              type="text"
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
            {this.state.error !== "" && (
              <p
                style={{
                  position: "relative",
                  left: "80px",
                  top: "20px",
                  fontSize: "20px",
                  color: "red"
                }}
              >
                {this.state.error}
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
