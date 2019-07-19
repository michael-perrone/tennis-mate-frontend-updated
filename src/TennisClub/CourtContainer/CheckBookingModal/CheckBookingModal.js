import React from "react";
import styles from "./CheckBookingModal.module.css";

class CheckBookingModal extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id={styles.bookingModal}>
        <p>Booking starts: {this.props.objectToModal.timeStart}</p>
        <p>Booking ends: {this.props.objectToModal.timeEnd}</p>
      </div>
    );
  }
}

export default CheckBookingModal;
