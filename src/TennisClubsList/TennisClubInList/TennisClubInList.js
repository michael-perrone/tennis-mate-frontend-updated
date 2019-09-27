import React from "react";
import styles from "./TennisClubInList.module.css";
import Axios from "axios";
import { withRouter } from "react-router-dom";

class TennisClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = { instructorsAtClub: [] };
  }
  componentDidMount() {
    let instructorObject = {};
    if (this.props.profileInfo) {
      instructorObject = {
        instructors: this.props.profileInfo.instructors
      };
    }
    Axios.post("http://localhost:8080/api/getinstructors", instructorObject)
      .then(response => {
        this.setState({
          instructorsAtClub: response.data.instructorsComingBack
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  removeSpaces = item => {
    const newString = item.split(" ").reduce((accum, element) => {
      return (accum += element);
    });
    return newString;
  };



  render() {
    return (
      <div id={styles.tennisClubHolder}>
        <div id={styles.imageAndTitleHolder}>
          <img
            id={styles.clubImage}
            src="http://www.ludlowtennisclub.com/images/480_IMG_0930S.JPG"
            alt="club"
          />
          <p
            style={{
              fontSize: "20px",
              marginTop: "12px"
            }}
            id={styles.clubName}
          >
            {this.props.club.clubName}
          </p>
        </div>
        <div id={styles.locationDivAndHours}>
          <div
            className={styles.borderSurrounding}
            style={{ width: "175px", textAlign: "center" }}
          >
            <p style={{ marginTop: "3px" }}>{this.props.club.address}</p>
            <p style={{ marginTop: "3px" }}>{this.props.club.city}</p>
            <p style={{ marginTop: "3px" }}>{this.props.club.state}</p>
            <p style={{ marginTop: "3px", marginBottom: "24px" }}>
              {this.props.club.zip}
            </p>
            <p>{this.props.club.phoneNumber}</p>
            <a href={`http://${this.props.club.clubWebsite}`}>
              {this.props.club.clubWebsite}
            </a>
            <p style={{ marginTop: "30px", fontSize: "16px" }}>
              {this.props.club.clubOpenTimeNumber}{" "}
              {this.props.club.clubOpenTimeAMPM}-
              {this.props.club.clubCloseTimeNumber}{" "}
              {this.props.club.clubCloseTimeAMPM}
            </p>
          </div>
        </div>
        <div className={styles.borderSurrounding} id={styles.instructorsDiv}>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "10px",
              textAlign: "center",
              paddingBottom: "5px",
              borderBottom: "1px solid black"
            }}
          >
            Instructors
          </p>
          {this.props.profileInfo &&
            this.state.instructorsAtClub.map((element, index) => {
              return <p key={element + index}>{element.fullName}</p>;
            })}
          {!this.props.profileInfo && (
            <p>This club has not added their instructors.</p>
          )}
        </div>
        <div className={styles.borderSurrounding} id={styles.servicesDiv}>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              textAlign: "center",
              paddingBottom: "5px",
              borderBottom: "1px solid black"
            }}
          >
            Services Offered
          </p>
          {this.props.profileInfo &&
            this.props.profileInfo.services.map(element => {
              let key = Object.keys(element);
              let newKey = "";
              if (key[0] === "tennisLessons") {
                newKey = "Tennis Lessons";
              } else if (key[0] === "groupClinics") {
                newKey = "Group Clinics";
              } else if (key[0] === "racquetStringing") {
                newKey = "Racquet Stringing";
              } else if (key[0] === "summerProgram") {
                newKey = "Summer Program";
              } else if (key[0] === "gym") {
                newKey = "Gym";
              } else if (key[0] === "tournaments") {
                newKey = "Tournaments";
              }
              return (
                <p style={{ marginTop: "2px" }} key={newKey + key}>
                  {newKey}: {element[key]}
                </p>
              );
            })}
          {this.props.profileInfo &&
            this.props.profileInfo.otherServices.map((element, index) => {
              return <p key={element}>{element}: Yes</p>;
            })}
          {!this.props.profileInfo && (
            <p>This club has not added the services they provide.</p>
          )}
        </div>
        <button
          className={styles.viewButton}
          onClick={() =>
            this.props.push(
              `/clubs/${this.removeSpaces(this.props.club.clubName)}`
            )
          }
        >
          <i
            style={{
              marginLeft: "-6px",
              paddingRight: "14px",
              fontSize: "24px",
              borderRight: "1px solid black",
              marginRight: "14px"
            }}
            className="fas fa-building"
          />{" "}
          View Club
        </button>
        <button
          onClick={this.go}
          style={{ left: "78%", cursor: "pointer" }}
          className={styles.viewButton}
        >
          <i
            style={{
              marginLeft: "-10px",
              paddingRight: "14px",
              fontSize: "24px",
              borderRight: "1px solid black",
              marginRight: "20px"
            }}
            className="far fa-check-square"
          />
          Subscribe
        </button>
      </div>
    );
  }
}

export default withRouter(TennisClub);
