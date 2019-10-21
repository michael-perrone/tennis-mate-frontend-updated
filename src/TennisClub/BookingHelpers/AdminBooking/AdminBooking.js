import React from "react";
import styles from "./AdminBooking.module.css";

class InstructorAdminBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorSelected: ""
    };
  }

  selectInstructorWithClick(instructorClickingOn) {
    this.setState({ instructorSelected: instructorClickingOn });
  }

  render() {
    return (
      <div>
        <div id={styles.instructorHolder}>
          <div id={styles.instructorHolderSubContainer}>
            {this.props.instructors.map(element => {
              return <p id={styles.instructorPTag}>{element.fullName}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default InstructorAdminBooking;
