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
        current: ""
      }
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected = index => () => {
    const newFormSelectors = [...this.state.formSelectors];
    for (let i = 0; i < newFormSelectors.length; i++) {
      newFormSelectors[i].selected = false;
    }
    this.setState({ newFormSelectors: newFormSelectors });
    newFormSelectors[index].selected = true;
    this.setState({ formSelectors: newFormSelectors });
  };

  render() {
    return (
      <div>
        <div id={styles.formSelectors}>
          {this.state.formSelectors.map((element, index) => {
            return (
              <p
                onClick={this.changeSelected(index)}
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
          <div>
            <input value={this.state.jobExperience.clubName} name="clubName" />
            <input value={this.state.jobExperience.from} name="from" />
            <input value={this.state.jobExperience.to} name="to" />
            <input value={this.state.jobExperience.jobTitle} name="jobTitle" />
          </div>
        </form>
      </div>
    );
  }
}

export default InstructorProfileCreateForm;
