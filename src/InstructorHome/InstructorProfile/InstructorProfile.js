import React from "react";
import styles from "./InstructorProfile.module.css";
import BioJobExpHolder from "./BioCertsJobExpHolder/BioJobExpHolder";
import CertHolder from "./CertHolder/CertHolder";
import otherstyles from "./BioCertsJobExpHolder/BioCertsJobExp.module.css";

class InstructorProfile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id={styles.instructorProfileContainer}>
        <div id={styles.instructorProfileLeftBar}>
          <div id={styles.imageNameDiv}>
            <div id={styles.imageContainer}>
              <img
                id={styles.image}
                src="http://www.advertisernewssouth.com/binrepository/576x432/0c0/0d0/none/808998/HXXQ/SPORTS_130209965_AR_0_0_AS20130206130209965_MG1049249.jpg"
                alt="person"
              />
            </div>
            <p id={styles.instructorName}>
              {this.props.instructorProfile.instructor.firstName}{" "}
              {this.props.instructorProfile.instructor.lastName}
            </p>
          </div>
          <div id={styles.bottomPartBar}>
            <p style={{ fontSize: "16px" }} className={styles.pTagsInBottomBar}>
              {this.props.instructorProfile.instructor.tennisClub}
            </p>
            <p className={styles.pTagsInBottomBar}>
              Located In {this.props.instructorProfile.location}
            </p>
            <p className={styles.pTagsInBottomBar}>
              {this.props.instructorProfile.yearsTeaching} Years Teaching
            </p>
            <p className={styles.pTagsInBottomBar}>Lesson Rate:</p>
            <p style={{ marginTop: "5px" }}>
              {this.props.instructorProfile.lessonRate} Dollars Per Hour
            </p>
          </div>
        </div>
        <div id={styles.profileContentHolder}>
          <BioJobExpHolder profile={this.props.instructorProfile} />
          <div className={otherstyles.row}>
            <div className={otherstyles.contentHolder}>
              <p className={otherstyles.pTagHeader}>Future Bookings</p>
            </div>
            <CertHolder profile={this.props.instructorProfile} />
          </div>
        </div>
      </div>
    );
  }
}

export default InstructorProfile;
