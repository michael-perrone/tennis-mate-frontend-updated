import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import decoder from "jwt-decode";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorToken: "",
      showDropDown: false
    };

    this.showDropDownHandler = this.showDropDownHandler.bind(this);
  }
  componentWillMount() {
    const instructorToken = decoder(localStorage.getItem("instructorToken"));
    this.setState({ instructorToken });
  }

  showDropDownHandler() {
    this.setState(prevState => {
      return { showDropDown: !prevState.showDropDown };
    });
  }

  render() {
    return (
      <div id={styles.navBarContainer}>
        <p id={styles.title}>Tennis Mate</p>
        <div id={styles.secondContainer}>
          <Link className={styles.links} to="/clubs">
            My Club
          </Link>
          <Link className={styles.links} to="/schedule">
            My Schedule
          </Link>
          <div onClick={this.showDropDownHandler} style={{ display: "flex" }}>
            <p style={{ cursor: "pointer" }}>
              {this.state.instructorToken.instructor.instructorName}
            </p>{" "}
            <i
              style={{
                position: "relative",
                left: "3px",
                top: "5px",
                cursor: "pointer"
              }}
              class="fas fa-caret-down"
            />
            {this.state.showDropDown && <div id={styles.dropDownMenu} />}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
