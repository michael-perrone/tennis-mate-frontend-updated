import React from "react";
import styles from "./AdminProfileCreate.module.css";
import axios from "axios";
import ServicesForm from "./ServicesForm/ServicesForm";

class AdminProfileCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstructors: true,
      showServices: false,
      showBio: false,
      instructorsMatching: [],
      instructorPossibilities: [],
      nameClicked: "",
      instructorValue: "",
      valueClicked: false,
      instructorId: "",
      instructorIds: [],
      instructorNames: [],
      exited: false,
      stopShowingNames: false,
      services: [],
      showSubmittedMessage: false
    };
    this.finishInstructors = this.finishInstructors.bind(this);
    this.grabInstructorValue = this.grabInstructorValue.bind(this);
    this.instructorsHandler = this.instructorsHandler.bind(this);
    this.addIdAndName = this.addIdAndName.bind(this);
    this.cancelName = this.cancelName.bind(this);
    this.onExit = this.onExit.bind(this);
    this.unExit = this.unExit.bind(this);
    this.sendInstructorList = this.sendInstructorList.bind(this);
    this.showServices = this.showServices.bind(this);
    this.cancelSubmitInstructors = this.cancelSubmitInstructors.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/instructorList")
      .then(response => {
        this.setState({
          instructorPossibilities: response.data.instructorPossibilities
        });
      })
      .catch(error => {
        console.log(error);
        console.log("nugget");
      });
  }

  cancelSubmitInstructors() {
    this.setState({ showSubmittedMessage: false });
  }

  addIdAndName(event) {
    event.preventDefault();
    const newIdsArray = [...this.state.instructorIds, this.state.instructorId];
    this.setState({ instructorIds: newIdsArray });
    const newInstructorNames = [
      ...this.state.instructorNames,
      this.state.nameClicked
    ];
    this.setState({ instructorNames: newInstructorNames });
    this.setState({ instructorName: "" });
    this.setState({ instructorId: "" });
    this.setState({ instructorValue: "" });
    this.setState({ valueClicked: "" });
    this.setState({ stopShowingNames: true });
  }

  grabInstructorValue(nameAndClub, id, justName) {
    this.setState({ valueClicked: true });
    this.setState({ nameClicked: nameAndClub });
    this.setState({ instructorId: id });
    this.setState({ instructorName: justName });
  }

  instructorsHandler(event) {
    this.setState({ instructorValue: event.target.value });
    const newInstructorMatchingArray = [];
    this.state.instructorPossibilities.map(element => {
      if (
        element.fullName
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) &&
        event.target.value.length > 1
      ) {
        newInstructorMatchingArray.push(element);
      }
    });
    this.setState({ instructorsMatching: newInstructorMatchingArray });
  }

  cancelName() {
    this.setState({ valueClicked: false });
    this.setState({ instructorId: "" });
    this.setState({ nameClicked: "" });
    this.setState({ stopShowingNames: false });
    this.setState({ showSubmittedMessage: false });
  }

  onExit() {
    this.setState({ exited: true });
  }

  sendInstructorList(event) {
    event.preventDefault();
    const objectToSend = {
      instructors: this.state.instructorIds
    };
    axios
      .post("http://localhost:8080/api/clubProfile", objectToSend, {
        headers: { "x-auth-token": localStorage.getItem("adminToken") }
      })
      .then(response => {
        console.log(response);
        this.setState({ showSubmittedMessage: true });
      });
  }

  unExit() {
    this.setState({ exited: false });
  }

  finishInstructors() {
    this.setState({ showInstructors: false });
  }

  showServices() {
    this.setState({ showServices: true });
    this.setState({ showInstructors: false });
  }

  render() {
    return (
      <div id={styles.adminProfileCreateMainDiv}>
        <p id={styles.introP}>
          There are a few more things it would be great if you could add about
          your club. Please add the instructors who work at your club, services
          offered at your club, and if you would like, a bio for users to read
          about your club.
        </p>
        <div id={styles.adminProfileFormDiv}>
          {this.state.showSubmittedMessage &&
            this.state.showServices === false && (
              <div className={styles.formP}>
                {" "}
                <p>
                  We have saved the instructors who work at your club and have
                  sent them verification requests. Please check the list below
                  to make sure you have entered all instructors at your club. If
                  so, press continue.
                </p>
                <button
                  onClick={this.showServices}
                  id={styles.continueToServices}
                >
                  Continue <i className="fas fa-arrow-right"></i>
                </button>
                <button
                  onClick={this.cancelSubmitInstructors}
                  style={{ marginLeft: "20px" }}
                  id={styles.continueToServices}
                >
                  Cancel <i className="fas fa-window-close"></i>
                </button>
              </div>
            )}
          {this.state.showServices && (
            <p className={styles.formP}>
              You have succesfully entered your instructors. Great! Now select
              any services that your club has to offer. Remember you can always
              come back and edit this information later on by visiting your
              profile page.
            </p>
          )}
          {this.state.showSubmittedMessage === false &&
            this.state.showInstructors === true && (
              <p
                id={
                  this.state.showSubmittedMessage === true
                    ? styles.formPAnimation
                    : ""
                }
                className={styles.formP}
              >
                First, add the names of the instructors who are currently
                working at your tennis club. Please keep in mind that if the
                instructors you are adding have not signed up for our website
                yet, their names will not show up.
              </p>
            )}
          <form id={styles.adminProfileForm}>
            {this.state.showInstructors === true && (
              <div>
                <input
                  onFocus={this.unExit}
                  onBlur={() => {
                    setTimeout(this.onExit, 100);
                  }}
                  onKeyDown={this.cancelName}
                  value={
                    !this.state.valueClicked
                      ? this.state.instructorValue
                      : this.state.nameClicked
                  }
                  id={styles.instructorsInput}
                  onChange={this.instructorsHandler}
                />
                <button onClick={this.addIdAndName} id={styles.addInstructor}>
                  Add Instructor
                </button>
                <div id={styles.instructorsDiv}>
                  {!this.state.exited &&
                    !this.state.stopShowingNames &&
                    this.state.instructorsMatching.map(element => {
                      if (!this.state.valueClicked) {
                        return (
                          <div
                            onClick={() =>
                              this.grabInstructorValue(
                                `${element.fullName} - ${element.tennisClub}`,
                                element._id,
                                element.fullName
                              )
                            }
                            key={element._id}
                            id={styles.nameCard}
                          >
                            <p>{element.fullName}</p>
                            <p>{element.tennisClub}</p>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            )}
            {this.state.instructorNames.length > 0 &&
              this.state.showInstructors && (
                <div id={styles.addedDiv}>
                  {this.state.instructorNames.map((element, index) => {
                    return (
                      <div
                        key={element + index}
                        className={styles.instructorsAdded}
                      >
                        <p>{element}</p>
                      </div>
                    );
                  })}
                  <button
                    onClick={this.sendInstructorList}
                    id={styles.submitInstructorList}
                  >
                    Submit Instructor List
                  </button>
                </div>
              )}
            {this.state.showServices && <ServicesForm />}
          </form>
        </div>
      </div>
    );
  }
}

export default AdminProfileCreate;
