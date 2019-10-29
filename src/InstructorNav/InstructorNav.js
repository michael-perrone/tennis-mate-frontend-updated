import React from "react";
import styles from "./InstructorNav.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { INSTRUCTOR_LOGOUT } from "../actions/actions";

class InstructorNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    };

    this.showDropDownHandler = this.showDropDownHandler.bind(this);
    // this.logoutHandler = this.logoutHandler.bind(this);
  }

  showDropDownHandler() {
    this.setState(prevState => {
      return { showDropDown: !prevState.showDropDown };
    });
  }

  /*  logoutHandler() {
    localStorage.removeItem("instructorToken");
  } */

  render() {
    console.log(this.props.notifications);
    return (
      <div id={styles.navBarContainer}>
        <p id={styles.title}>Tennis Mate</p>
        <div id={styles.secondContainer}>
          <Link className={styles.links} to="/clubs">
            My Club
          </Link>
          <div onClick={this.showDropDownHandler} style={{ display: "flex" }}>
            <p style={{ cursor: "pointer" }}>
              {this.props.instructor.instructor.instructorName}
            </p>{" "}
            <i
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
                <div className={styles.dropDownDiv}>
                  <Link className={styles.dropDownItem} to="/notifications">
                    <span
                      style={{
                        position: "relative",
                        left: "-3px",
                        padding: "0 5px",
                        backgroundColor: "black",
                        color: "red",
                        borderRadius: "30px",
                        fontSize: "14px"
                      }}
                    >
                      {this.props.notifications.instructor.notificationsNumber}
                    </span>{" "}
                    Notifications
                  </Link>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    instructor: state.authReducer.instructor,
    instructorToken: state.authReducer.instructorToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    instructorLogout: () => dispatch({ type: INSTRUCTOR_LOGOUT })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstructorNav);
