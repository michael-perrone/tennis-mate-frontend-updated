import React, { useState, useEffect } from "react";
import styles from "./InstructorProfile.module.css";
import BioJobExpHolder from "./BioCertsJobExpHolder/BioJobExpHolder";
import CertHolder from "./CertHolder/CertHolder";
import otherstyles from "./BioCertsJobExpHolder/BioCertsJobExp.module.css";
import axios from "axios";
import { connect } from "react-redux";

const InstructorProfile = props => {
  //const [bookings, setBookings] = useState([]);
  //const [instructorProfile, setInstructorProfile] = useState({});

  return (
    <div id={styles.instructorProfileContainer}>
      {props.instructorProfile && (
        <React.Fragment>
          <div id={styles.instructorProfileLeftBar}>
            <div id={styles.imageNameDiv}>
              <div id={styles.imageContainer}>
                <img
                  id={styles.image}
                  src="http://www.advertisernewssouth.com/binrepository/576x432/0c0/0d0/none/808998/HXXQ/SPORTS_130209965_AR_0_0_AS20130206130209965_MG1049249.jpg"
                  alt="person"
                />
              </div>
              <div style={{ display: "flex" }}>
                <p id={styles.instructorName}>
                  {props.instructorProfile.instructor.firstName}{" "}
                  {props.instructorProfile.instructor.lastName}
                </p>
                {props.instructorProfile.instructor.clubAccepted === true && (
                  <i
                    style={{
                      fontSize: "18px",
                      marginLeft: "5px",
                      position: "relative",
                      top: "-2px"
                    }}
                    className="fas fa-user-check"
                  ></i>
                )}
              </div>
            </div>
            <div id={styles.bottomPartBar}>
              <p
                style={{ fontSize: "16px" }}
                className={styles.pTagsInBottomBar}
              >
                {props.instructorProfile.instructor.tennisClub}
              </p>
              <p className={styles.pTagsInBottomBar}>
                Located In {props.instructorProfile.location}
              </p>
              <p className={styles.pTagsInBottomBar}>
                {props.instructorProfile.yearsTeaching} Years Teaching
              </p>
              <p className={styles.pTagsInBottomBar}>Lesson Rate:</p>
              <p style={{ marginTop: "5px" }}>
                {props.instructorProfile.lessonRate} Dollars Per Hour
              </p>
            </div>
          </div>
          <div id={styles.profileContentHolder}>
            <BioJobExpHolder profile={props.instructorProfile} />
            <div className={otherstyles.row}>
              <div className={otherstyles.contentHolder}>
                <p className={otherstyles.pTagHeader}>Future Bookings</p>
                {props.bookings &&
                  props.bookings.map(element => {
                    return <p>hi</p>;
                  })}
              </div>
              <CertHolder profile={props.instructorProfile} />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    instructorToken: state.authReducer.instructorToken,
    userToken: state.authReducer.userToken,
    adminToken: state.authReducer.adminToken
  };
};

export default connect(mapStateToProps)(InstructorProfile);
