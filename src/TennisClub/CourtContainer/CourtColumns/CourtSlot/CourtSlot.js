import React from "react";
import styles from "./CourtSlot.module.css";

class CourtSlot extends React.Component {
  constructor(props) {
    super(props);

    // this.bookCourt = this.bookCourt.bind(this);
    this.state = {
      bookedCourts: [],
      booking: false
    };
  }

  click = courtId => {};

  render() {
    return (
      <div
        id={
          !this.props.booked
            ? styles.courtSlotNotBooked
            : styles.courtSlotBooked
        }
      >
        {this.props.booked && this.props.isLast && (
          <div
            style={{
              borderTop: "none",
              height: "100%",
              width: "100%",
              borderBottom: "2px solid black"
            }}
          />
        )}

        {this.props.booked && this.props.bookingInfo !== null && (
          <div
            onClick={this.props.getModalObject(this.props.bookingInfo)}
            id={styles.bookingInfo}
          >
            <p>Check Booking</p>
          </div>
        )}
        {!this.props.booked && !this.props.beingBooked && (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={() =>
              this.props.getCourt(
                {
                  courtId: this.props.courtId,
                  timeStart: this.props.timeStart,
                  endTime: this.props.timeEnd,
                  clubName: this.props.clubName
                },
                this.click
              )
            }
          >
            <p id={styles.time}>{this.props.timeStart}</p>
          </div>
        )}
        {!this.props.booked && this.props.beingBooked && (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "green"
            }}
          >
            <p id={styles.time}>Selected: {this.props.timeStart}</p>
          </div>
        )}
      </div>
    );
  }
}
export default CourtSlot;
