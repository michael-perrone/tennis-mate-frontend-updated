import React from "react";
import axios from "axios";
import styles from "./TennisClub.module.css";
import CourtContainer from "./CourtContainer/CourtContainer";
import Calendar from "./Calendar/Calendar";

class TennisClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      club: "",
      showCourts: false,
      dateChosenForCourts: ""
    };

    this.onDateClick = this.onDateClick.bind(this);
  }
  componentDidMount() {
    axios
      .post("http://localhost:8080/api/club", {
        clubName: this.props.match.params.clubName
      })
      .then(response => {
        this.setState({ club: response.data.tennisClub });
      });
  }

  onDateClick(date) {
    return () => {
      this.setState({ showCourts: true });
      this.setState({ dateChosenForCourts: date });
    };
  }

  render() {
    return (
      <div id={styles.mainContainer}>
        <p>{this.state.club.clubName}</p>
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
            clubOpenTimeNumber={this.state.club.clubOpenTimeNumber}
            clubCloseTimeNumber={this.state.club.clubCloseTimeNumber}
            clubOpenTimeAMPM={this.state.club.clubOpenTimeAMPM}
            clubCloseTimeAMPM={this.state.club.clubCloseTimeAMPM}
            numberCourts={this.state.club.numberCourts}
          />
        )}
      </div>
    );
  }
}

export default TennisClub;
