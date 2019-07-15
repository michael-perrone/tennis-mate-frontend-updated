import React from "react";
import styles from "./CourtColumns.module.css";

class CourtColumns extends React.Component {
  constructor(props) {
    super(props);
    this.turnNumberIntoCourts = this.turnNumberIntoCourts.bind(this);
  }

  turnNumberIntoCourts() {
    const courtsArray = [];
    for(let i = this.props.clubOpenNumber; i < this.props.clubCloseNumber; i++) {
      courtsArray.push({booked: false, sectionTimeStart: })
    }
  }

  render() {
    return (
      <div style={{ marginRight: "50px", marginLeft: "50px" }}>
        <p>Court: {this.props.courtNumber}</p>
        <div id={styles.courtColumn} >

        </div>
      </div>
    );
  }
}

export default CourtColumns;
