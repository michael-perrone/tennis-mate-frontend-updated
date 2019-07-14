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
    return (
      <div id={styles.tennisClubHolder}>
        <button
          style={{ height: "100px", width: "100px" }}
          onClick={() =>
            this.props.push(`/clubs/${this.removeSpaces(this.props.clubName)}`)
          }
        />
        <p>{this.props.clubName}</p>
      </div>
    );
  }
}

export default TennisClub;
