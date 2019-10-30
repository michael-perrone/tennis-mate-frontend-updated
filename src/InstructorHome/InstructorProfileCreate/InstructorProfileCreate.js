import React from "react";
import styles from "./InstructorProfileCreate.module.css";
import InstructorProfileCreateForm from "./InstructorProfileCreateForm/InstructorProfileCreateForm";
import InstructorNav from "../../InstructorNav/InstructorNav";
import { connect } from "react-redux";
import axios from 'axios';

class InstructorProfileCreate extends React.Component {

  componentWillMount() {
    axios
    .get("http://localhost:8080/api/instructorProfile/myprofile", {
      headers: { "x-auth-token": this.props.instructorToken }
    })
    .then(response => {
      console.log(response)
   } ).catch(error => {
      console.log(error)
    })
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <InstructorNav />
        <div id={styles.instructorProfileCreateContainer}>
          <div id={styles.paragraphContainer}>
            <p>
              Thanks for joining Tennis Mate{" "}
              {this.props.instructor.instructor.instructorName.split(" ", 1)}.
              You can now finish creating your profile. To the right you can
              fill out information telling other tennis players a little more
              about you. You can add information about past jobs, certifications
              you have obtained, years teaching, pricing and other great things
              about you. If you devcide to skip making a profile for now, you
              can always come back to it later.
            </p>
          </div>
          <InstructorProfileCreateForm />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    instructor: state.authReducer.instructor,
    instructorToken: state.authReducer.instructorToken,
  };
};

export default connect(mapStateToProps)(InstructorProfileCreate);
