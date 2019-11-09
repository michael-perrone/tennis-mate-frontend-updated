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
      profileCreated: false,
      instructorProfile: undefined
    };
  }
  componentDidMount() {
    if (this.props.instructorToken) {
      axios
        .get("http://localhost:8080/api/instructorProfile/myprofile", {
          headers: { "x-auth-token": this.props.instructorToken }
        })
        .then(response => {
          if (response.data.profileCreated === false) {
            this.setState({ profileCreated: false });
            this.props.history.push(
              `/instructor/${this.props.instructor.instructor.id}/createeditprofile`
            );
          } else {
            this.setState({ profileCreated: true });
            this.props.getInstructorProfile(response.data.instructorProfile);
            this.setState({
              instructorProfile: response.data.instructorProfile
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
      if (this.props.userToken) {
        this.setState({ profileCreated: true });
      }
    }
  }

  render() {
    console.log(this.props.match.params.instructorId);
    console.log(this.props);
    return (
      <div id={styles.instructorHomeContainer}>
        {this.state.profileCreated && <InstructorNav />}

        {this.state.instructorProfile !== undefined && (
          <InstructorProfile instructorProfile={this.state.instructorProfile} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showNotifications: state.booleanReducers.showNotifications,
    instructor: state.authReducer.instructor,
    instructorToken: state.authReducer.instructorToken,
    userToken: state.authReducer.userToken,
    adminToken: state.authReducer.adminToken
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
