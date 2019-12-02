import React from "react";
import otherstyles from "../TryingToBookModal/TryingToBookModal.module.css";

class CheckBookingModal extends React.Component {
  render() {
    return (
      <div className={otherstyles.bookingModal}>
        <button
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={this.props.cancel}
        >
          X
        </button>
        <p style={{ padding: "5px" }}>
          Booked by: {this.props.objectToModal.bookedBy}
        </p>
        <p style={{ padding: "5px" }}>
          Booking starts: {this.props.objectToModal.timeStart}
        </p>
        <p style={{ padding: "5px" }}>
          Booking ends: {this.props.objectToModal.timeEnd}
        </p>
        <p style={{ padding: "5px" }}>
          Booking Type: {this.props.objectToModal.bookingType}
        </p>
        {this.props.objectToModal.instructorName !== "None" && (
          <p style={{ padding: "5px" }}>
            Instructor: {this.props.objectToModal.instructorName}
          </p>
        )}
      </div>
    );
  }
}

export default CheckBookingModal;
