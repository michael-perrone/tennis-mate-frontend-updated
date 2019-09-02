import React from "react";
import styles from "./AdminProfileCreate.module.css";
import axios from "axios";

class AdminProfileCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorName: "",
      showInstructors: true,
      showServices: false,
      showBio: false,
      instructorsMatching: [],
      instructorPossibilities: [],
      nameClicked: "",
      instructorValue: "",
      valueClicked: false,
      instructorIds: []
    };
    this.grabInstructorValue = this.grabInstructorValue.bind(this);
    this.instructorsHandler = this.instructorsHandler.bind(this);
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
  grabInstructorValue(name, id) {
    this.setState({ valueClicked: true });
    this.setState({ nameClicked: name });
    const newInstructorIdsArray = [...this.state.instructorIds, id];
    this.setState({ instructorIds: newInstructorIdsArray });
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
                  onKeyDown={() => this.setState({ valueClicked: false })}
                  value={
                    !this.state.valueClicked
                      ? this.state.instructorValue
                      : this.state.nameClicked
                  }
                  id={styles.instructorsInput}
                  onChange={this.instructorsHandler}
                />
                <div id={styles.instructorsDiv}>
                  {this.state.instructorsMatching.map(element => {
                    if (!this.state.valueClicked) {
                      console.log(element);
                      return (
                        <div
                          onClick={() =>
                            this.grabInstructorValue(
                              element.fullName,
                              element._id
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
          </form>
        </div>
      </div>
    );
  }
}

export default AdminProfileCreate;
