import React from "react";
import styles from "./CourtContainer.module.css";
import CourtColumns from "./CourtColumns/CourtColumns";

class CourtContainer extends React.Component {
  constructor(props) {
    super(props);
    this.courtNumbersToCourts = this.courtNumbersToCourts.bind(this);
  }

  courtNumbersToCourts() {
    const newCourtsArray = [];
    for (let i = 1; i <= this.props.numberCourts; i++) {
      newCourtsArray.push({ courtNumber: i });
    }
    return newCourtsArray;
  }

  render() {
    return (
      <div id={styles.courtContainer}>
        {this.courtNumbersToCourts().map(element => {
          return (
            <CourtColumns
              key={element.courtNumber}
              courtNumber={element.courtNumber}
            />
          );
        })}
      </div>
    );
  }
}

export default CourtContainer;
