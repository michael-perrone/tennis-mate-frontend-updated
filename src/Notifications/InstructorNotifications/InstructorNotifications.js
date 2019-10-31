import React from "react";
import styles from "../Notifications.module.css";
import axios from "axios";
import { connect } from "react-redux";

class InstructorNotifications extends React.Component {
  state = {
    notifications: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/notifications/instructornotifications", {
        headers: {
          "x-auth-token": this.props.instructorToken
        }
      })
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return <div className={styles.notificationsContainer}></div>;
  }
}

const mapStateToProps = state => {
  return {
    instructorToken: state.authReducer.instructorToken
  };
};

export default connect(mapStateToProps)(InstructorNotifications);
