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
    if (this.props.instructorNotifications) {
      let notificationIds = [];
      this.props.instructorNotifications.forEach(element => {
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
  }

  render() {
    console.log(this.props.instructorNotifications);
    return (
      <div className={styles.notificationsContainer}>
        {this.props.instructorNotifications &&
          this.props.instructorNotifications.map(element => {
            if (element.notificationType === "Club Added Instructor") {
              return <ClubAddedInstructorNotification notification={element} />;
            }
          })}
        {this.props.instructorNotifications.length === 0 && (
          <p style={{ padding: "20px" }}>
            You do not have any notifications yet. When you get one, we will be
            sure to let you know!
          </p>
        )}
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