import React from "react";
import styles from "./TryingToBookModal.module.css";

class TryingToBookModal extends React.Component {
  render() {
    let howLong = "";
    if (this.props.booking !== null) {
      if (this.props.booking.minutes === 30) {
        howLong = "Half Hour";
      } else if (this.props.booking.minutes === 60) {
        howLong = "One Hour";
      } else if (this.props.booking.minutes === 90) {
        howLong = "One and One Half Hours";
      } else if (this.props.booking.minutes === 120) {
        howLong = "Two Hours";
      } else if (this.props.booking.minutes === 150) {
        howLong = "Two and One Half Hours";
      } else if (this.props.booking.minutes === 180) {
        howLong = "Three Hours";
      } else if (this.props.booking.minutes > 180) {
        howLong = `${this.props.booking.minutes} Minutes`;
      }
    }
    console.log(this.props);
    return (
      <div className={styles.tryingToBookModal}>
        <p style={{ paddingLeft: "10px" }}>
          Booked By: {this.props.booking.bookedBy}{" "}
        </p>
        <p style={{ paddingLeft: "10px" }}>
          Start Time: {this.props.booking.timeStart}
        </p>
        <p style={{ paddingLeft: "10px" }}>
          End Time: {this.props.booking.timeEnd}
        </p>
        <p style={{ paddingLeft: "10px" }}>Time Amount: {howLong}</p>
        <button id={styles.cancelButton} onClick={this.props.cancelBooking}>
          X
        </button>
        <div>
          <button id={styles.confirmButton} onClick={this.props.bookCourt}>
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default TryingToBookModal;
