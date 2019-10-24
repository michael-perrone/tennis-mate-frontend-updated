import React from "react";
import styles from "./CheckBookingModal.module.css";
import otherstyles from "../TryingToBookModal/TryingToBookModal.module.css";

class CheckBookingModal extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={otherstyles.bookingModal}>
        <button
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={this.props.cancel}
        >
          X
        </button>
        <p>Booked by: {this.props.objectToModal.bookedBy}</p>
        <p>Booking starts: {this.props.objectToModal.timeStart}</p>
        <p>Booking ends: {this.props.objectToModal.timeEnd}</p>
      </div>
    );
  }
}

export default CheckBookingModal;
