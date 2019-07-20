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
      <div id={styles.tryingToBookModal}>
        <p>Court Being Booked By: </p>
        <p>Start Time: {this.props.booking.timeStart}</p>
        <p>End Time: {this.props.booking.timeEnd}</p>
        <p>Time Amount: {howLong}</p>
        <button onClick={this.props.cancelBooking}>x</button>
        <button onClick={this.props.bookCourt}>Confirm</button>
      </div>
    );
  }
}

export default TryingToBookModal;
