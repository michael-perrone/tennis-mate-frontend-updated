import React from "react";
import styles from "./SmallLoginForm.module.css";

class SmallLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.getUserName = this.getUserName.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }

  getUserName(event) {
    this.setState({ username: event.target.value });
  }

  getPassword(event) {
    this.setState({ pasword: event.target.value });
  }
  render() {
    return (
      <div style={{ position: "relative", top: "18px" }}>
        <input placeholder="Username" className={styles.inputs} />
        <input placeholder="Password" className={styles.inputs} />
        <button id={styles.loginButton}>Login</button>
      </div>
    );
  }
}

export default SmallLoginForm;
