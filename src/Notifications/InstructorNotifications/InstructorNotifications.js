import React from "react";
import styles from "../Notifications.module.css";
import axios from "axios";
import { connect } from "react-redux";
import ClubAddedInstructorNotification from "./ClubAddedInstructorNotification/ClubAddedInstructorNotification";

class InstructorNotifications extends React.Component {
  state = {
    notifications: [],
    notificationIds: []
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
        const notificationIds = [];
        if (response.data.notifications) {
          this.setState({ notifications: response.data.notifications });
          response.data.notifications.forEach(element => {
            if (element.notificationRead === false) {
              notificationIds.push(element._id);
            }
          });
          if (notificationIds.length > 0) {
            axios
              .post("http://localhost:8080/api/notifications/updateread", {
                notificationIds: notificationIds
              })
              .then(response => {
                console.log(response);
              });
          }
        }
      });
  }

  render() {
    return (
      <div className={styles.notificationsContainer}>
        {this.state.notifications.map(element => {
          if (element.notificationType === "Club Added Instructor") {
            return <ClubAddedInstructorNotification notification={element} />;
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    instructorToken: state.authReducer.instructorToken
  };
};

export default connect(mapStateToProps)(InstructorNotifications);
