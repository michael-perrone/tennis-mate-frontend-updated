import React, { useState } from "react";
import styles from "./InstructorsAddForm.module.css";
import axios from "axios";
import InstructorsToSelectList from "./InstructorsToSelectList/InstructorsToSelectList";

const InstructorsAddForm = () => {
  const [instructorInput, setInstructorInput] = useState("");
  const [instructorsFoundList, setInstructorsFoundList] = useState("");
  const [error, setError] = useState("");
  const [addedInstructors, setAddedInstructors] = useState([]);
  function instructorInputHandler(event) {
    setInstructorInput(event.target.value);
  }

  function instructorSearch(event) {
    event.preventDefault();
    if (instructorInput.length > 2) {
      axios
        .post("http://localhost:8080/api/instructorList/instructorSearch", {
          name: instructorInput
        })
        .then(response => {
          if (response.status === 200) {
            setInstructorsFoundList(response.data.instructors);
          }
        });
    } else {
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
      {addedInstructors.length > 0 && (
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
            style={{ width: "75px", height: "32px", backgroundColor: "white" }}
          >
            Submit All
          </button>
        </div>
      )}
      <form style={{ position: "relative" }}>
        <p
          className={styles.entryError}
          id={
            error !== "" && instructorInput.length < 3
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
        <button onClick={instructorSearch} id={styles.searchButton}>
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

export default InstructorsAddForm;
