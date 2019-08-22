import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import InstructorNav from "../InstructorNav/InstructorNav";
import styles from "./InstructorHome.module.css";
import decoder from "jwt-decode";
import InstructorProfile from "./InstructorProfile/InstructorProfile";

class InstructorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorProfile: undefined
    };
  }
  componentDidMount() {
    const instructorTokenItems = decoder(
      localStorage.getItem("instructorToken")
    );
    const instructorToken = localStorage.getItem("instructorToken");
    axios
      .get("http://localhost:8080/api/instructorProfile/myprofile", {
        headers: { "x-auth-token": instructorToken }
      })
      .then(response => {
        console.log(response);
        if (response.data.profileCreated === false) {
          this.props.history.push(
            `/instructor/${
              instructorTokenItems.instructor.id
            }/createeditprofile`
          );
        } else {
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
        <InstructorNav />
        {this.state.instructorProfile !== undefined && (
          <InstructorProfile instructorProfile={this.state.instructorProfile} />
        )}
      </div>
    );
  }
}

export default withRouter(InstructorHome);
