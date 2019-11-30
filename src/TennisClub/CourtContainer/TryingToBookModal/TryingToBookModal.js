import React from "react";
import styles from "./TryingToBookModal.module.css";
import TryingToBookHelper from "./TryingToBookHelper/TryingToBookHelper";

class TryingToBookModal extends React.Component {
  render() {
    let howLong = "";
    if (this.props.booking !== null) {
      if (this.props.booking.minutes === 30) {
        howLong = "1/2 Hour";
      } else if (this.props.booking.minutes === 60) {
        howLong = "1 Hour";
      } else if (this.props.booking.minutes === 90) {
        howLong = "1 1/2 Hours";
      } else if (this.props.booking.minutes === 120) {
        howLong = "2 Hours";
      } else if (this.props.booking.minutes === 150) {
        howLong = "2 1/2 Hours";
      } else if (this.props.booking.minutes === 180) {
        howLong = "3 Hours";
      } else if (this.props.booking.minutes > 180) {
        howLong = `${this.props.booking.minutes} Minutes`;
      }
    }
    console.log(this.props);
    return (
      <React.Fragment>
        <div id={styles.backdrop}></div>
        <div className={styles.bookingModal}>
          <div id={styles.tryingToBookTopPart}>
            <div
              style={{
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <p>Booked By: {this.props.booking.bookedBy} </p>
              <p>Start Time: {this.props.booking.timeStart}</p>
              <p>End Time: {this.props.booking.timeEnd}</p>
              {this.props.booking.instructorName !== "None" && (
                <p>Instructor Name: {this.props.booking.instructorName}</p>
              )}
              <p>Booking Type: {this.props.booking.bookingType}</p>
              <p>Time Amount: {howLong}</p>
            </div>
            <div
              style={{
                position: "relative",
                top: "15px",
                display: "flex",
                flexDirection: "column",
                width: "70px"
              }}
            >
              <button
                className={styles.cancelConfirm}
                onClick={this.props.bookCourt}
              >
                Confirm
              </button>
              <button
                className={styles.cancelConfirm}
                onClick={this.props.cancelBooking}
              >
                Cancel
              </button>
            </div>
          </div>
          <TryingToBookHelper />
        </div>
      </React.Fragment>
    );
  }
}

export default TryingToBookModal;
