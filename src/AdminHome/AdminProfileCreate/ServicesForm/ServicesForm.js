import React from "react";
import styles from "./ServicesForm.module.css";
import { relative } from "path";

class ServicesForm extends React.Component {
  render() {
    return (
      <div>
        <p className={styles.servicesP}>
          Does your club offer Private Tennis Lessons?
        </p>
        <label>
          <input
            className={styles.radio}
            name="tennisLessons"
            type="radio"
            value="Yes"
          />
        </label>
        <input
          className={styles.radio}
          name="tennisLessons"
          type="radio"
          value="No"
        />
        <p className={styles.servicesP}>Does your club offer Group Clinics?</p>
        <input
          className={styles.radio}
          name="groupClinics"
          type="radio"
          value="Yes"
        />
        <input
          className={styles.radio}
          name="groupClinics"
          type="radio"
          value="No"
        />
        <p className={styles.servicesP}>
          Does your club offer Racquet Stringing?
        </p>
        <input
          className={styles.radio}
          name="racquetStringing"
          type="radio"
          value="Yes"
        />
        <input
          className={styles.radio}
          name="racquetStringing"
          type="radio"
          value="No"
        />
        <p className={styles.servicesP}>
          Does your club offer a Summer Camp/Program for children?
        </p>
        <input
          className={styles.radio}
          name="summerCamp"
          type="radio"
          value="Yes"
        />
        <input
          className={styles.radio}
          name="summerCamp"
          type="radio"
          value="No"
        />
        <p className={styles.servicesP}>Does your club have a Gym?</p>
        <input className={styles.radio} name="gym" type="radio" value="Yes" />
        <input className={styles.radio} name="gym" type="radio" value="No" />
        <p className={styles.servicesP}>Does your club offer tournaments?</p>
        <input
          name="tournaments"
          className={styles.radio}
          type="radio"
          value="Yes"
        />
        <input
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
          style={{
            marginLeft: "10px",
            height: "40px",
            width: "40px"
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default ServicesForm;
