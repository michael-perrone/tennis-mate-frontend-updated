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
              fontSize: this.props.club.clubName.length > 18 ? "22px" : "42px"
            }}
            id={styles.clubName}
          >
            {this.props.club.clubName}
          </p>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <p style={{ fontSize: "22px", borderBottom: "1px solid black" }}>
            Hours of Operation:
          </p>
          <p style={{ marginTop: "10px", fontSize: "21px" }}>
            {this.props.club.clubOpenTimeNumber}{" "}
            {this.props.club.clubOpenTimeAMPM}-
            {this.props.club.clubCloseTimeNumber}{" "}
            {this.props.club.clubCloseTimeAMPM}
          </p>
        </div>
        <button
          id={styles.viewButton}
          onClick={() =>
            this.props.push(`/clubs/${this.removeSpaces(this.props.clubName)}`)
          }
        />
      </div>
    );
  }
}

export default TennisClub;
