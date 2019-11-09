import React, { useState, useEffect } from "react";
import styles from "./InstructorProfile.module.css";
import BioJobExpHolder from "./BioCertsJobExpHolder/BioJobExpHolder";
import CertHolder from "./CertHolder/CertHolder";
import otherstyles from "./BioCertsJobExpHolder/BioCertsJobExp.module.css";
import axios from "axios";
import { connect } from "react-redux";

const InstructorProfile = props => {
  console.log(props);
  const [bookings, setBookings] = useState([]);
  const [instructorProfile, setInstructorProfile] = useState({});

  useEffect(() => {
    if (props.userToken || props.adminToken) {
      axios
        .post("http://localhost:8080/api/getInstructor", {
          instructorId: props.match.params.instructorId
        })
        .then(response => {
          if (response.status === 200) {
            setInstructorProfile(response.data.instructorProfile);
          }
        });
    }
    if (props.instructorToken) {
      axios
        .get("http://localhost:8080/api/getBookings", {
          headers: { "x-auth-token": props.instructorToken }
        })
        .then(response => {
          setBookings(response.data.bookings);
        });
    }
  }, []);

  return (
    <div id={styles.instructorProfileContainer}>
      {instructorProfile.instructor && (
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
                  {instructorProfile.instructor.firstName}{" "}
                  {instructorProfile.instructor.lastName}
                </p>
                {instructorProfile.instructor.clubAccepted === true && (
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
                {instructorProfile.instructor.tennisClub}
              </p>
              <p className={styles.pTagsInBottomBar}>
                Located In {instructorProfile.location}
              </p>
              <p className={styles.pTagsInBottomBar}>
                {instructorProfile.yearsTeaching} Years Teaching
              </p>
              <p className={styles.pTagsInBottomBar}>Lesson Rate:</p>
              <p style={{ marginTop: "5px" }}>
                {instructorProfile.lessonRate} Dollars Per Hour
              </p>
            </div>
          </div>
          <div id={styles.profileContentHolder}>
            <BioJobExpHolder profile={instructorProfile} />
            <div className={otherstyles.row}>
              <div className={otherstyles.contentHolder}>
                <p className={otherstyles.pTagHeader}>Future Bookings</p>
                {bookings &&
                  bookings.map(element => {
                    return <p>hi</p>;
                  })}
              </div>
              <CertHolder profile={instructorProfile} />
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
