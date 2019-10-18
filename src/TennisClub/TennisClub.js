import React from "react";
import axios from "axios";
import styles from "./TennisClub.module.css";
import CourtContainer from "./CourtContainer/CourtContainer";
import Calendar from "./Calendar/Calendar";
import decoder from "jwt-decode";
import { connect } from "react-redux";

class TennisClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      club: "",
      showCourts: false,
      dateChosenForCourts: "",
      adminClubName: "",
      clubProfile: "",
      instructors: [],
      addEventState: false,
      dateForEventString: "",
      eventNameState: "",
      eventDescriptionState: "",
      timeStartState: "",
      timeEndState: "",
      events: []
    };
    this.timeStartHandler = this.timeStartHandler.bind(this);
    this.timeEndHandler = this.timeEndHandler.bind(this);
    this.eventDescriptionHandler = this.eventDescriptionHandler.bind(this);
    this.eventNameHandler = this.eventNameHandler.bind(this);
    this.dateChoose = this.dateChoose.bind(this);
    this.addEventStateShow = this.addEventStateShow.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.addEventHandler = this.addEventHandler.bind(this);
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
          this.setState({ clubProfile: response.data.tennisClub.profile });
          this.setState({ club: response.data.tennisClub.club });
          this.setState({ instructors: response.data.instructors });
          this.setState({ events: response.data.tennisClub.profile.events });
        });
    } else {
      axios
        .post("http://localhost:8080/api/club", {
          clubName: this.props.match.params.clubName
        })
        .then(response => {
          this.setState({ clubProfile: response.data.tennisClub.profile });
          this.setState({ club: response.data.tennisClub.club });
        });
    }
  }

  timeEndHandler(event) {
    this.setState({ timeEndState: event.target.value });
  }

  timeStartHandler(event) {
    this.setState({ timeStartState: event.target.value });
  }

  dateChoose(event) {
    console.log(new Date(event.target.value));
    this.setState({ dateForEventString: event.target.value });
  }

  addEventHandler() {
    const eventsArray = [...this.state.events];
    const event = {
      name: this.state.eventNameState,
      timeStart: this.state.timeStartState,
      timeEnd: this.state.timeEndState,
      description: this.state.eventDescriptionState,
      date: this.state.dateForEventString
    };
    eventsArray.push(event);
    let objectToSend = { eventsArray };
    axios
      .post("http://localhost:8080/api/clubprofileevents", objectToSend, {
        headers: { "x-auth-token": this.props.adminToken }
      })
      .then(response => {
        this.setState({ addEventState: false });
        this.setState({ events: response.data.updatedProfile.events });
      });
  }

  addEventStateShow() {
    this.setState({ addEventState: true });
  }

  onDateClick(date) {
    return () => {
      this.setState({ showCourts: true });
      this.setState({ dateChosenForCourts: date });
    };
  }

  eventDescriptionHandler(event) {
    this.setState({ eventDescriptionState: event.target.value });
  }

  eventNameHandler(event) {
    this.setState({ eventNameState: event.target.value });
  }

  render() {
    console.log(this.state.clubProfile);
    console.log(this.state);
    return (
      <div>
        <div style={{ width: "100%" }} id={styles.mainContainer}>
          <div className={styles.subContainer}>
            <div className={styles.smallGreenDiv}>
              <p className={styles.largerPTag}>{this.state.club.clubName}</p>
              <img
                id={styles.clubImage}
                alt="tennisClub"
                src="https://www.clubcorp.com/var/ezflow_site/storage/images/media/clubs/the-downtown-club-media-folder/images/facilities/tennis-courts/downtown-club-at-met-houston-tennis-courts-560x310/1781915-2-eng-US/Downtown-Club-at-MET-houston-tennis-courts-560x310_largeimage.jpg"
              />
            </div>

            <div className={styles.smallGreenDiv}>
              <p style={{ position: "absolute" }} className={styles.largerPTag}>
                Location and Contact
              </p>
              <div className={styles.subLocationContainer}>
                <p className={styles.fs18}>{this.state.club.address}</p>
                <p className={styles.fs18}>{this.state.club.city}</p>
                <p className={styles.fs18}>{this.state.club.state}</p>
                <p className={styles.fs18}>{this.state.club.zip}</p>
              </div>

              <div className={styles.subLocationContainer}>
                <p className={styles.f18}>
                  {this.state.club.clubOpenTime} -{" "}
                  {this.state.club.clubCloseTime}
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
          </div>
          <div className={styles.subContainer}>
            <div className={styles.smallGreenDiv}>
              <p className={styles.largerPTag}>What We Offer</p>
              <div className={styles.flexWrapDiv}>
                {this.state.clubProfile &&
                  this.state.clubProfile.services.map((element, index) => {
                    let keyArray = Object.keys(element);
                    let service = "";
                    console.log(element);
                    console.log(keyArray);
                    if (element[keyArray[0]] === "Yes") {
                      if (keyArray[0] === "tennisLessons") {
                        service = "Private Tennis Lessons";
                      } else if (keyArray[0] === "groupClinics") {
                        service = "Fun Group Clinics";
                      } else if (keyArray[0] === "racquetStringing") {
                        service = "Racquet Stringing";
                      } else if (keyArray[0] === "summerProgram") {
                        service = "Kids Summer Program";
                      } else if (keyArray[0] === "gym") {
                        service = "Fitness Center";
                      } else if (keyArray[0] === "tournaments") {
                        service = "Competitive Tournaments";
                      }
                      return (
                        <div
                          style={{
                            height: `${400 /
                              (this.state.clubProfile.services.length +
                                this.state.clubProfile.otherServices.length)}px`
                          }}
                          className={styles.divHoldingItem}
                        >
                          <p>{service}</p>
                        </div>
                      );
                    }
                  })}
                {this.state.clubProfile &&
                  this.state.clubProfile.otherServices.map(element => {
                    return (
                      <div
                        style={{
                          height: `${400 /
                            (this.state.clubProfile.services.length +
                              this.state.clubProfile.otherServices.length)}px`
                        }}
                        className={styles.divHoldingItem}
                      >
                        <p>{element}</p>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div
              style={{ flexDirection: "column" }}
              className={styles.smallGreenDiv}
            >
              <p className={styles.largerPTag}>Events Coming Up</p>
              {this.state.addEventState === false && this.state.events !== "" && (
                <div style={{ marginTop: "40px" }}>
                  {this.state.events.map((element, index) => {
                    if (index < 6) {
                      return (
                        <div
                          style={{
                            height: `${150 / this.state.events.length}px`
                          }}
                          className={styles.eventDiv}
                        >
                          <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                            {element.name}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
              )}
              {this.props.admin && this.state.addEventState === false && (
                <button onClick={this.addEventStateShow}>Add an Event</button>
              )}
              {this.state.addEventState === true && (
                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div className={styles.eventDateSubDiv}>
                    <p style={{ letterSpacing: "0.05px", fontSize: "15px" }}>
                      Name of Event:
                    </p>
                    <input
                      onChange={this.eventNameHandler}
                      value={this.state.eventNameState}
                      id={styles.addEventInput}
                    />
                  </div>
                  <div className={styles.eventDateSubDiv}>
                    <p style={{ letterSpacing: "0.1px" }}>Date of Event:</p>
                    <input
                      type="date"
                      style={{
                        width: "110px",
                        height: "18px",
                        marginLeft: "5px"
                      }}
                      onChange={this.dateChoose}
                      value={this.state.dateForEventString}
                    />
                  </div>
                  <div className={styles.eventDateSubDiv}>
                    <p style={{ letterSpacing: "0.1px" }}>Start of Event:</p>
                    <select
                      onChange={this.timeStartHandler}
                      value={this.state.timeStartState}
                      style={{
                        width: "112px",
                        height: "18px",
                        marginLeft: "5px"
                      }}
                    >
                      <option disabled>{}</option>
                      <option>12:00 AM</option>
                      <option>12:30 AM</option>
                      <option>1:00 AM</option>
                      <option>1:30 AM</option>
                      <option>2:00 AM</option>
                      <option>2:30 AM</option>
                      <option>3:00 AM</option>
                      <option>3:30 AM</option>
                      <option>4:00 AM</option>
                      <option>4:30 AM</option>
                      <option>5:00 AM</option>
                      <option>5:30 AM</option>
                      <option>6:00 AM</option>
                      <option>6:30 AM</option>
                      <option>7:00 AM</option>
                      <option>7:30 AM</option>
                      <option>8:00 AM</option>
                      <option>8:30 AM</option>
                      <option>9:00 AM</option>
                      <option>9:30 AM</option>
                      <option>10:00 AM</option>
                      <option>10:30 AM</option>
                      <option>11:00 AM</option>
                      <option>11:30 AM</option>
                      <option>12:00 PM</option>
                      <option>12:30 PM</option>
                      <option>1:00 PM</option>
                      <option>1:30 PM</option>
                      <option>2:00 PM</option>
                      <option>2:30 PM</option>
                      <option>3:00 PM</option>
                      <option>3:30 PM</option>
                      <option>4:00 PM</option>
                      <option>4:30 PM</option>
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                      <option>9:00 PM</option>
                      <option>9:30 PM</option>
                      <option>10:00 PM</option>
                      <option>10:30 PM</option>
                      <option>11:00 PM</option>
                      <option>11:30 PM</option>
                    </select>
                  </div>
                  <div className={styles.eventDateSubDiv}>
                    <p style={{ letterSpacing: "0.5px" }}>End of Event:</p>
                    <select
                      onChange={this.timeEndHandler}
                      value={this.state.timeEndState}
                      style={{
                        width: "112px",
                        height: "18px",
                        marginLeft: "5px"
                      }}
                    >
                      <option disabled>{}</option>
                      <option>12:00 AM</option>
                      <option>12:30 AM</option>
                      <option>1:00 AM</option>
                      <option>1:30 AM</option>
                      <option>2:00 AM</option>
                      <option>2:30 AM</option>
                      <option>3:00 AM</option>
                      <option>3:30 AM</option>
                      <option>4:00 AM</option>
                      <option>4:30 AM</option>
                      <option>5:00 AM</option>
                      <option>5:30 AM</option>
                      <option>6:00 AM</option>
                      <option>6:30 AM</option>
                      <option>7:00 AM</option>
                      <option>7:30 AM</option>
                      <option>8:00 AM</option>
                      <option>8:30 AM</option>
                      <option>9:00 AM</option>
                      <option>9:30 AM</option>
                      <option>10:00 AM</option>
                      <option>10:30 AM</option>
                      <option>11:00 AM</option>
                      <option>11:30 AM</option>
                      <option>12:00 PM</option>
                      <option>12:30 PM</option>
                      <option>1:00 PM</option>
                      <option>1:30 PM</option>
                      <option>2:00 PM</option>
                      <option>2:30 PM</option>
                      <option>3:00 PM</option>
                      <option>3:30 PM</option>
                      <option>4:00 PM</option>
                      <option>4:30 PM</option>
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                      <option>9:00 PM</option>
                      <option>9:30 PM</option>
                      <option>10:00 PM</option>
                      <option>10:30 PM</option>
                      <option>11:00 PM</option>
                      <option>11:30 PM</option>
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "340px",
                      justifyContent: "space-between"
                    }}
                  >
                    <p>Event Description:</p>
                    <button
                      onClick={this.addEventHandler}
                      style={{ position: "relative", top: "-3px" }}
                    >
                      Add Event
                    </button>
                  </div>
                  <textarea
                    onChange={this.eventDescriptionHandler}
                    value={this.state.eventDescriptionState}
                    style={{ height: "68px" }}
                  ></textarea>
                </div>
              )}
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.smallGreenDiv}>
              <p className={styles.largerPTag}>About Us</p>
              <p style={{ padding: "10px" }}>{this.state.clubProfile.bio}</p>
            </div>
            <div className={styles.smallGreenDiv}>
              <p className={styles.largerPTag}>Tennis Instructors</p>
              <div className={styles.flexWrapDiv}>
                {this.state.instructors &&
                  this.state.instructors.map(element => {
                    return (
                      <div
                        style={{
                          height: `${310 / this.state.instructors.length}px`
                        }}
                        className={styles.divHoldingItem}
                      >
                        <p>{element.fullName}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
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

const mapStateToProps = state => {
  return {
    admin: state.authReducer.admin,
    adminToken: state.authReducer.adminToken
  };
};

export default connect(mapStateToProps)(TennisClub);
