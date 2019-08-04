import React from "react";
import styles from "./InstructorProfileCreateForm.module.css";

class InstructorProfileCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSelectors: [
        { name: "Job Experience", selected: true, completed: false },
        { name: "Years Teaching", selected: false, completed: false },
        { name: "Location", selected: false, completed: false },
        { name: "Certifications", selected: false, completed: false },
        { name: "Rankings", selected: false, completed: false },
        { name: "Player Specialization", selected: false, completed: false },
        { name: "Lesson Rate", selected: false, completed: false },
        { name: "Photo", selected: false, completed: false }
      ],

      jobExperience: {
        clubName: "",
        from: "",
        to: "",
        jobTitle: "",
        currentYes: "",
        currentNo: ""
      },

      showJobExp: true,
      showYearsTeaching: false,
      showLocation: false,
      showCertification: false,
      showRankings: false,
      showPlayerSpecialization: false,
      showLessonRate: false,
      showPhoto: false
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
      showYearsTeaching: false,
      showLocation: false,
      showCertification: false,
      showRankings: false,
      showPlayerSpecialization: false,
      showLessonRate: false,
      showPhoto: false
    });
    if (elementName === "Job Experience") {
      this.setState({ showJobExp: true });
    } else if (elementName === "Years Teaching") {
      this.setState({ showYearsTeaching: true });
    } else if (elementName === "Location") {
      this.setState({ showLocation: true });
    } else if (elementName === "Certifications") {
      this.setState({ showCertification: true });
    } else if (elementName === "Show Rankings") {
      this.setState({ showRankings: true });
    } else if (elementName === "Player Specialization") {
      this.setState({ showPlayerSpecialization: true });
    } else if (elementName === "Lesson Rate") {
      this.setState({ showLessonRate: true });
    } else if (elementName === "Photo") {
      this.setState({ showPhoto: true });
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
      <div>
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
              <input
                onChange={this.jobExpFormHandler}
                className={styles.inputs}
                value={this.state.jobExperience.clubName}
                name="clubName"
              />
              <div>
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
              <input
                onChange={this.jobExpFormHandler}
                className={styles.inputs}
                value={this.state.jobExperience.jobTitle}
                name="jobTitle"
              />
              <div>
                <input type="radio" value="Yes" name="currentYes" />
                <label htmlFor="currentYes">Yes</label>
              </div>
              <div>
                <input type="radio" value="No" name="currentNo" />
                <label htmlFor="currentNo">No</label>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default InstructorProfileCreateForm;
