import React from "react";
import styles from "./InstructorProfileCreateForm.module.css";

class InstructorProfileCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSelectors: [
        { name: "Job Experience", selected: false },
        { name: "Years Teaching", selected: false },
        { name: "Location", selected: false },
        { name: "Certifications", selected: false },
        { name: "Rankings", selected: false },
        { name: "Player Specialization", selected: false },
        { name: "Lesson Rate", selected: false },
        { name: "Photo", selected: false }
      ]
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(index) {}

  render() {
    return (
      <div>
        <div id={styles.formSelectors}>
          {this.state.formSelectors.map((element, index) => {
            return (
              <p
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
        <form id={styles.instructorProfileCreateForm} />
      </div>
    );
  }
}

export default InstructorProfileCreateForm;
