import React from "react";
import styles from "./CourtSlot.module.css";
import axios from "axios";

class CourtSlot extends React.Component {
  constructor(props) {
    super(props);

    this.bookCourt = this.bookCourt.bind(this);
    this.state = {
      bookedCourts: [],
      booked: false
    };
  }

  bookCourt() {
    const objectToSend = {
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
  }

  render() {
    let booked = false;
    for (let x = 0; x < this.props.bookedCourts.length; x++) {
      if (this.props.bookedCourts[x].courtId === this.props.courtId) {
        booked = true;
      }
    }
    return (
      <div
        onClick={this.bookCourt}
        id={styles.courtSlot}
        style={
          booked === true
            ? { backgroundColor: "#ff9999" }
            : { backgroundColor: "#ebedf0" }
        }
      >
        {!booked && <p id={styles.time}>{this.props.timeStart}</p>}
      </div>
    );
  }
}
export default CourtSlot;
