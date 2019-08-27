import React from "react";
import styles from "./TennisClubInList.module.css";

class TennisClub extends React.Component {
  removeSpaces = item => {
    const newString = item.split(" ").reduce((accum, element) => {
      return (accum += element);
    });
    return newString;
  };

  render() {
    console.log(this.props);
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
              fontSize: "22px",
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
            style={{ width: "185px", textAlign: "center" }}
          >
            <p style={{ marginTop: "3px" }}>{this.props.club.address}</p>
            <p style={{ marginTop: "3px" }}>{this.props.club.city}</p>
            <p style={{ marginTop: "3px" }}>{this.props.club.state}</p>
            <p style={{ marginTop: "3px" }}>{this.props.club.zip}</p>
          </div>
          <div className={styles.borderSurrounding} id={styles.operation}>
            <p style={{ fontSize: "20px", borderBottom: "1px solid black" }}>
              Hours of Operation
            </p>
            <p style={{ marginTop: "10px", fontSize: "18px" }}>
              {this.props.club.clubOpenTimeNumber}{" "}
              {this.props.club.clubOpenTimeAMPM}-
              {this.props.club.clubCloseTimeNumber}{" "}
              {this.props.club.clubCloseTimeAMPM}
            </p>
          </div>
        </div>

        <div className={styles.borderSurrounding} id={styles.instructorsDiv}>
          <p style={{ fontSize: "22px" }}>Instructors</p>
          <p>Chris</p>
          <p>Jack</p>
          <p>Mike</p>
          <p>Nate</p>
        </div>
        <div className={styles.borderSurrounding} id={styles.servicesDiv}>
          <p
            style={{
              fontSize: "18px"
            }}
          >
            Services Offered
          </p>
          <p>Stringing</p>
          <p>Stringing</p>
          <p>Stringing</p>
          <p>Stringing</p>
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
        <button style={{ left: "78%" }} className={styles.viewButton}>
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

export default TennisClub;
