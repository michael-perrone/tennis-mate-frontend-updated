import React, { useState, useEffect } from "react";
import styles from "./InstructorsAddForm.module.css";
import axios from "axios";
import { connect } from "react-redux";
import InstructorsToSelectList from "./InstructorsToSelectList/InstructorsToSelectList";
import CurrentAddedPending from "./CurrentAddedPending/CurrentAddedPending";

const InstructorsAddForm = props => {
  const [hideButton, setHideButton] = useState(false);
  const [instructorInput, setInstructorInput] = useState("");
  const [instructorsFoundList, setInstructorsFoundList] = useState("");
  const [error, setError] = useState("");
  const [addedInstructors, setAddedInstructors] = useState([]);
  const [showAddSelectPending, setShowAddSelectPending] = useState(false);
  const [switchToAdded, setSwitchToAdded] = useState(false);

  function instructorInputHandler(event) {
    setHideButton(true);
    setInstructorInput(event.target.value);
    setTimeout(() => setHideButton(false), 1200);
    setShowAddSelectPending(false);
  }

  function hideAdded() {
    setSwitchToAdded(false);
  }

  console.log(props);

  function instructorSearch(event) {
    event.preventDefault();
    if (instructorInput.length > 2) {
      axios
        .post("http://localhost:8080/api/instructorList/instructorSearch", {
          name: instructorInput
        })
        .then(response => {
          console.log("hi");
          if (response.status === 200) {
            setError("");
            setInstructorsFoundList(response.data.instructors);
          }
        })
        .catch(error => {
          if (error.response.status == 406) {
            setError("No Instructors Found");
            setInstructorsFoundList([]);
          }
        });
    } else {
      setInstructorsFoundList([]);
      setError("Please fill out the name of the instructor");
    }
  }

  function addInstructorToList(newInstructor) {
    return () => {
      console.log(newInstructor);
      let newInstructorList = [...addedInstructors];
      newInstructorList.push(newInstructor);
      setAddedInstructors(newInstructorList);
      setSwitchToAdded(true);
    };
  }

  function filterAdded(deletedPerson) {
    const newAdded = addedInstructors.filter(element => {
      return element.id !== deletedPerson.id;
    });
    setAddedInstructors(newAdded);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center"
      }}
    >
      {(props.current || props.pending || props.addedInstructors.length) && (
        <CurrentAddedPending
          setNewPending={props.setNewPending}
          hideAdded={hideAdded}
          showAddedOveride={switchToAdded}
          current={props.current}
          added={addedInstructors}
          pending={props.pending}
          filterAdded={filterAdded}
        />
      )}{" "}
      <form style={{ position: "relative" }}>
        <p
          className={styles.entryError}
          id={
            (error !== "" && instructorInput.length < 3) ||
            error === "No Instructors Found"
              ? styles.entryErrorShow
              : ""
          }
        >
          {error}
        </p>
        <input
          onChange={instructorInputHandler}
          value={instructorInput}
          placeholder="Instructor Search"
          id={styles.instructorSearch}
        />
        <button
          onClick={instructorSearch}
          id={hideButton ? styles.hideButton : ""}
          className={styles.searchButton}
        >
          Search
        </button>
      </form>
      {instructorsFoundList.length > 0 && (
        <InstructorsToSelectList
          addInstructorToList={addInstructorToList}
          instructorsFound={instructorsFoundList}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    admin: state.authReducer.admin
  };
};

export default connect(mapStateToProps)(InstructorsAddForm);
