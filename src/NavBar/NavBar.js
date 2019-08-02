import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import decoder from "jwt-decode";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorToken: ""
    };
  }
  componentWillMount() {
    const instructorToken = decoder(localStorage.getItem("instructorToken"));
    this.setState({ instructorToken });
  }

  render() {
    return (
      <div id={styles.navBarContainer}>
        <p>Tennis Mate</p>
        <p>{this.state.instructorToken.instructor.instructorName}</p>
      </div>
    );
  }
}

export default NavBar;
