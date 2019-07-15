import React from "react";
import styles from "./CourtColumns.module.css";

class CourtColumns extends React.Component {
  render() {
    return (
      <div style={{ marginRight: "50px", marginLeft: "50px" }}>
        <p>Court: {this.props.courtNumber}</p>
        <div id={styles.courtColumn} />
      </div>
    );
  }
}

export default CourtColumns;
