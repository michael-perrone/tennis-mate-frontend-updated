import React from "react";
import styles from "./InstructorProfileCreateForm.module.css";

class InstructorProfileCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSelectors: [
        { name: "Job Experience", selected: true, completed: false },

        { name: "Certifications", selected: false, completed: false },

        { name: "Other Info", selected: false, completed: false }
      ],

      jobExperience: {
        clubName: "",
        from: "",
        to: "",
        jobTitle: "",
        current: ""
      },

      showJobExp: true,
      showCertification: false,
      showOtherInfo: false
    };
    this.jobExpFormHandler = this.jobExpFormHandler.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
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
    console.log(newJobExp);
  }
  //class
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
            <div id={styles.jobExpForm}>
              <p style={{ marginBottom: "100px", fontSize: "22px" }}>
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
                  value={this.state.jobExperience.from}
                  name="from"
                >
                  <option> </option>
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
                  value={this.state.jobExperience.to}
                  name="to"
                >
                  <option> </option>
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
                  value={this.state.jobExperience.to}
                  name="to"
                >
                  <option> </option>
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
                  value={this.state.jobExperience.to}
                  name="to"
                >
                  <option> </option>
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
            </div>
          )}
          {this.state.showCertification && (
            <div id={styles.certForm}>
              <p style={{ fontSize: "22px" }}>
                Enter all the certifications you have earned as an instructor
                (PTR, USPTA, ATP etc.). If you haven't earned any, you can leave
                this part of the form blank.
              </p>
              <div style={{ marginTop: "50px" }}>
                <div>
                  <input placeholder="Certified By" className={styles.inputs} />
                </div>
                <div>
                  <input
                    placeholder="Certification Date"
                    className={styles.inputs}
                  />
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default InstructorProfileCreateForm;
