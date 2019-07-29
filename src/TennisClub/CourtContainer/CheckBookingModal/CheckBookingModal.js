import React from "react";
import styles from "./CheckBookingModal.module.css";

class CheckBookingModal extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id={styles.bookingModal}>
        <p onClick={this.props.cancel}>x</p>
        <p>Booked by: {this.props.objectToModal.bookedBy}</p>
        <p>Booking starts: {this.props.objectToModal.timeStart}</p>
        <p>Booking ends: {this.props.objectToModal.timeEnd}</p>
      </div>
    );
  }
}

export default CheckBookingModal;
