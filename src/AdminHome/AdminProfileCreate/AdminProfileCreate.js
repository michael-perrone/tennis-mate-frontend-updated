import React from "react";
import styles from "./AdminProfileCreate.module.css";
import axios from "axios";
import ServicesForm from "./ServicesForm/ServicesForm";
import AdminNav from "../../AdminNav/AdminNav";
import BioForm from './BioForm/BioForm'
import {connect} from 'react-redux';

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
      showSubmittedMessage: false,
      instructorsAlreadyHere: [],
      entryError: ""
    };
    this.bioTabButton = this.bioTabButton.bind(this);
    this.instructorsTabButton = this.instructorsTabButton.bind(this);
    this.finishInstructors = this.finishInstructors.bind(this);
    this.grabInstructorValue = this.grabInstructorValue.bind(this);
    this.instructorsHandler = this.instructorsHandler.bind(this);
    this.addIdAndName = this.addIdAndName.bind(this);
    this.cancelName = this.cancelName.bind(this);
    this.onExit = this.onExit.bind(this);
    this.unExit = this.unExit.bind(this);
    this.sendInstructorList = this.sendInstructorList.bind(this);
    this.showServices = this.showServices.bind(this);
    this.servicesTabButton = this.servicesTabButton.bind(this);
    this.cancelSubmitInstructors = this.cancelSubmitInstructors.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/clubprofile/myclub',
     {headers: {'x-auth-token': this.props.adminToken}})
     .then(response => {
       console.log(response)
       if (response.data.clubProfile && response.data.clubProfile.instructors.length > 0) {
         this.setState({instructorsAlreadyHere: response.data.clubProfile.instructors})
       }
     })

    axios
      .get("http://localhost:8080/api/instructorList")
      .then(response => {
        this.setState({
          instructorPossibilities: response.data.instructorPossibilities
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  instructorsTabButton() {
    this.setState({ showServices: false });
    this.setState({ showBio: false });
    this.setState({ showInstructors: true });
  }

  bioTabButton() {
    this.setState({showServices: false})
    this.setState({showInstructors: false})
    this.setState({showBio: true})
  }

  cancelSubmitInstructors() {
    this.setState({ showSubmittedMessage: false });
  }

  servicesTabButton() {
    this.setState({ showInstructors: false });
    this.setState({showBio: false})
    this.setState({ showServices: true });
    
  }

  addIdAndName(event) {
    event.preventDefault();
    if(this.state.nameClicked !== "") {
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
    this.setState({ nameClicked: ""})
  } else {
    this.setState({entryError: "Please choose an instructor!"})
  }
  }

  grabInstructorValue(nameAndClub, id, justName) {
    this.setState({ valueClicked: true });
    this.setState({ nameClicked: nameAndClub });
    this.setState({ instructorId: id });
    this.setState({ instructorName: justName });
    this.setState({entryError: ""})
  }

  instructorsHandler(event) {
    this.setState({ instructorValue: event.target.value });
    const newInstructorMatchingArray = [];
    this.state.instructorPossibilities.forEach(element => {
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
// map
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
        headers: { "x-auth-token": this.props.adminToken }
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
      <div>
        <AdminNav />
        <div id={styles.adminProfileCreateMainDiv}>
          <div style={{width: "340px"}}>
          <p id={styles.introP}>
            There are a few more things it would be great if you could add about
            your club. Please add the instructors who work at your club,
            services offered at your club, and if you would like, a bio for
            users to read about your club.
          </p>
          {this.state.showSubmittedMessage &&
              this.state.showServices === false && (
                <div className={styles.formP}>
                  {" "}
                  <p>
                    We have saved the instructors who work at your club and have
                    sent them verification requests. Please check the list below
                    to make sure you have entered all instructors at your club.
                    If so, press continue.
                  </p>
                  </div>
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
                  You can add or edit the instructors who are currently
                  working at your tennis club. Please keep in mind that if the
                  instructors you are adding have not signed up for our website
                  yet, their names will not show up.
                </p>
              )}
               {this.state.showServices && (
              <p className={styles.formP}>
                Select any services that your club has to offer. Remember you can
                always come back and edit this information later on by visiting
                your profile page.
              </p>
            )}
              </div>
          <div id={styles.adminProfileFormDiv}>
            <div id={styles.formSelectorDiv}>
              <p style={{backgroundColor: this.state.showInstructors === true ? "gray" : 'white', color: this.state.showInstructors === true ? "white" : "black"}}
                onClick={this.instructorsTabButton}
                className={styles.selector}
              >
                Instructors
              </p>
              <p
                style={{backgroundColor: this.state.showServices === true ? "gray" : 'white', color: this.state.showServices === true ? "white" : "black", borderLeft: 0}}
                onClick={this.servicesTabButton}
                className={styles.selector}
              >
                Services
              </p>
              <p
              onClick={this.bioTabButton}
              style={{borderLeft: "0", backgroundColor: this.state.showBio === true ? "gray" : 'white', color: this.state.showBio === true ? "white" : "black"}}
               className={styles.selector}>
                Bio
              </p>
            </div>
            {this.state.showSubmittedMessage &&
              this.state.showServices === false && (
                <div className={styles.formP}>
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
            <form id={styles.adminProfileForm}>
              {this.state.showInstructors === true && (
                <div style={{position: "relative"}}>
                    <p className={styles.hiddenEntryError} id={this.state.entryError !== "" || null ? styles.entryError : ""}>{this.state.entryError}</p>
                  
                  <input
                    onFocus={this.unExit}
                    onBlur={() => {
                      setTimeout(this.onExit, 150);
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
                      // eslint-disable-next-line array-callback-return
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
              {this.state.showBio && <BioForm/>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.authReducer.admin,
    adminToken: state.authReducer.adminToken
  }
}

export default connect(mapStateToProps)(AdminProfileCreate);
