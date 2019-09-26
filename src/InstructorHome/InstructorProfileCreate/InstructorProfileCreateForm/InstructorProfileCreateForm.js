import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styles from "./InstructorProfileCreateForm.module.css";
import {connect} from 'react-redux';

class InstructorProfileCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorTokenItems: "",
      jobExperienceArray: [],
      certificationsArray: [],
      formSelectors: [
        { name: "Job Experience", selected: true, completed: false },
        { name: "Certifications", selected: false, completed: false },
        { name: "Other Info", selected: false, completed: false }
      ],
      certifications: {
        certifiedBy: "",
        certificationDate: "",
        certificationDescription: ""
      },
      jobExperience: {
        clubName: "",
        fromMonth: "",
        fromYear: "",
        toMonth: "",
        toYear: "",
        jobTitle: "",
        current: ""
      },
      otherInfo: {
        previousCurrentRanking: "",
        location: "",
        yearsTeaching: "",
        bio: "",
        lessonRate: ""
      },
      showJobExp: true,
      showCertification: false,
      showOtherInfo: false
    };
    this.addToJobArray = this.addToJobArray.bind(this);
    this.addToCertArray = this.addToCertArray.bind(this);
    this.jobExpFormHandler = this.jobExpFormHandler.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
    this.otherInfoHandler = this.otherInfoHandler.bind(this);
    this.certFormHandler = this.certFormHandler.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

 
  submitInfo(event) {
    event.preventDefault();
    const bigObjectSending = {
      certificationsLength: this.state.certificationsArray.length,
      jobExpLength: this.state.jobExperienceArray.length,
      jobExperience: { ...this.state.jobExperienceArray },
      ...this.state.otherInfo,
      certifications: { ...this.state.certificationsArray }
    };
    axios
      .post("http://localhost:8080/api/instructorProfile", bigObjectSending, {
        headers: { "x-auth-token": this.props.instructorToken }
      })
      .then(response => {
        if (response.status === 200) {
          this.props.history.push(
            `/instructor/${this.props.instructor.instructor.id}`
          );
        }
      });
  }

  addToJobArray(event) {
    event.preventDefault();
    const newJobExperienceArray = [...this.state.jobExperienceArray];
    newJobExperienceArray.push(this.state.jobExperience);
    this.setState({ jobExperienceArray: newJobExperienceArray });
    const newJobExperience = { ...this.state.jobExperience };
    const keysArray = Object.keys(this.state.jobExperience);
    for (let i = 0; i < keysArray.length; i++) {
      newJobExperience[keysArray[i]] = "";
    }
    this.setState({ jobExperience: newJobExperience });
  }

  addToCertArray(event) {
    event.preventDefault();
    const newCertArray = [...this.state.certificationsArray];
    newCertArray.push(this.state.certifications);
    this.setState({ certificationsArray: newCertArray });
    const newCertObject = { ...this.state.certifications };
    const keysArray = Object.keys(this.state.certifications);
    for (let i = 0; i < keysArray.length; i++) {
      newCertObject[keysArray[i]] = "";
    }
    this.setState({ jobExperience: newCertObject });
  }

  otherInfoHandler(event) {
    const newOtherInfoObject = { ...this.state.otherInfo };
    newOtherInfoObject[event.target.name] = event.target.value;
    this.setState({ otherInfo: newOtherInfoObject });
  }

  certFormHandler(event) {
    const newCertObject = { ...this.state.certifications };
    newCertObject[event.target.name] = event.target.value;
    this.setState({ certifications: newCertObject });
  }

  changeSelected = (index, elementName) => () => {
    const newFormSelectors = [...this.state.formSelectors];
    for (let i = 0; i < newFormSelectors.length; i++) {
      newFormSelectors[i].selected = false;
    }
    this.setState({ newFormSelectors: newFormSelectors });
    newFormSelectors[index].selected = true;
    this.setState({ formSelectors: newFormSelectors });
    this.setState({
      showJobExp: false,
      showOtherInfo: false,
      showCertification: false
    });
    if (elementName === "Job Experience") {
      this.setState({ showJobExp: true });
    } else if (elementName === "Certifications") {
      this.setState({ showCertification: true });
    } else if (elementName === "Other Info") {
      this.setState({ showOtherInfo: true });
    }
  };

  jobExpFormHandler(event) {
    const newJobExp = { ...this.state.jobExperience };
    newJobExp[event.target.name] = event.target.value;
    this.setState({ jobExperience: newJobExp });
  }

  render() {
    return (
      <div id={styles.formsContainer}>
        <div id={styles.formSelectors}>
          {this.state.formSelectors.map((element, index) => {
            return (
              <p
                onClick={this.changeSelected(index, element.name)}
                key={element.name}
                id={
                  element.selected
                    ? styles.formSelectorsSelected
                    : styles.formSelectorsNotSelected
                }
                className={styles.individualSelectors}
              >
                {element.name}
              </p>
            );
          })}
        </div>
        <form
          style={{ marginTop: "100px" }}
          id={styles.instructorProfileCreateForm}
        >
          {this.state.showJobExp && (
            <div className={styles.forms}>
              <p className={styles.pTags} style={{ marginBottom: "100px" }}>
                Enter all previous job experiences including the start date, end
                date, company, and job title. Select current if this is your
                current employer.
              </p>
              <div>
                <label className={styles.labels}>Company Name:</label>
                <input
                  onChange={this.jobExpFormHandler}
                  className={styles.inputs}
                  value={this.state.jobExperience.clubName}
                  name="clubName"
                />
              </div>
              <div>
                <label className={styles.labels}>Date Started:</label>
                <select
                  onChange={this.jobExpFormHandler}
                  className={styles.selects}
                  value={this.state.jobExperience.fromYear}
                  name="fromYear"
                >
                  <option>Year</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                  <option>1999</option>
                  <option>1998</option>
                  <option>1997</option>
                  <option>1996</option>
                  <option>1995</option>
                  <option>1994</option>
                  <option>1993</option>
                  <option>1992</option>
                  <option>1991</option>
                  <option>1990</option>
                  <option>1989</option>
                  <option>1988</option>
                  <option>1987</option>
                  <option>1986</option>
                  <option>1985</option>
                  <option>1984</option>
                  <option>1983</option>
                  <option>1982</option>
                  <option>1981</option>
                  <option>1980</option>
                  <option>1979</option>
                  <option>1978</option>
                  <option>1977</option>
                  <option>1976</option>
                  <option>1975</option>
                  <option>1974</option>
                  <option>1973</option>
                  <option>1972</option>
                  <option>1971</option>
                  <option>1970</option>
                </select>
                <select
                  onChange={this.jobExpFormHandler}
                  style={{ width: "125px" }}
                  className={styles.selects}
                  value={this.state.jobExperience.fromMonth}
                  name="fromMonth"
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div>
                <label className={styles.labels}>Date Ended:</label>
                <select
                  onChange={this.jobExpFormHandler}
                  className={styles.selects}
                  value={this.state.jobExperience.toYear}
                  name="toYear"
                >
                  <option>Year</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                  <option>1999</option>
                  <option>1998</option>
                  <option>1997</option>
                  <option>1996</option>
                  <option>1995</option>
                  <option>1994</option>
                  <option>1993</option>
                  <option>1992</option>
                  <option>1991</option>
                  <option>1990</option>
                  <option>1989</option>
                  <option>1988</option>
                  <option>1987</option>
                  <option>1986</option>
                  <option>1985</option>
                  <option>1984</option>
                  <option>1983</option>
                  <option>1982</option>
                  <option>1981</option>
                  <option>1980</option>
                  <option>1979</option>
                  <option>1978</option>
                  <option>1977</option>
                  <option>1976</option>
                  <option>1975</option>
                  <option>1974</option>
                  <option>1973</option>
                  <option>1972</option>
                  <option>1971</option>
                  <option>1970</option>
                </select>

                <select
                  onChange={this.jobExpFormHandler}
                  style={{ width: "110px" }}
                  className={styles.selects}
                  value={this.state.jobExperience.toMonth}
                  name="toMonth"
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div>
                <label className={styles.labels}>Job Title:</label>
                <input
                  onChange={this.jobExpFormHandler}
                  className={styles.inputs}
                  value={this.state.jobExperience.jobTitle}
                  name="jobTitle"
                />
              </div>
              <div>
                <label className={styles.labels}>Current Job?</label>
                <select
                  onChange={this.jobExpFormHandler}
                  value={this.state.jobExperience.current}
                  className={styles.selects}
                  name="current"
                >
                  <option> </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <button onClick={this.addToJobArray}>add experience</button>
            </div>
          )}
          {this.state.showCertification && (
            <div className={styles.forms}>
              <p className={styles.pTags}>
                Enter all the certifications you have earned as an instructor
                (PTR, USPTA, ATP etc.). If you haven't earned any, you can leave
                this part of the form blank.
              </p>
              <div style={{ marginTop: "50px" }}>
                <div>
                  <input
                    onChange={this.certFormHandler}
                    name="certifiedBy"
                    value={this.state.certifications.certifiedBy}
                    placeholder="Certified By"
                    className={styles.inputs}
                  />
                </div>
                <div>
                  <input
                    onChange={this.certFormHandler}
                    name="certificationDate"
                    value={this.state.certifications.certificationDate}
                    placeholder="Certification Date"
                    className={styles.inputs}
                  />
                  <input
                    onChange={this.certFormHandler}
                    name="certificationDescription"
                    value={this.state.certifications.certificationDescription}
                    className={styles.inputs}
                    placeholder="Certification Description"
                  />
                </div>
              </div>
              <button onClick={this.addToCertArray}>add to cert array</button>
            </div>
          )}
          {this.state.showOtherInfo && (
            <div className={styles.forms}>
              <p className={styles.pTags}>
                There a few more fields you can fill out to finish up creating
                your profile. Remember, you can come back and change or fill
                these in later.
              </p>
              <input
                value={this.state.otherInfo.yearsTeaching}
                placeholder="Years Teaching"
                className={styles.inputs}
                onChange={this.otherInfoHandler}
                name="yearsTeaching"
              />
              <input
                value={this.state.otherInfo.lessonRate}
                placeholder="Lesson Rate"
                className={styles.inputs}
                onChange={this.otherInfoHandler}
                name="lessonRate"
              />
              <input
                value={this.state.otherInfo.previousCurrentRanking}
                placeholder="Rankings"
                className={styles.inputs}
                onChange={this.otherInfoHandler}
                name="previousCurrentRanking"
              />
              <input
                value={this.state.otherInfo.location}
                placeholder="Location"
                className={styles.inputs}
                onChange={this.otherInfoHandler}
                name="location"
              />
              <textarea
                id={styles.text}
                maxLength="340"
                cols="20"
                rows="40"
                value={this.state.otherInfo.bio}
                placeholder="bio"
                onChange={this.otherInfoHandler}
                name="bio"
              />
            </div>
          )}
          <button onClick={this.submitInfo} id={styles.createProfileButton}>
            Save Profile
          </button>
        </form>
        {this.state.jobExperienceArray.length && this.state.showJobExp > 0 && (
          <div id={styles.jobArrayDiv}>
            {this.state.jobExperienceArray.map(element => {
              return (
                <div key={element.clubName + element.jobTitle}>
                  <p>{element.clubName}</p>
                  <p>{element.jobTitle}</p>
                </div>
              );
            })}
          </div>
        )}
        {this.state.certificationsArray.length > 0 &&
          this.state.showCertification && (
            <div id={styles.jobArrayDiv}>
              {this.state.certificationsArray.map((element, index) => {
                return (
                  <div key={element.certifiedBy + index}>
                    <p>{element.certifiedBy}</p>
                  </div>
                );
              })}
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    instructorToken: state.authReducer.instructorToken,
    instructor: state.authReducer.instructor
  }
}

export default withRouter(connect(mapStateToProps, null)(InstructorProfileCreateForm));
