import React from "react";
import styles from "./CourtContainer.module.css";
import axios from "axios";
import CourtColumns from "./CourtColumns/CourtColumns";

class CourtContainer extends React.Component {
  constructor(props) {
    super(props);
    this.courtNumbersToCourtColumns = this.courtNumbersToCourtColumns.bind(
      this
    );

    this.convertTimeToCourts = this.convertTimeToCourts.bind(this);
    this.state = {
      bookedCourts: [],
      bookingArray: [],
      bookingError: false,
      booked: false
    };
  }

  courtArray = param => {
    const newArray = [...this.state.bookingArray, param];
    const sortedStateArray = newArray.sort(function(a, b) {
      return a.courtId - b.courtId;
    });

    this.setState({ bookingArray: sortedStateArray });
    console.log(this.state.bookingArray);
  };

  bookCourtArray = () => {
    if (this.state.bookingArray.length === 1) {
      console.log("me");
      this.setState({ booked: true });
      // write post
    } else if (this.state.bookingArray.length > 0) {
      let sortedArray = this.state.bookingArray.slice();
      for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i + 1].courtId == sortedArray[i].courtId) {
          this.setState({
            bookingError: "You have selected the same timeslot multiple times"
          });
        }
      }
      if (this.state.bookingError) {
        console.log(this.state.bookingArray);
        this.setState({ booked: true });
      }
    } else {
      console.log("Yeah no");
      this.setState({ bookingError: "Please choose your courts" });
    }
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/timeSlotBooked").then(response => {
      this.setState({ bookedCourts: response.data.bookedCourts });
    });
  }

  courtNumbersToCourtColumns() {
    const newCourtsArray = [];
    for (let i = 1; i <= this.props.numberCourts; i++) {
      newCourtsArray.push({ courtNumber: i });
    }
    return newCourtsArray;
  }

  convertTimeToCourts(numberTime, timeAMPM) {
    let courtTimeNumber = null;
    if (numberTime === "12:00" && timeAMPM === "AM") {
      courtTimeNumber = 0;
    } else if (numberTime === "12:30" && timeAMPM === "AM") {
      courtTimeNumber = 1;
    } else if (numberTime === "1:00" && timeAMPM === "AM") {
      courtTimeNumber = 2;
    } else if (numberTime === "1:30" && timeAMPM === "AM") {
      courtTimeNumber = 3;
    } else if (numberTime === "2:00" && timeAMPM === "AM") {
      courtTimeNumber = 4;
    } else if (numberTime === "2:30" && timeAMPM === "AM") {
      courtTimeNumber = 5;
    } else if (numberTime === "3:00" && timeAMPM === "AM") {
      courtTimeNumber = 6;
    } else if (numberTime === "3:30" && timeAMPM === "AM") {
      courtTimeNumber = 7;
    } else if (numberTime === "4:00" && timeAMPM === "AM") {
      courtTimeNumber = 8;
    } else if (numberTime === "4:30" && timeAMPM === "AM") {
      courtTimeNumber = 9;
    } else if (numberTime === "5:00" && timeAMPM === "AM") {
      courtTimeNumber = 10;
    } else if (numberTime === "5:30" && timeAMPM === "AM") {
      courtTimeNumber = 11;
    } else if (numberTime === "6:00" && timeAMPM === "AM") {
      courtTimeNumber = 12;
    } else if (numberTime === "6:30" && timeAMPM === "AM") {
      courtTimeNumber = 13;
    } else if (numberTime === "7:00" && timeAMPM === "AM") {
      courtTimeNumber = 14;
    } else if (numberTime === "7:30" && timeAMPM === "AM") {
      courtTimeNumber = 15;
    } else if (numberTime === "8:00" && timeAMPM === "AM") {
      courtTimeNumber = 16;
    } else if (numberTime === "8:30" && timeAMPM === "AM") {
      courtTimeNumber = 17;
    } else if (numberTime === "9:00" && timeAMPM === "AM") {
      courtTimeNumber = 18;
    } else if (numberTime === "9:30" && timeAMPM === "AM") {
      courtTimeNumber = 19;
    } else if (numberTime === "10:00" && timeAMPM === "AM") {
      courtTimeNumber = 20;
    } else if (numberTime === "10:30" && timeAMPM === "AM") {
      courtTimeNumber = 21;
    } else if (numberTime === "11:00" && timeAMPM === "AM") {
      courtTimeNumber = 22;
    } else if (numberTime === "11:30" && timeAMPM === "AM") {
      courtTimeNumber = 23;
    } else if (numberTime === "12:00" && timeAMPM === "PM") {
      courtTimeNumber = 24;
    } else if (numberTime === "12:30" && timeAMPM === "PM") {
      courtTimeNumber = 25;
    } else if (numberTime === "1:00" && timeAMPM === "PM") {
      courtTimeNumber = 26;
    } else if (numberTime === "1:30" && timeAMPM === "PM") {
      courtTimeNumber = 27;
    } else if (numberTime === "2:00" && timeAMPM === "PM") {
      courtTimeNumber = 28;
    } else if (numberTime === "2:30" && timeAMPM === "PM") {
      courtTimeNumber = 29;
    } else if (numberTime === "3:00" && timeAMPM === "PM") {
      courtTimeNumber = 30;
    } else if (numberTime === "3:30" && timeAMPM === "PM") {
      courtTimeNumber = 31;
    } else if (numberTime === "4:00" && timeAMPM === "PM") {
      courtTimeNumber = 32;
    } else if (numberTime === "4:30" && timeAMPM === "PM") {
      courtTimeNumber = 33;
    } else if (numberTime === "5:00" && timeAMPM === "PM") {
      courtTimeNumber = 34;
    } else if (numberTime === "5:30" && timeAMPM === "PM") {
      courtTimeNumber = 35;
    } else if (numberTime === "6:00" && timeAMPM === "PM") {
      courtTimeNumber = 36;
    } else if (numberTime === "6:30" && timeAMPM === "PM") {
      courtTimeNumber = 37;
    } else if (numberTime === "7:00" && timeAMPM === "PM") {
      courtTimeNumber = 38;
    } else if (numberTime === "7:30" && timeAMPM === "PM") {
      courtTimeNumber = 39;
    } else if (numberTime === "8:00" && timeAMPM === "PM") {
      courtTimeNumber = 40;
    } else if (numberTime === "8:30" && timeAMPM === "PM") {
      courtTimeNumber = 41;
    } else if (numberTime === "9:00" && timeAMPM === "PM") {
      courtTimeNumber = 42;
    } else if (numberTime === "9:30" && timeAMPM === "PM") {
      courtTimeNumber = 43;
    } else if (numberTime === "10:00" && timeAMPM === "PM") {
      courtTimeNumber = 44;
    } else if (numberTime === "10:30" && timeAMPM === "PM") {
      courtTimeNumber = 45;
    } else if (numberTime === "11:00" && timeAMPM === "PM") {
      courtTimeNumber = 46;
    } else if (numberTime === "11:30" && timeAMPM === "PM") {
      courtTimeNumber = 47;
    }
    return courtTimeNumber;
  }

  render() {
    return (
      <div>
        <button style={{ marginLeft: "400px" }} onClick={this.bookCourtArray}>
          Book Court
        </button>
        <div id={styles.courtContainer}>
          {this.courtNumbersToCourtColumns().map(element => {
            return (
              <CourtColumns
                getCourt={this.courtArray}
                clubName={this.props.clubName}
                bookedCourts={this.state.bookedCourts}
                clubOpenNumber={this.convertTimeToCourts(
                  this.props.clubOpenTimeNumber,
                  this.props.clubOpenTimeAMPM
                )}
                clubCloseNumber={this.convertTimeToCourts(
                  this.props.clubCloseTimeNumber,
                  this.props.clubCloseTimeAMPM
                )}
                key={element.courtNumber}
                courtNumber={element.courtNumber}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CourtContainer;
