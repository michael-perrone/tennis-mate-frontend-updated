import React from "react";
import styles from "./InstructorProfile.module.css";
import BioJobExpHolder from "./BioCertsJobExpHolder/BioJobExpHolder";
import CertHolder from "./CertHolder/CertHolder";
import otherstyles from "./BioCertsJobExpHolder/BioCertsJobExp.module.css";
import axios from "axios";
import { connect } from "react-redux";

class InstructorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      instructorProfile: {}
    };
  }

  componentDidMount() {
    axios
      .post("http://localhost:8080/api/getInstructor", {
        instructorId: this.props.match.params.instructorId
      })
      .then(response => {
        if (response.status === 200) {
          console.log("im running");
          this.setState({
            instructorProfile: response.data.instructorProfile
          });
        }
      });
    axios
      .get("http://localhost:8080/api/getBookings", {
        headers: { "x-auth-token": this.props.instructorToken }
      })
      .then(response => {
        this.setState({ bookings: response.data.bookings });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div id={styles.instructorProfileContainer}>
        {this.state.instructorProfile.instructor && (
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
                    {this.state.instructorProfile.instructor.firstName}{" "}
                    {this.state.instructorProfile.instructor.lastName}
                  </p>
                  {this.state.instructorProfile.instructor.clubAccepted ===
                    true && (
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
                  {this.state.instructorProfile.instructor.tennisClub}
                </p>
                <p className={styles.pTagsInBottomBar}>
                  Located In {this.state.instructorProfile.location}
                </p>
                <p className={styles.pTagsInBottomBar}>
                  {this.props.instructorProfile.yearsTeaching} Years Teaching
                </p>
                <p className={styles.pTagsInBottomBar}>Lesson Rate:</p>
                <p style={{ marginTop: "5px" }}>
                  {this.state.instructorProfile.lessonRate} Dollars Per Hour
                </p>
              </div>
            </div>
            <div id={styles.profileContentHolder}>
              <BioJobExpHolder profile={this.props.instructorProfile} />
              <div className={otherstyles.row}>
                <div className={otherstyles.contentHolder}>
                  <p className={otherstyles.pTagHeader}>Future Bookings</p>
                  {this.state.bookings.map(element => {
                    return <p>hi</p>;
                  })}
                </div>
                <CertHolder profile={this.state.instructorProfile} />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

InstructorProfile.defaultProps = {
  instructorProfile: {
    instructor: {
      firstName: "mike",
      lastName: "perrone"
    }
  }
};

const mapStateToProps = state => {
  return {
    instructorToken: state.authReducer.instructorToken
  };
};

export default connect(mapStateToProps)(InstructorProfile);
