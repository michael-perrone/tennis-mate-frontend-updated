import React from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import decoder from "jwt-decode";
import {connect} from 'react-redux';
import { USER_LOGIN_SUCCESS, ADMIN_LOGIN_SUCCESS, INSTRUCTOR_LOGIN_SUCCESS } from "../../actions/actions";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorLoggingIn: false,
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
          // this.props.loginFailed();
        }
        console.log(response);
        const token = decoder(response.data.token);
        console.log(token);

        if (token.instructor) {
          this.props.instructorLoginSuccess(response.data.token);
          this.props.history.push(`/instructor/${this.props.instructor.instructor.id}`);
        } else if (token.user) {
          this.props.userLoginSuccess(response.data.token)
          this.props.history.push(`/user/${this.props.user.user.id}`);
        } else if (token.admin) {
          this.props.adminLoginSuccess(response.data.token)
          this.props.history.push(`/admin/${this.props.admin.admin.id}`);
        }
      })
      .catch(error => {
        console.log(error)
        try {
        console.log(error.response);
        if (error.response.status === 400) {
          this.setState({errorLoggingIn: true})
          this.setState({ error: error.response.data.error });
        }
        
          let newVar = error;
          console.log(newVar);
        } catch (erorr) {
          console.log(erorr);
        }
      });
  }

  render() {
    console.log(this.state)
    
    return (
      <div id={styles.loginFormContainer}>
        <div id={styles.loginFormSubContainer}>
          <form id={styles.forms}>
            <input
              style={{backgroundColor: this.state.errorLoggingIn ? "#ffd9d9" : ""}}
              onChange={this.getLoginInfo}
              className={styles.loginInputs}
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.personLoggingIn.email}
            />
            <input
            style={{backgroundColor: this.state.errorLoggingIn ? "#ffd9d9" : ""}}
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
           
              <p className={styles.errorNoAnimation}
                id={this.state.errorLoggingIn ? styles.errorAnimation : ""}
              >
                {this.state.error}
              </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    instructor: state.authReducer.instructor,
    admin: state.authReducer.admin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginSuccess: (token) => dispatch({type: USER_LOGIN_SUCCESS, payload: {token}}),
    instructorLoginSuccess: (instructorToken) => dispatch({type: INSTRUCTOR_LOGIN_SUCCESS, payload: {instructorToken}}),
    adminLoginSuccess: (adminToken) => dispatch({type: ADMIN_LOGIN_SUCCESS, payload: {adminToken}})

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
