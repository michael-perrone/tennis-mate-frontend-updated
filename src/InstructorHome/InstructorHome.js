import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./InstructorHome.module.css";
import decoder from "jwt-decode";

class InstructorHome extends React.Component {
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
            `/instructor/${instructorTokenItems.instructor.id}/createprofile`
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id={styles.instructorHomeContainer}>
        <NavBar />
      </div>
    );
  }
}

export default withRouter(InstructorHome);
