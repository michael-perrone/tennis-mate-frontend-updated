import React from "react";
import styles from "./CourtSlot.module.css";

class CourtSlot extends React.Component {
  constructor(props) {
    super(props);

    // this.bookCourt = this.bookCourt.bind(this);
    this.state = {
      bookedCourts: [],
      booked: false
    };
  }

  /*   bookCourt() {
    const objectToSend = {
      clubName: this.props.clubName,
      courtId: this.props.courtId
    };
    axios
      .post("http://localhost:8080/api/timeSlotBooked", objectToSend)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  } */

  render() {
    /*   let booked = false;
    for (let x = 0; x < this.props.bookedCourts.length; x++) {
      if (
        this.props.bookedCourts[x].courtId === this.props.courtId &&
        this.props.clubName === this.props.bookedCourts[x].clubName
      ) {
        booked = true;
      }
    } */
    return (
      <div
        onClick={() =>
          this.props.getCourt({
            courtId: this.props.courtId,
            timeStart: this.props.timeStart,
            endTime: this.props.timeEnd,
            clubName: this.props.clubName
          })
        }
        id={styles.courtSlot}
        style={
          this.props.booked === true
            ? { backgroundColor: "#ff9999" }
            : { backgroundColor: "#ebedf0" }
        }
      >
        {!this.props.booked && <p id={styles.time}>{this.props.timeStart}</p>}
      </div>
    );
  }
}
export default CourtSlot;
