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
      adminClubName: "",
      clubProfile: ""
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
          console.log(response);
          this.setState({ club: response.data.tennisClub.club });
          this.setState({ clubProfile: response.data.tennisClub.profile });
        });
    } else {
      axios
        .post("http://localhost:8080/api/club", {
          clubName: this.props.match.params.clubName
        })
        .then(response => {
          this.setState({ club: response.data.tennisClub.club });
          this.setState({ clubProfile: response.data.tennisClub.profile });
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
      <div style={{ width: "100%" }} id={styles.mainContainer}>
        <div id={styles.topContainer}>
          <div id={styles.divBehindImage}>
            <img
              id={styles.clubImage}
              alt="tennisClub"
              src="https://www.clubcorp.com/var/ezflow_site/storage/images/media/clubs/the-downtown-club-media-folder/images/facilities/tennis-courts/downtown-club-at-met-houston-tennis-courts-560x310/1781915-2-eng-US/Downtown-Club-at-MET-houston-tennis-courts-560x310_largeimage.jpg"
            />
          </div>
          <p id={styles.largerPTag}>{this.state.club.clubName}</p>
          <div id={styles.locationDiv}>
            <div className={styles.subLocationContainer}>
              <p className={styles.fs18}>{this.state.club.address}</p>
              <p className={styles.fs18}>{this.state.club.city}</p>
              <p className={styles.fs18}>{this.state.club.state}</p>
              <p className={styles.fs18}>{this.state.club.zip}</p>
            </div>
            <div className={styles.subLocationContainer}>
              <p className={styles.f18}>
                {this.state.club.clubOpenTime} - {this.state.club.clubCloseTime}
              </p>
              <a
                style={{ textDecoration: "none" }}
                href={`https://${this.state.club.clubWebsite}`}
                className={styles.f18}
              >
                {this.state.club.clubWebsite}
              </a>
              <p className={styles.f18}>{this.state.club.phoneNumber}</p>
              <p>{this.state.club.numberCourts} Tennis Courts</p>
            </div>
          </div>
          <div id={styles.servicesAndEventsContainer}>
            <div></div>
          </div>
        </div>
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
