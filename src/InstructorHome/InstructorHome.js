import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./InstructorHome.module.css";
import InstructorProfileCreate from "./InstructorProfileCreate/InstructorProfileCreate";

class InstructorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileCreated: ""
    };
  }

  componentDidMount() {
    const instructorToken = localStorage.getItem("instructorToken");
    axios
      .get("http://localhost:8080/api/instructorProfile/myprofile", {
        headers: { "x-auth-token": instructorToken }
      })
      .then(response => {
        this.setState({ profileCreated: response.data.profileCreated });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id={styles.instructorHomeContainer}>
        <NavBar />

        {this.state.profileCreated === false && <InstructorProfileCreate />}
      </div>
    );
  }
}

export default withRouter(InstructorHome);
