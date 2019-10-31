import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import InstructorNav from "../InstructorNav/InstructorNav";
import styles from "./InstructorHome.module.css";

import { connect } from "react-redux";
import InstructorProfile from "./InstructorProfile/InstructorProfile";
import { GET_INSTRUCTOR_PROFILE } from "../actions/actions";

class InstructorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorProfile: undefined
    };
  }
  componentWillMount() {
    axios
      .get("http://localhost:8080/api/instructorProfile/myprofile", {
        headers: { "x-auth-token": this.props.instructorToken }
      })
      .then(response => {
        console.log(response);
        if (response.data.profileCreated === false) {
          this.props.history.push(
            `/instructor/${this.props.instructor.instructor.id}/createeditprofile`
          );
        } else {
          this.props.getInstructorProfile(response.data.instructorProfile);
          this.setState({ instructorProfile: response.data.instructorProfile });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.instructorProfile);
    return (
      <div id={styles.instructorHomeContainer}>
        <InstructorNav notifications={this.state.instructorProfile} />
        {this.state.instructorProfile !== undefined && (
          <InstructorProfile instructorProfile={this.state.instructorProfile} />
        )}
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
    getInstructorProfile: instructorProfile =>
      dispatch({ type: GET_INSTRUCTOR_PROFILE, payload: { instructorProfile } })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(InstructorHome)
);
