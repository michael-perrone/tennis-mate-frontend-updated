import React from "react";
import styles from "./AdminProfileCreate.module.css";
import axios from "axios";

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
      stopShowingNames: false
    };
    this.grabInstructorValue = this.grabInstructorValue.bind(this);
    this.instructorsHandler = this.instructorsHandler.bind(this);
    this.addIdAndName = this.addIdAndName.bind(this);
    this.cancelName = this.cancelName.bind(this);
    this.onExit = this.onExit.bind(this);
    this.unExit = this.unExit.bind(this);
    this.sendInstructorList = this.sendInstructorList.bind(this);
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
  }

  onExit() {
    this.setState({ exited: true });
  }

  sendInstructorList(event) {
    event.preventDefault();
    const objectToSend = {
      services: this.state.services,
      instructors: this.state.instructorIds
    };
    axios
      .post("http://localhost:8080/api/clubProfile", objectToSend, {
        headers: { "x-auth-token": localStorage.getItem("adminToken") }
      })
      .then(response => {
        console.log(response);
      });
  }

  unExit() {
    this.setState({ exited: false });
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
          {this.state.showInstructors === true && (
            <p className={styles.formP}>
              First, add the names of the instructors who are currently working
              at your tennis club. Please keep in mind that if the instructors
              you are adding have not signed up for our website yet, their names
              will not show up.
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
            {this.state.instructorNames.length > 0 && (
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
          </form>
        </div>
      </div>
    );
  }
}

export default AdminProfileCreate;
