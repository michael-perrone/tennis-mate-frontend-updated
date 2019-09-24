import React from "react";
import styles from "./SmallLoginForm.module.css";
import axios from "axios";
import decoder from "jwt-decode";

class SmallLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.getUserName = this.getUserName.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.login = this.login.bind(this);
  }

  login(event) {
    event.preventDefault();
    const infoToSend = {
      email: this.state.username,
      password: this.state.password
    };
    console.log(infoToSend);
    axios
      .post("http://localhost:8080/api/auth/login", infoToSend)
      .then(response => {
        console.log(response);
        let tokenResponse = decoder(response.data.token);
        if (tokenResponse.admin) {
          localStorage.setItem("adminToken", response.data.token);
        } else if (tokenResponse.instructor) {
          localStorage.setItem("instructorToken", response.data.token);
        } else if (tokenResponse.user) {
          localStorage.setItem("token", response.data.token);
        }
        console.log(tokenResponse);
        if (response.status === 200) {
          this.props.didLogIn();
        }
      })
      .catch(error => {
        console.log("shucks");
      });
  }

  getUserName(event) {
    this.setState({ username: event.target.value });
  }

  getPassword(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <div style={{ position: "relative", top: "24px" }}>
        <form>
          <input
            onChange={this.getUserName}
            value={this.state.username}
            placeholder="Username"
            className={styles.inputs}
          />
          <input
            onChange={this.getPassword}
            value={this.state.password}
            type="password"
            placeholder="Password"
            className={styles.inputs}
          />
          <button onClick={this.login} id={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default SmallLoginForm;
