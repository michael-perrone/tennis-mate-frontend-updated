import React from "react";
import styles from "./LoginForm.module.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div id={styles.loginFormContainer}>
        <div id={styles.loginFormSubContainer}>
          <form id={styles.forms}>
            <input
              className={styles.loginInputs}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.loginInputs}
              type="password"
              placeholder="Password"
            />
            <button id={styles.loginButton}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
