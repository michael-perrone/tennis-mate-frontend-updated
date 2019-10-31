import React from "react";
import styles from "./InstructorNav.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { INSTRUCTOR_LOGOUT } from "../actions/actions";
import axios from 'axios';

class InstructorNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
      notifications: "",
      instructorProfile: {}
    };

    this.showDropDownHandler = this.showDropDownHandler.bind(this);
    // this.logoutHandler = this.logoutHandler.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/instructorProfile/myprofile', {headers: {
      'x-auth-token': this.props.instructorToken
    }}).then(
      response => {
        this.setState({instructorProfile: response.data.instructorProfile})
        this.setState({notifications: response.data.instructorProfile.instructor.notifications})
        
      }
    )
  }

  showDropDownHandler() {
    this.setState(prevState => {
      return { showDropDown: true };
    });
  }

  /*  logoutHandler() {
    localStorage.removeItem("instructorToken");
  } */

  render() {  
    let newVar = ""
    if(this.state.instructorProfile.instructor ){
      newVar = `/clubs${this.state.instructorProfile.instructor.tennisClub.split(' ').reduce((accum, element) => accum + element)}`
    }
    return (
      <div id={styles.navBarContainer}>
        <p id={styles.title}>Tennis Mate</p>
        <div id={styles.secondContainer}>
          {newVar !== "" && (
            <Link
              className={styles.links}
              to={newVar}
            >
              My Club
            </Link>
          )}
          <div onClick={this.showDropDownHandler} style={{ display: "flex" }}>
            <p style={{ cursor: "pointer" }}>
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
                <div className={styles.dropDownDiv} onClick={}>
                  <p className={styles.dropDownItem}>
                    {this.state.instructorProfile && <span
                      style={{
                        position: "relative",
                        left: "-6px",
                        padding: "0 5px",
                        boxShadow: "0px 0px 8px red",
                        color: "red",
                        borderRadius: "30px",
                        fontSize: "14px",
                        fontWeight: "bold"
                      }}
                    >
                      {this.state.notifications.length}
                    </span> }
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
    );
  }
}

const mapStateToProps = state => {
  return {
    instructor: state.authReducer.instructor,
    instructorToken: state.authReducer.instructorToken,
    instructorProfile: state.authReducer.instructorProfile.instructorProfile
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
