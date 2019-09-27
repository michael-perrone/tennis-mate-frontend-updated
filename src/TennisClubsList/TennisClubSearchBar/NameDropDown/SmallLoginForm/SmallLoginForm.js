import React from "react";
import styles from "./SmallLoginForm.module.css";
import axios from "axios";
import decoder from "jwt-decode";
import {connect} from 'react-redux';
import { ADMIN_LOGIN_SUCCESS, INSTRUCTOR_LOGIN_SUCCESS, USER_LOGIN_SUCCESS } from "../../../../actions/actions";

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
        console.log(tokenResponse)
        if (tokenResponse.admin) {
          this.props.adminLogin(response.data.token)
        } else if (tokenResponse.instructor) {
          this.props.instructorLogin(response.data.token)
        } else if (tokenResponse.user) {
          this.props.userLogin(response.data.token)
        }
      })
      .catch(error => {
        console.log(error.response);
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

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (token) => dispatch({type: USER_LOGIN_SUCCESS, payload:{token}}),
    instructorLogin: (instructorToken) => dispatch({type: INSTRUCTOR_LOGIN_SUCCESS, payload: {instructorToken}}),
    adminLogin: (adminToken) => dispatch({type: ADMIN_LOGIN_SUCCESS, payload: {adminToken}})
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallLoginForm);
