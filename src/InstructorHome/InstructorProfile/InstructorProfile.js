import React from "react";
import styles from "./InstructorProfile.module.css";

class InstructorProfile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id={styles.instructorProfileContainer}>
        <div id={styles.instructorProfileLeftBar}>
          <div id={styles.imageNameDiv}>
            <img
              id={styles.image}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBHhvnVl3CNrmaEEBwbL-lVN9j4mMdG64O17aFuwXbTLlhMyn"
              alt="person"
            />
            <p id={styles.instructorName}>
              {this.props.instructorProfile.instructor.firstName}{" "}
              {this.props.instructorProfile.instructor.lastName}
            </p>
          </div>
          <div id={styles.bottomPartBar}>
            <p>{this.props.instructorProfile.instructor.tennisClub}</p>
            <p className={styles.pTagsInBottomBar}>
              {this.props.instructorProfile.location}
            </p>
            <p style={{ margin: "50px 10px" }}>
              {this.props.instructorProfile.bio}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InstructorProfile;
