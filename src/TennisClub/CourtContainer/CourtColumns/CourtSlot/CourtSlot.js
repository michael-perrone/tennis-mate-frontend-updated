import React from "react";
import styles from "./CourtSlot.module.css";
import axios from "axios";

class CourtSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booked: false
    };
    this.anything = this.anything.bind(this);
    this.bookCourt = this.bookCourt.bind(this);
  }

  static getDerivedStateFromProps() {
    for (let i = 0; i < this.props.bookedCourts.length; i++) {
      console.log(this.props.bookedCourts[i].courtId, this.props.courtId);
      if (this.props.courtId == this.props.bookedCourts[i].courtId) {
        this.setState({ booked: true });
      }
    }
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
    return (
      <div
        onClick={this.bookCourt}
        id={styles.courtSlot}
        style={
          this.state.booked
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
