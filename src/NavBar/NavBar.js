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
  componentDidMount() {
    const instructorToken = decoder(localStorage.getItem("instructorToken"));
    this.setState({ instructorToken });
  }

  render() {
    return (
      <div id={styles.navBarContainer}>
        <Link>{this.state.instructorToken.name}</Link>
      </div>
    );
  }
}

export default NavBar;
