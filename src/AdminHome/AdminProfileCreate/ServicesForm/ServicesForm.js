import React from "react";
import styles from "./ServicesForm.module.css";
import Axios from "axios";

class ServicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesForm: {
        tennisLessons: "No",
        groupClinics: "No",
        racquetStringing: "No",
        summerProgram: "No",
        gym: "No",
        tournaments: "No",
        otherServices: ""
      },
      otherSerivcesArray: []
    };
    this.changeRadios = this.changeRadios.bind(this);
    this.submitServices = this.submitServices.bind(this);
  }

  addServices() {
    const newArray = [...this.state.otherServicesArray];
    newArray.push(this.state.servicesForm.otherServices);
    this.setState({ otherServicesArray: newArray });
  }

  changeRadios(event) {
    const newStateObject = { ...this.state.servicesForm };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ servicesForm: newStateObject });
  }

  submitServices() {
    Axios.post(
      "http://localhost:8080/api/clubProfile",
      this.state.servicesForm,
      { headers: { "x-auth-token": localStorage.getItem("adminToken") } }
    );
  }

  render() {
    return (
      <div>
        <p className={styles.servicesP}>
          Does your club offer Private Tennis Lessons?
        </p>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="tennisLessons"
          type="radio"
          value="Yes"
          checked={this.state.servicesForm.tennisLessons === "Yes"}
        />
        <label value="Yes">Yes</label>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="tennisLessons"
          type="radio"
          value="No"
        />
        <label value="No">No</label>
        <p className={styles.servicesP}>Does your club offer Group Clinics?</p>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="groupClinics"
          type="radio"
          value="Yes"
        />
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="groupClinics"
          type="radio"
          value="No"
        />
        <p className={styles.servicesP}>
          Does your club offer Racquet Stringing?
        </p>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="racquetStringing"
          type="radio"
          value="Yes"
        />
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="racquetStringing"
          type="radio"
          value="No"
        />
        <p className={styles.servicesP}>
          Does your club offer a Summer Camp/Program for children?
        </p>

        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="summerProgram"
          type="radio"
          value="Yes"
        />
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="summerProgram"
          type="radio"
          value="No"
        />
        <p className={styles.servicesP}>Does your club have a Gym?</p>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="gym"
          type="radio"
          value="Yes"
        />
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="gym"
          type="radio"
          value="No"
        />
        <p className={styles.servicesP}>Does your club offer tournaments?</p>
        <input
          onChange={this.changeRadios}
          name="tournaments"
          className={styles.radio}
          type="radio"
          value="Yes"
        />
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="tournaments"
          type="radio"
          value="No"
        />
        <p style={{ borderBottom: "none" }} className={styles.servicesP}>
          Is there any other services your club offers that you would like to
          include?
        </p>
        <input id={styles.otherServiceInput} placeholder="Other Service" />
        <button
          onClick={this.addServices}
          style={{
            marginLeft: "10px",
            height: "40px",
            width: "40px"
          }}
        >
          Add
        </button>
        <button
          onClick={this.submitServices}
          style={{
            width: "160px",
            height: "40px",
            borderRadius: "5px",
            border: "1px solid black"
          }}
        >
          Submit Services
        </button>
      </div>
    );
  }
}

export default ServicesForm;
