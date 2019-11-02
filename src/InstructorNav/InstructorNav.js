import React from "react";
import styles from "./InstructorNav.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { INSTRUCTOR_LOGOUT, SHOW_NOTIFICATIONS } from "../actions/actions";
import axios from "axios";
import Notifications from "../Notifications/Notifications";
import { withRouter } from "react-router-dom";

class InstructorNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
      notifications: "",
      instructorProfile: {}
    };

    this.showDropDownHandler = this.showDropDownHandler.bind(this);
    this.goToProfileHome = this.goToProfileHome.bind(this);
    // this.logoutHandler = this.logoutHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/instructorProfile/myprofile", {
        headers: {
          "x-auth-token": this.props.instructorToken
        }
      })
      .then(response => {
        this.setState({ instructorProfile: response.data.instructorProfile });
        this.setState({
          notifications:
            response.data.instructorProfile.instructor.notifications
        });
      });
  }

  showDropDownHandler() {
    this.setState(prevState => {
      return { showDropDown: !prevState.showDropDown };
    });
  }

  /*  logoutHandler() {
    localStorage.removeItem("instructorToken");
  } */

  goToProfileHome() {
    this.props.history.push(
      `/instructor/${this.props.instructor.instructor._id}`
    );
  }

  render() {
    let newVar = "";
    if (this.state.instructorProfile.instructor) {
      newVar = `/clubs/${this.state.instructorProfile.instructor.tennisClub
        .split(" ")
        .reduce((accum, element) => accum + element)}`;
    }
    return (
      <React.Fragment>
        <div id={styles.navBarContainer}>
          <p id={styles.title}>Tennis Mate</p>
          <div id={styles.secondContainer}>
            {newVar !== "" && this.props.instructorProfile.instructor.clubAccepted === true && (
              <Link className={styles.links} to={newVar}>
                My Club
              </Link>
            )}
            <div style={{ display: "flex" }}>
              <p style={{ cursor: "pointer" }} onClick={this.goToProfileHome}>
                {!this.state.showDropDown && (
                  <span
                    style={{
                      position: "relative",
                      left: "-6px",
                      padding: "0 5px",
                      boxShadow: "0px 0px 8px red",
                      color: "red",
                      borderRadius: "30px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      fontFamily: "cursive"
                    }}
                  >
                    {this.state.notifications.length}
                  </span>
                )}
                {this.props.instructor.instructor.instructorName}
              </p>{" "}
              <i
                onClick={this.showDropDownHandler}
                style={{
                  position: "relative",
                  left: "3px",
                  top: "5px",
                  cursor: "pointer"
                }}
                className="fas fa-caret-down"
              />
              {this.state.showDropDown && (
                <div id={styles.dropDownMenu}>
                  <div className={styles.dropDownDiv}>
                    <Link
                      className={styles.dropDownItem}
                      to={`/instructor/${this.props.instructor.instructor.id}/createeditprofile`}
                    >
                      Edit Profile
                    </Link>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className={styles.dropDownDiv}
                    onClick={this.props.showNotifications}
                  >
                    <p className={styles.dropDownItem}>
                      {this.state.instructorProfile && (
                        <span
                          style={{
                            position: "relative",
                            left: "-6px",
                            padding: "0 5px",
                            boxShadow: "0px 0px 8px red",
                            color: "red",
                            borderRadius: "30px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            top: "-1px"
                          }}
                        >
                          {this.state.notifications.length}
                        </span>
                      )}
                      Notifications
                    </p>
                  </div>
                  <div
                    style={{ borderBottom: "none" }}
                    className={styles.dropDownDiv}
                  >
                    <Link
                      className={styles.dropDownItem}
                      onClick={this.props.instructorLogout}
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
        {this.props.showNotificationsState && <Notifications />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    instructor: state.authReducer.instructor,
    instructorToken: state.authReducer.instructorToken,
    instructorProfile: state.authReducer.instructorProfile.instructorProfile,
    showNotificationsState: state.booleanReducers.showNotifications
  };
};

const mapDispatchToProps = dispatch => {
  return {
    instructorLogout: () => dispatch({ type: INSTRUCTOR_LOGOUT }),
    showNotifications: () => dispatch({ type: SHOW_NOTIFICATIONS })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(InstructorNav)
);
