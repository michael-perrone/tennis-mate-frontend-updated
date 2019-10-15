import React from "react";
import axios from "axios";
import styles from "./TennisClub.module.css";
import CourtContainer from "./CourtContainer/CourtContainer";
import Calendar from "./Calendar/Calendar";
import decoder from "jwt-decode";

class TennisClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      club: "",
      showCourts: false,
      dateChosenForCourts: "",
      adminClubName: ""
    };

    this.onDateClick = this.onDateClick.bind(this);
  }
  componentWillMount() {
    if (localStorage.getItem("adminToken")) {
      const admin = decoder(localStorage.getItem("adminToken"));
      console.log(admin.admin.clubName);
      axios
        .post("http://localhost:8080/api/club", {
          clubName: admin.admin.clubName
        })
        .then(response => {
          this.setState({ club: response.data.tennisClub });
        });
    } else {
      axios
        .post("http://localhost:8080/api/club", {
          clubName: this.props.match.params.clubName
        })
        .then(response => {
          this.setState({ club: response.data.tennisClub });
        });
    }
  }

  onDateClick(date) {
    return () => {
      this.setState({ showCourts: true });
      this.setState({ dateChosenForCourts: date });
    };
  }

  render() {
    console.log(this.state);
    return (
      <div style={{ marginTop: "200px" }} id={styles.mainContainer}>
        {localStorage.getItem("adminToken") === undefined ||
          (localStorage.getItem("adminToken") === null && (
            <p>{this.state.club.clubName}</p>
          ))}

        {localStorage.getItem("adminToken") !== undefined &&
          (localStorage.getItem("adminToken") !== null && (
            <p>{this.state.adminClubName}</p>
          ))}

        <Calendar
          date={this.state.dateChosenForCourts}
          onDateClick={this.onDateClick}
        />

        {this.state.showCourts && (
          <CourtContainer
            date={`${this.state.dateChosenForCourts.getMonth() +
              1} ${this.state.dateChosenForCourts.getDate()} ${this.state.dateChosenForCourts.getYear() +
              1900}`}
            clubName={this.state.club.clubName}
            clubOpenTime={this.state.club.clubOpenTime}
            clubCloseTime={this.state.club.clubCloseTime}
           
            numberCourts={this.state.club.numberCourts}
          />
        )}
      </div>
    );
  }
}

export default TennisClub;
