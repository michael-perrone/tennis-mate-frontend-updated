import React from "react";
import styles from "./ServicesForm.module.css";
import Axios from "axios";
import {connect} from 'react-redux';

class ServicesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesForm: {
        tennisLessons: "",
        groupClinics: "",
        racquetStringing: "",
        summerProgram: "",
        tournaments: "",
        gym: ""
      },
      otherServices: "",
      otherServicesArray: [],
      services: [],
      empty: ""
    };
    this.addServices = this.addServices.bind(this);
    this.changeRadios = this.changeRadios.bind(this);
    this.submitServices = this.submitServices.bind(this);
    this.serviceInputHandler = this.serviceInputHandler.bind(this);
  }

  componentWillMount() {
    let newServicesForm = {...this.state.servicesForm}
    if(this.props.services.length > 0) {
        let name = [];
       this.props.services.forEach(element => {
         name.push(Object.keys(element))
       })
        for(let i = 0; i < 6; i++) {
            if(this.props.services[i][`${name[i]}`] === "Yes") {
              newServicesForm[`${name[i]}`] = "Yes";            
          }
          if (this.props.services[i][`${name[i]}`] === "No") {
            newServicesForm[`${name[i]}`] = "No"
          }
        }
        console.log(newServicesForm)
        this.setState({servicesForm: newServicesForm})
    }
  }

  serviceInputHandler(event) {
    this.setState({ otherServices: event.target.value });
  }

  addServices(event) {
    event.preventDefault();
    const newArray = [...this.state.otherServicesArray];
    newArray.push(this.state.otherServices);
    this.setState({ otherServicesArray: newArray });
    this.setState({ otherServices: "" });
  }

  changeRadios(event) {
    const newStateObject = { ...this.state.servicesForm };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ servicesForm: newStateObject });
  }

  submitServices(event) {
    event.preventDefault();
    let newServicesArray = [];
    if (this.state.servicesForm.tennisLessons !== "") {
      newServicesArray.push({
        tennisLessons: this.state.servicesForm.tennisLessons
      });
    } else {
      this.setState({ empty: true });
    }
    if (this.state.servicesForm.groupClinics !== "") {
      newServicesArray.push({
        groupClinics: this.state.servicesForm.groupClinics
      });
    } else {
      this.setState({ empty: true });
    }
    if (this.state.servicesForm.racquetStringing !== "") {
      newServicesArray.push({
        racquetStringing: this.state.servicesForm.racquetStringing
      });
    } else {
      this.setState({ empty: true });
    }
    if (this.state.servicesForm.summerProgram !== "") {
      newServicesArray.push({
        summerProgram: this.state.servicesForm.summerProgram
      });
    } else {
      this.setState({ empty: true });
    }
    if (this.state.servicesForm.gym !== "") {
      newServicesArray.push({ gym: this.state.servicesForm.gym });
    } else {
      this.setState({ empty: true });
    }
    if (this.state.servicesForm.tournaments !== "") {
      newServicesArray.push({
        tournaments: this.state.servicesForm.tournaments
      });
    } else {
      this.setState({ empty: true });
    }

    console.log(newServicesArray);

    const objectToSend = {
      services: newServicesArray,
      otherServices: this.state.otherServicesArray
    };
    console.log(objectToSend);

    Axios.post("http://localhost:8080/api/clubProfile", objectToSend, {
      headers: { "x-auth-token": this.props.adminToken }
    });
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
          id="Yes1"
          checked={this.state.servicesForm.tennisLessons === "Yes" }
        />
        <label htmlFor="Yes1">Yes</label>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="tennisLessons"
          type="radio"
          value="No"
          id="No1"
          checked={this.state.servicesForm.tennisLessons === "No"}
        />
        <label htmlFor="No1">No</label>
        <p className={styles.servicesP}>Does your club offer Group Clinics?</p>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="groupClinics"
          type="radio"
          value="Yes"
          id="Yes2"
          checked={this.state.servicesForm.groupClinics === "Yes" }
        />
        <label htmlFor="Yes2">Yes</label>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="groupClinics"
          type="radio"
          value="No"
          id="No2"
          checked={this.state.servicesForm.groupClinics === "No"}
        />
        <label htmlFor="No2">No</label>
        <p className={styles.servicesP}>
          Does your club offer Racquet Stringing?
        </p>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="racquetStringing"
          type="radio"
          value="Yes"
          id="Yes3"
          checked={this.state.servicesForm.racquetStringing === "Yes" }
        />
        <label htmlFor="Yes3">Yes</label>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="racquetStringing"
          type="radio"
          value="No"
          id="No3"
          checked={this.state.servicesForm.racquetStringing === "No"}
        />
        <label htmlFor="No3">No</label>
        <p className={styles.servicesP}>
          Does your club offer a Summer Camp/Program for children?
        </p>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="summerProgram"
          type="radio"
          value="Yes"
          id="Yes4"
          checked={this.state.servicesForm.summerProgram === "Yes" }
        />
        <label htmlFor="Yes4">Yes</label>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="summerProgram"
          type="radio"
          value="No"
          id="No4"
          checked={this.state.servicesForm.summerProgram === "No"}
        />
        <label htmlFor="No4">No</label>
        <p className={styles.servicesP}>Does your club have a Gym?</p>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="gym"
          type="radio"
          value="Yes"
          id="Yes5"
          checked={this.state.servicesForm.gym === "Yes" }
        />
        <label htmlFor="Yes5">Yes</label>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="gym"
          type="radio"
          value="No"
          id="No5"
          checked={this.state.servicesForm.gym === "No"}
        />
        <label htmlFor="No5">No</label>
        <p className={styles.servicesP}>Does your club offer tournaments?</p>
        <input
          onChange={this.changeRadios}
          name="tournaments"
          className={styles.radio}
          type="radio"
          value="Yes"
          id="Yes6"
          checked={this.state.servicesForm.tournaments === "Yes" }
        />
        <label htmlFor="Yes6">Yes</label>
        <input
          onChange={this.changeRadios}
          className={styles.radio}
          name="tournaments"
          type="radio"
          value="No"
          id="No6"
          checked={this.state.servicesForm.tournaments === "No"}
        />
        <label htmlFor="No6">No</label>
        <p style={{ borderBottom: "none" }} className={styles.servicesP}>
          Is there any other services your club offers that you would like to
          include?
        </p>
        <input
          onChange={this.serviceInputHandler}
          id={styles.otherServiceInput}
          placeholder="Other Service"
          value={this.state.otherServices}
        />
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
            width: "102px",
            height: "27px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        >
          Submit Services
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminToken: state.authReducer.adminToken
  }
}

export default connect(mapStateToProps)(ServicesForm);
