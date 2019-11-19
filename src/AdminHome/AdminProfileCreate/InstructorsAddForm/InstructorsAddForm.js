import React, { useState } from "react";
import styles from "./InstructorsAddForm.module.css";
import axios from "axios";
import { connect } from "react-redux";
import InstructorsToSelectList from "./InstructorsToSelectList/InstructorsToSelectList";

const InstructorsAddForm = props => {
  const [readyToBeClicked, setReadyToBeClicked] = useState(true);
  const [instructorInput, setInstructorInput] = useState("");
  const [instructorsFoundList, setInstructorsFoundList] = useState("");
  const [error, setError] = useState("");
  const [addedInstructors, setAddedInstructors] = useState([]);
  const [instructorsSubmitted, setInstructorsSubmitted] = useState(false);
  function instructorInputHandler(event) {
    setReadyToBeClicked(false);
    setInstructorInput(event.target.value);
    setTimeout(() => setReadyToBeClicked(true), 2200);
  }

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
      let newInstructorList = [...addedInstructors];
      newInstructorList.push(newInstructor);
      setAddedInstructors(newInstructorList);
    };
  }

  function sendInstructorIds() {
    let instructors = [];
    addedInstructors.forEach(instructor => {
      instructors.push(instructor._id);
    });
    axios
      .post("http://localhost:8080/api/clubProfile/addInstructorsToClub", {
        tennisClub: props.admin.admin.clubId,
        instructors
      })
      .then(response => {
        if (response.status === 200) {
          setInstructorsSubmitted(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
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
      {" "}
      {addedInstructors.length > 0 && !instructorsSubmitted && (
        <div
          style={{
            marginBottom: "12px",
            display: "flex",
            justifyContent: "space-between",
            width: "344px"
          }}
        >
          <div>
            <p style={{ textDecoration: "underline", marginBottom: "4px" }}>
              Instructors Added
            </p>
            {addedInstructors.map(instructorAdded => {
              return <p>{instructorAdded.fullName}</p>;
            })}
          </div>
          <button
            onClick={sendInstructorIds}
            style={{
              width: addedInstructors.length === 1 ? "120px" : "75px",
              height: "32px",
              backgroundColor: "white"
            }}
          >
            {addedInstructors.length === 1 ? "Submit Instructor" : "Submit All"}
          </button>
        </div>
      )}
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
          disabled={!readyToBeClicked}
          onClick={instructorSearch}
          id={styles.searchButton}
        >
          {!readyToBeClicked ? "loading" : "Search"}
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
