import React from "react";
import styles from "./BookingIntro.module.css";

class BookingIntro extends React.Component {
  render() {
    return (
      <div id={styles.bookingIntroSubDiv}>
        <p id={styles.courtP}>Court Schedule</p>
        <p style={{ width: "45%" }}>
          You are looking at the court schedule for {this.props.clubName}. You
          make book a court anytime from {this.props.openTime} to{" "}
          {this.props.closeTime}. To book a court, please select your preferred
          date for the booking on the calendar above. Once you have done so, you
          can choose the time limit of your booking, what you would like to
          book, and if needed, which instructor will be on that booking.
        </p>
      </div>
    );
  }
}

export default BookingIntro;
