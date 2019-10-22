import React from "react";
import styles from "./CourtContainer.module.css";
import axios from "axios";
import CourtColumns from "./CourtColumns/CourtColumns";
import CheckBookingModal from "./CheckBookingModal/CheckBookingModal";
import TryingToBookModal from "./TryingToBookModal/TryingToBookModal";
import decoder from "jwt-decode";
import BookingIntro from "./BookingIntro/BookingIntro";
import { connect } from "react-redux";

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

  componentWillMount() {
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

  courtArray = (topOfArray, courtsToLoopOver, courtToHelpRestoreId) => {
    console.log(topOfArray);
    // this.setState({ showBookingModalState: false });
    let numToAdd = "";
    if (this.props.timeChosen.timeSelected === "30 Minutes") {
      numToAdd = 1;
    } else if (this.props.timeChosen.timeSelected === "1 Hour") {
      numToAdd = 3;
    } else if (this.props.timeChosen.timeSelected === "1 Hour 30 Minutes") {
      numToAdd = 5;
    } else if (this.props.timeChosen.timeSelected === "2 Hours") {
      numToAdd = 7;
    } else if (this.props.timeChosen.timeSelected === "2 Hours 30 Minutes") {
      numToAdd = 9;
    } else if (this.props.timeChosen.timeSelected === "3 Hours") {
      numToAdd = 11;
    }

    let indexAfterIdRemoval = topOfArray.courtId.substring(1);
    console.log(indexAfterIdRemoval);
    const newArray = [];
    for (
      let i = parseInt(indexAfterIdRemoval);
      i <= parseInt(indexAfterIdRemoval) + numToAdd;
      i++
    ) {
      newArray.push({
        court: courtsToLoopOver[i],
        courtId: courtToHelpRestoreId.toString() + i.toString()
      });
    }

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

  convertTimeToCourts(numberTime) {
    let courtTimeNumber = null;
    if (numberTime === "12:00 AM") {
      courtTimeNumber = 0;
    } else if (numberTime === "12:30 AM") {
      courtTimeNumber = 2;
    } else if (numberTime === "1:00 AM") {
      courtTimeNumber = 4;
    } else if (numberTime === "1:30 AM") {
      courtTimeNumber = 6;
    } else if (numberTime === "2:00 AM") {
      courtTimeNumber = 8;
    } else if (numberTime === "2:30 AM") {
      courtTimeNumber = 10;
    } else if (numberTime === "3:00 AM") {
      courtTimeNumber = 12;
    } else if (numberTime === "3:30 AM") {
      courtTimeNumber = 14;
    } else if (numberTime === "4:00 AM") {
      courtTimeNumber = 16;
    } else if (numberTime === "4:30 AM") {
      courtTimeNumber = 18;
    } else if (numberTime === "5:00 AM") {
      courtTimeNumber = 20;
    } else if (numberTime === "5:30 AM") {
      courtTimeNumber = 22;
    } else if (numberTime === "6:00 AM") {
      courtTimeNumber = 24;
    } else if (numberTime === "6:30 AM") {
      courtTimeNumber = 26;
    } else if (numberTime === "7:00 AM") {
      courtTimeNumber = 28;
    } else if (numberTime === "7:30 AM") {
      courtTimeNumber = 30;
    } else if (numberTime === "8:00 AM") {
      courtTimeNumber = 32;
    } else if (numberTime === "8:30 AM") {
      courtTimeNumber = 34;
    } else if (numberTime === "9:00 AM") {
      courtTimeNumber = 36;
    } else if (numberTime === "9:30 AM") {
      courtTimeNumber = 38;
    } else if (numberTime === "10:00 AM") {
      courtTimeNumber = 40;
    } else if (numberTime === "10:30 AM") {
      courtTimeNumber = 42;
    } else if (numberTime === "11:00 AM") {
      courtTimeNumber = 44;
    } else if (numberTime === "11:30 AM") {
      courtTimeNumber = 46;
    } else if (numberTime === "12:00 PM") {
      courtTimeNumber = 48;
    } else if (numberTime === "12:30 PM") {
      courtTimeNumber = 50;
    } else if (numberTime === "1:00 PM") {
      courtTimeNumber = 52;
    } else if (numberTime === "1:30 PM") {
      courtTimeNumber = 54;
    } else if (numberTime === "2:00 PM") {
      courtTimeNumber = 56;
    } else if (numberTime === "2:30 PM") {
      courtTimeNumber = 58;
    } else if (numberTime === "3:00 PM") {
      courtTimeNumber = 60;
    } else if (numberTime === "3:30 PM") {
      courtTimeNumber = 62;
    } else if (numberTime === "4:00 PM") {
      courtTimeNumber = 64;
    } else if (numberTime === "4:30 PM") {
      courtTimeNumber = 66;
    } else if (numberTime === "5:00 PM") {
      courtTimeNumber = 68;
    } else if (numberTime === "5:30 PM") {
      courtTimeNumber = 70;
    } else if (numberTime === "6:00 PM") {
      courtTimeNumber = 72;
    } else if (numberTime === "6:30 PM") {
      courtTimeNumber = 74;
    } else if (numberTime === "7:00 PM") {
      courtTimeNumber = 76;
    } else if (numberTime === "7:30 PM") {
      courtTimeNumber = 78;
    } else if (numberTime === "8:00 PM") {
      courtTimeNumber = 80;
    } else if (numberTime === "8:30 PM") {
      courtTimeNumber = 82;
    } else if (numberTime === "9:00 PM") {
      courtTimeNumber = 84;
    } else if (numberTime === "9:30 PM") {
      courtTimeNumber = 86;
    } else if (numberTime === "10:00 PM") {
      courtTimeNumber = 88;
    } else if (numberTime === "10:30 PM") {
      courtTimeNumber = 90;
    } else if (numberTime === "11:00 PM") {
      courtTimeNumber = 92;
    } else if (numberTime === "11:30 PM") {
      courtTimeNumber = 94;
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
        minutes: this.state.bookingArray.length * 15,
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
            minutes: this.state.bookingArray.length * 15,
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
            minutes: this.state.bookingArray.length * 15,
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
            minutes: this.state.bookingArray.length * 15,
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
        <div id={styles.bookingIntroDiv}>
          <BookingIntro
            openTime={this.props.clubOpenTime}
            closeTime={this.props.clubCloseTime}
            clubName={this.props.clubName}
          />
          <div style={{ marginTop: "15px" }}>
            <button
              className={styles.courtButton}
              onClick={this.showTryingToBookModal}
            >
              Book Court
            </button>
            <button className={styles.courtButton} onClick={this.cancelBooking}>
              Cancel Booking
            </button>
          </div>
        </div>
        <div id={styles.courtContainer}>
          {this.courtNumbersToCourtColumns().map((element, index) => {
            return (
              <CourtColumns
                courtNumber={index}
                numberCourts={parseInt(this.props.numberCourts)}
                cancelModal={this.cancelBookingModal}
                bookingArray={this.state.bookingArray}
                getModalObject={this.showBookingModal}
                getCourt={this.courtArray}
                clubName={this.props.clubName}
                bookedCourts={this.state.bookedCourts}
                clubOpenNumber={this.convertTimeToCourts(
                  this.props.clubOpenTime
                )}
                clubCloseNumber={this.convertTimeToCourts(
                  this.props.clubCloseTime
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

const mapStateToProps = state => {
  return {
    timeChosen: state.bookingInfoReducer.timeSelected
  };
};

export default connect(mapStateToProps)(CourtContainer);
