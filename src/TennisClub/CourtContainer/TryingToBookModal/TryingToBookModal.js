import React from "react";
import styles from "./TryingToBookModal.module.css";
import TryingToBookHelper from "./TryingToBookHelper/TryingToBookHelper";

class TryingToBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBookingHelper: false
    };
    this.nextHandler = this.nextHandler.bind(this);
    this.goBackHandler = this.goBackHandler.bind(this);
  }

  nextHandler() {
    this.setState({ showBookingHelper: true });
  }

  goBackHandler() {
    this.setState({ showBookingHelper: false });
  }

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
        <div onClick={this.props.cancelBooking} id={styles.backdrop}></div>
        <div className={styles.bookingModal}>
          {!this.state.showBookingHelper && (
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
                  onClick={this.nextHandler}
                >
                  Next
                </button>
                <button
                  className={styles.cancelConfirm}
                  onClick={this.props.cancelBooking}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {this.state.showBookingHelper && (
            <div>
              <i
                style={{
                  position: "absolute",
                  left: "10px",
                  cursor: "pointer",
                  top: "5px",
                  fontSize: "18px"
                }}
                onClick={this.goBackHandler}
                className="fas fa-arrow-left"
              ></i>
              <p style={{ position: "relative", top: "6px" }}>Players</p>
            </div>
          )}
          {this.state.showBookingHelper && (
            <TryingToBookHelper bookCourt={this.props.bookCourt} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TryingToBookModal;
