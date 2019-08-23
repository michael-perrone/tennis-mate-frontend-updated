import React from "react";
import styles from "./AdminNav.module.css";
import { Link } from "react-router-dom";
import decoder from "jwt-decode";

class AdminNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminToken: "",
      showDropDown: false
    };

    this.showDropDownHandler = this.showDropDownHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }
  componentWillMount() {
    const adminToken = decoder(localStorage.getItem("adminToken"));
    this.setState({ adminToken });
  }

  showDropDownHandler() {
    this.setState(prevState => {
      return { showDropDown: !prevState.showDropDown };
    });
  }

  logoutHandler() {
    localStorage.removeItem("adminToken");
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
            <p className={styles.links} style={{ cursor: "pointer" }}>
              {this.state.adminToken.admin.name}
            </p>{" "}
            <i
              style={{
                position: "relative",
                left: "3px",
                top: "5px",
                cursor: "pointer",
                color: "rgb(152, 241, 152)"
              }}
              className="fas fa-caret-down"
            />
            {this.state.showDropDown && (
              <div id={styles.dropDownMenu}>
                <div className={styles.dropDownDiv}>
                  <Link
                    className={styles.dropDownItem}
                    to={`/instructor/${
                      this.state.adminToken.admin.id
                    }/createeditprofile`}
                  >
                    Edit Profile
                  </Link>
                </div>
                <div className={styles.dropDownDiv}>
                  <Link className={styles.dropDownItem} to="/settings">
                    Settings
                  </Link>
                </div>
                <div
                  style={{ borderBottom: "none" }}
                  className={styles.dropDownDiv}
                >
                  <Link
                    className={styles.dropDownItem}
                    onClick={this.logoutHandler}
                    to="/"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminNav;
