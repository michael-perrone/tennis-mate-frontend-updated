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
        <div>
        <p
            id={styles.clubName}
          >
            {this.props.club.clubName}
          </p>
          </div>
          <div id={styles.tennisClubSubHolder}>
        <div id={styles.imageHolder}>
          <img
            id={styles.clubImage}
            src="http://www.ludlowtennisclub.com/images/480_IMG_0930S.JPG"
            alt="club"
          />
          <div style={{display: 'flex', width: '100%', justifyContent: "space-around"}}>
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
  
              paddingRight: "4px",
              fontSize: "14px",
              borderRight: "1px solid black",
              marginRight: "8px"
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
              marginLeft: "-3px",
              paddingRight: "4px",
              fontSize: "14px",
              borderRight: "1px solid black",
              marginRight: "8px"
            }}
            className="far fa-check-square"
          />
          Subscribe
        </button>
        </div>
        </div>
      <div style={{display: 'flex', position: 'relative', top: "36px", width: '100%', justifyContent: 'space-around'}}>
        <div style={{fontSize: '12px'}}>
          <div
            className={styles.borderSurroundingDivs}
          >
            <p style={{ marginTop: "3px" }}>{this.props.club.address}</p>
            <p style={{ marginTop: "3px" }}>{this.props.club.city}</p>
            <p style={{ marginTop: "3px" }}>{this.props.club.state}</p>
            <p style={{ marginTop: "3px", marginBottom: "18px" }}>
              {this.props.club.zip}
            </p>
            <p>{this.props.club.phoneNumber}</p>
            <a href={`http://${this.props.club.clubWebsite}`}>
              {this.props.club.clubWebsite}
            </a>
            <p style={{ marginTop: "20px", fontSize: "12px" }}>
              {this.props.club.clubOpenTimeNumber}{" "}
              {this.props.club.clubOpenTimeAMPM}-
              {this.props.club.clubCloseTimeNumber}{" "}
              {this.props.club.clubCloseTimeAMPM}
            </p>
          </div>
        </div>
        <div className={styles.borderSurroundingDivs}>
          <p id={styles.instructorsP}  
          >
            Instructors
          </p>
          {this.props.profileInfo &&
            this.state.instructorsAtClub.map((element, index) => {
              return <p className={styles.services} key={element + index}>{element.fullName}</p>;
            })}
          {!this.props.profileInfo && (
            <p>This club has not added their instructors.</p>
          )}
        </div>
        <div className={styles.borderSurroundingDivs} id={styles.servicesDiv}>
          <p
        id={styles.instructorsP}
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
                <p className={styles.services} style={{ marginTop: "2px" }} key={newKey + key}>
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
        </div>
      
        </div>
      </div>
    );
  }
}

export default withRouter(TennisClub);
