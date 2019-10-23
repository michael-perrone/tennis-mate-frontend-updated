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

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.date !== nextProps.date) {
      console.log(this.props.date, nextProps.date);
      return true;
    }
    if (this.props.beingBooked === nextProps.beingBooked) {
      if (
        this.props.courtId === nextProps.firstSlotInArray.courtId ||
        this.props.courtId === nextProps.lastSlotInArray.courtId ||
        this.props.courtId === this.props.lastSlotInArray.courtId ||
        this.props.courtId === this.props.firstSlotInArray.courtId
      ) {
        console.log(
          this.props.courtId,
          "Compared to",
          nextProps.firstSlotInArray.courtId,
          nextProps.lastSlotInArray.courtId,
          this.props.lastSlotInArray.courtId,
          this.props.firstSlotInArray.courtId
        );
        console.log(this.props.date, "compared to", nextProps.date);
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.beingBooked ? "lightgreen" : "",
          borderBottom: this.props.beingBooked ? "1px solid lightgreen" : ""
        }}
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
              zIndex: "300",
              justifyContent: "center"
            }}
            onMouseOver={this.props.getCourt({
              courtId: this.props.courtId,
              timeStart: this.props.timeStart,
              endTime: this.props.timeEnd,
              clubName: this.props.clubName
            })}
          >
            <p id={styles.time}>{this.props.timeStart}</p>
          </div>
        )}
        {!this.props.booked &&
          this.props.beingBooked &&
          this.props.courtId === this.props.firstSlotInArray.courtId &&
          this.props.firstSlotInArray.courtId !==
            this.props.lastSlotInArray.courtId && (
            <div
              style={{
                borderTop: "1px solid black",
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                height: "100%",
                width: "100%",
                backgroundColor: "lightgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                zIndex: "300"
              }}
              onMouseOver={this.props.getCourt({
                courtId: this.props.courtId,
                timeStart: this.props.timeStart,
                endTime: this.props.timeEnd,
                clubName: this.props.clubName
              })}
            >
              <p id={styles.time}>{this.props.timeStart}</p>
            </div>
          )}
        {!this.props.booked &&
          this.props.beingBooked &&
          this.props.courtId === this.props.lastSlotInArray.courtId &&
          this.props.lastSlotInArray.courtId !==
            this.props.firstSlotInArray.courtId && (
            <div
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderTop: "none",
                height: "100%",
                width: "100%",
                backgroundColor: "lightgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "300"
              }}
              onMouseOver={this.props.getCourt({
                courtId: this.props.courtId,
                timeStart: this.props.timeStart,
                endTime: this.props.timeEnd,
                clubName: this.props.clubName
              })}
            >
              <p id={styles.time}>{this.props.timeEnd}</p>
            </div>
          )}
        {!this.props.booked &&
          this.props.beingBooked &&
          this.props.courtId !== this.props.firstSlotInArray.courtId &&
          this.props.courtId !== this.props.lastSlotInArray.courtId &&
          this.props.bookingArray.length > 1 && (
            <div
              style={{
                height: "100%",
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                width: "100%",
                backgroundColor: "lightgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                zIndex: "300"
              }}
              onMouseOver={this.props.getCourt({
                courtId: this.props.courtId,
                timeStart: this.props.timeStart,
                endTime: this.props.timeEnd,
                clubName: this.props.clubName
              })}
            ></div>
          )}
        {this.props.firstSlotInArray.courtId ===
          this.props.lastSlotInArray.courtId &&
          this.props.beingBooked &&
          !this.props.booked && (
            <div
              style={{
                height: "100%",
                border: "1px solid black",
                width: "100%",
                backgroundColor: "lightgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "300"
              }}
              onMouseOver={this.props.getCourt({
                courtId: this.props.courtId,
                timeStart: this.props.timeStart,
                endTime: this.props.timeEnd,
                clubName: this.props.clubName
              })}
            >
              <p id={styles.time}>{this.props.timeStart}</p>
            </div>
          )}
      </div>
    );
  }
}
export default CourtSlot;
