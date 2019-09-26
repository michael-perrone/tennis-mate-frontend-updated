import React from "react";
import styles from "./CourtContainer.module.css";
import axios from "axios";
import CourtColumns from "./CourtColumns/CourtColumns";
import CheckBookingModal from "./CheckBookingModal/CheckBookingModal";
import TryingToBookModal from "./TryingToBookModal/TryingToBookModal";
import decoder from "jwt-decode";

class CourtContainer extends React.Component {
  constructor(props) {
    super(props);
    this.courtNumbersToCourtColumns = this.courtNumbersToCourtColumns.bind(
      this
    );
    // objectToModal
    this.convertTimeToCourts = this.convertTimeToCourts.bind(this);
    this.state = {
      bookedCourts: [],
      bookingArray: [],
      bookingError: "",
      booking: false,
      showBookingModalState: false,
      objectToModal: {},
      tryingToBookModalState: false,
      bookingToSend: null,
      token: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      const token = decoder(localStorage.getItem("token"));
      this.setState({ token: token });
    }
    if (localStorage.getItem("adminToken")) {
      const adminToken = decoder(localStorage.getItem("adminToken"));
      this.setState({ token: adminToken });
    }
    if (localStorage.getItem("instructorToken")) {
      const instructorToken = decoder(localStorage.getItem("instructorToken"));
      this.setState({ token: instructorToken });
    }
    axios.get("http://localhost:8080/api/courtBooked").then(response => {
      let clubsMatchArray = [];
      response.data.bookings.forEach(element => {
        if (
          element.clubName === this.props.clubName &&
          this.props.date === element.date
        ) {
          clubsMatchArray.push(element);
        }
      });
      this.setState({ bookedCourts: clubsMatchArray });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.date !== this.props.date) {
      axios.get("http://localhost:8080/api/courtBooked").then(response => {
        let clubsMatchArray = [];
        response.data.bookings.forEach(element => {
          if (
            element.clubName === this.props.clubName &&
            this.props.date === element.date
          ) {
            clubsMatchArray.push(element);
          }
        });
        this.setState({ bookedCourts: clubsMatchArray });
      });
    }
  }

  showBookingModal = objectToModal => () => {
    this.setState({ objectToModal, showBookingModalState: true });
  };

  cancelBookingModal = () => {
    this.setState({ showBookingModalState: false });
  };

  courtArray = param => () => {
    this.setState({ showBookingModalState: false });
    const newArray = [...this.state.bookingArray, param];
    const sortedStateArray = newArray.sort(function(a, b) {
      return a.courtId - b.courtId;
    });

    this.setState({ bookingArray: sortedStateArray });
  };

  bookCourtArray = () => {
    if (this.state.bookingToSend !== null) {
      axios
        .post("http://localhost:8080/api/courtBooked", this.state.bookingToSend)
        .then(response => {
          console.log(response);
        });
    }
  };

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

  showTryingToBookModal = () => {
    if (this.state.bookingArray.length === 1) {
      const courtIdsArray = [];
      this.state.bookingArray.forEach(element => {
        courtIdsArray.push(element.courtId);
      });
      const bookingToSend = {
        bookedBy: `${this.state.token.user.userNameFirst} ${this.state.token.user.userNameLast}`,
        timeStart: this.state.bookingArray[0].timeStart,
        timeEnd: this.state.bookingArray[this.state.bookingArray.length - 1]
          .endTime,
        courtIds: courtIdsArray,
        minutes: this.state.bookingArray.length * 30,
        clubName: this.props.clubName,
        date: this.props.date
      };
      this.setState({ bookingToSend });
    }
    if (this.state.bookingArray.length > 0) {
      let resultsArray = [];
      let sortedArray = this.state.bookingArray.slice();
      for (let i = 0; i < sortedArray.length - 1; i++) {
        // eslint-disable-next-line eqeqeq
        if (sortedArray[i + 1].courtId == sortedArray[i].courtId) {
          resultsArray.push(sortedArray[i]);
        }
      }
      let otherResultsArray = [];
      let otherSortedArray = this.state.bookingArray.slice();
      for (let x = 0; x < sortedArray.length - 1; x++) {
        if (
          // eslint-disable-next-line eqeqeq
          otherSortedArray[x + 1].courtId - 1 !=
          otherSortedArray[x].courtId
        ) {
          otherResultsArray.push(otherSortedArray[x].courtId);
          // console.log("got it");
        }
      }
      if (resultsArray.length > 0) {
        console.log("cant click same one twice");
        this.setState({
          bookingError: "You cannot select the same time slot twice"
        });
      }
      if (otherResultsArray.length > 0) {
        console.log("have to be in order");
        this.setState({
          bookingError:
            "You cannot select courts that are not connected in time slots"
        });
      }

      if (resultsArray.length === 0 && otherResultsArray.length === 0) {
        const courtIdsArray = [];
        this.state.bookingArray.forEach(element => {
          courtIdsArray.push(element.courtId);
        });

        if (this.state.token.admin) {
          const bookingToSend = {
            bookedBy: this.state.token.admin.name,
            timeStart: this.state.bookingArray[0].timeStart,
            timeEnd: this.state.bookingArray[this.state.bookingArray.length - 1]
              .endTime,
            courtIds: courtIdsArray,
            minutes: this.state.bookingArray.length * 30,
            clubName: this.props.clubName,
            date: this.props.date
          };
          this.setState({ bookingToSend });
        }
        if (this.state.token.user) {
          const bookingToSend = {
            bookedBy: this.state.token.user.userName,
            timeStart: this.state.bookingArray[0].timeStart,
            timeEnd: this.state.bookingArray[this.state.bookingArray.length - 1]
              .endTime,
            courtIds: courtIdsArray,
            minutes: this.state.bookingArray.length * 30,
            clubName: this.props.clubName,
            date: this.props.date
          };
          this.setState({ bookingToSend });
        }
        if (this.state.token.instructor) {
          const bookingToSend = {
            bookedBy: this.state.token.instructor.instructorName,
            timeStart: this.state.bookingArray[0].timeStart,
            timeEnd: this.state.bookingArray[this.state.bookingArray.length - 1]
              .endTime,
            courtIds: courtIdsArray,
            minutes: this.state.bookingArray.length * 30,
            clubName: this.props.clubName,
            date: this.props.date
          };
          this.setState({ bookingToSend });
        }
      }
      this.setState(prevState => {
        return { tryingToBookModalState: !prevState.tryingToBookModalState };
      });
    }
  };

  cancelBooking = () => {
    this.setState({ tryingToBookModalState: false });
    this.setState({ bookingArray: [] });
  };

  render() {
    console.log(this.state.token);
    return (
      <div>
        {this.state.showBookingModalState && (
          <CheckBookingModal
            cancel={this.cancelBookingModal}
            objectToModal={this.state.objectToModal}
          />
        )}
        {this.state.tryingToBookModalState && (
          <TryingToBookModal
            booking={this.state.bookingToSend}
            cancelBooking={this.cancelBooking}
            bookCourt={this.bookCourtArray}
          />
        )}
        <button
          style={{ marginLeft: "400px" }}
          onClick={this.showTryingToBookModal}
        >
          Book Court
        </button>
        <button onClick={this.cancelBooking}>Cancel Booking</button>
        <div id={styles.courtContainer}>
          {this.courtNumbersToCourtColumns().map(element => {
            return (
              <CourtColumns
                cancelModal={this.cancelBookingModal}
                bookingArray={this.state.bookingArray}
                getModalObject={this.showBookingModal}
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
