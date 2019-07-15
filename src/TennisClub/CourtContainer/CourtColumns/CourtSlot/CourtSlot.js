import React from "react";
import styles from "./CourtSlot.module.css";

class CourtSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booked: false
    };

    this.bookCourt = this.bookCourt.bind(this);
  }

  bookCourt() {
    this.setState(prevState => {
      return { booked: !prevState.booked };
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
