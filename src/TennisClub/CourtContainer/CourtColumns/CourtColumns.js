import React from "react";
import styles from "./CourtColumns.module.css";
import CourtSlot from "./CourtSlot/CourtSlot";

class CourtColumns extends React.Component {
  constructor(props) {
    super(props);
    this.turnNumberIntoCourts = this.turnNumberIntoCourts.bind(this);
    this.convertNumberBackToTime = this.convertNumberBackToTime.bind(this);
    this.state = {
      courtsInColumn: [],
      bookedCourts: this.props.bookedCourts,
      bookingArray: []
    };
  }

  componentWillMount() {
    this.turnNumberIntoCourts();
  }

  convertNumberBackToTime(number) {
    let timeFromNumber = "";
    if (number === 0) {
      timeFromNumber = "12:00 AM";
    } else if (number === 1) {
      timeFromNumber = "12:30 AM";
    } else if (number === 2) {
      timeFromNumber = "1:00 AM";
    } else if (number === 3) {
      timeFromNumber = "1:30 AM";
    } else if (number === 4) {
      timeFromNumber = "2:00 AM";
    } else if (number === 5) {
      timeFromNumber = "2:30 AM";
    } else if (number === 6) {
      timeFromNumber = "3:00 AM";
    } else if (number === 7) {
      timeFromNumber = "3:30 AM";
    } else if (number === 8) {
      timeFromNumber = "4:00 AM";
    } else if (number === 9) {
      timeFromNumber = "4:30 AM";
    } else if (number === 10) {
      timeFromNumber = "5:00 AM";
    } else if (number === 11) {
      timeFromNumber = "5:30 AM";
    } else if (number === 12) {
      timeFromNumber = "6:00 AM";
    } else if (number === 13) {
      timeFromNumber = "6:30 AM";
    } else if (number === 14) {
      timeFromNumber = "7:00 AM";
    } else if (number === 15) {
      timeFromNumber = "7:30 AM";
    } else if (number === 16) {
      timeFromNumber = "8:00 AM";
    } else if (number === 17) {
      timeFromNumber = "8:30 AM";
    } else if (number === 18) {
      timeFromNumber = "9:00 AM";
    } else if (number === 19) {
      timeFromNumber = "9:30 AM";
    } else if (number === 20) {
      timeFromNumber = "10:00 AM";
    } else if (number === 21) {
      timeFromNumber = "10:30 AM";
    } else if (number === 22) {
      timeFromNumber = "11:00 AM";
    } else if (number === 23) {
      timeFromNumber = "11:30 AM";
    } else if (number === 24) {
      timeFromNumber = "12:00 PM";
    } else if (number === 25) {
      timeFromNumber = "12:30 PM";
    } else if (number === 26) {
      timeFromNumber = "1:00 PM";
    } else if (number === 27) {
      timeFromNumber = "1:30 PM";
    } else if (number === 28) {
      timeFromNumber = "2:00 PM";
    } else if (number === 29) {
      timeFromNumber = "2:30 PM";
    } else if (number === 30) {
      timeFromNumber = "3:00 PM";
    } else if (number === 31) {
      timeFromNumber = "3:30 PM";
    } else if (number === 32) {
      timeFromNumber = "4:00 PM";
    } else if (number === 33) {
      timeFromNumber = "4:30 PM";
    } else if (number === 34) {
      timeFromNumber = "5:00 PM";
    } else if (number === 35) {
      timeFromNumber = "5:30 PM";
    } else if (number === 36) {
      timeFromNumber = "6:00 PM";
    } else if (number === 37) {
      timeFromNumber = "6:30 PM";
    } else if (number === 38) {
      timeFromNumber = "7:00 PM";
    } else if (number === 39) {
      timeFromNumber = "7:30 PM";
    } else if (number === 40) {
      timeFromNumber = "8:00 PM";
    } else if (number === 41) {
      timeFromNumber = "8:30 PM";
    } else if (number === 42) {
      timeFromNumber = "9:00 PM";
    } else if (number === 43) {
      timeFromNumber = "9:30 PM";
    } else if (number === 44) {
      timeFromNumber = "10:00 PM";
    } else if (number === 45) {
      timeFromNumber = "10:30 PM";
    } else if (number === 46) {
      timeFromNumber = "11:00 PM";
    } else if (number === 47) {
      timeFromNumber = "11:30 PM";
    }
    return timeFromNumber;
  }

  turnNumberIntoCourts() {
    const newCourtsArray = [];
    for (
      let i = this.props.clubOpenNumber;
      i < this.props.clubCloseNumber;
      i++
    ) {
      newCourtsArray.push({
        timeStart: this.convertNumberBackToTime(i),
        timeEnd: this.convertNumberBackToTime(i + 1)
      });
    }
    this.setState({ courtsInColumn: newCourtsArray });
  }

  sendBookingInfo = courtId => {
    let objectSending = null;
    this.props.bookedCourts.forEach(element => {
      if (courtId === element.courtIds[0]) {
        objectSending = element;
      }
    });
    return objectSending;
  };

  borderDivEnd = courtId => {
    let getLastElement = "";
    this.props.bookedCourts.forEach(element => {
      if (
        courtId === element.courtIds[element.courtIds.length - 1] &&
        element.courtIds.length > 1
      ) {
        getLastElement = true;
      }
    });
    return getLastElement;
  };

  checkBooked = courtId => {
    let booked = [];
    let checkingVar = false;
    this.props.bookedCourts.forEach(element1 => {
      element1.courtIds.forEach(element => {
        booked.push(element);
      });
    });
    booked.forEach(element => {
      if (courtId === element) {
        checkingVar = true;
      }
    });
    return checkingVar;
  };

  beingBooked = courtId => {
    let beingBooked = false;
    this.props.bookingArray.forEach(element => {
      if (element.courtId === courtId) {
        beingBooked = true;
      }
    });
    return beingBooked;
  };

  render() {
    return (
      <div>
        <p style={{ textAlign: "center" }}>Court: {this.props.courtNumber}</p>
        <div id={styles.courtColumn}>
          {this.state.courtsInColumn.map((element, index) => {
            return (
              <CourtSlot
                beingBooked={this.beingBooked(
                  `${this.props.courtNumber.toString() + index.toString()}`
                )}
                getModalObject={this.props.getModalObject}
                isLast={this.borderDivEnd(
                  `${this.props.courtNumber.toString() + index.toString()}`
                )}
                booked={this.checkBooked(
                  `${this.props.courtNumber.toString() + index.toString()}`
                )}
                bookingInfo={this.sendBookingInfo(
                  `${this.props.courtNumber.toString() + index.toString()}`
                )}
                getCourt={this.props.getCourt}
                clubName={this.props.clubName}
                courtNumber={this.props.courtNumber}
                timeStart={element.timeStart}
                timeEnd={element.timeEnd}
                key={`${this.props.courtNumber.toString() + index.toString()}`}
                courtId={`${this.props.courtNumber.toString() +
                  index.toString()}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CourtColumns;
