import React from "react";
import Axios from "axios";

const CurrentInstructors = props => {
  const [currentToDelete, setCurrentToDelete] = React.useState([]);
  const [current, setCurrent] = React.useState(props.current);

  function restore(instructorToBeRestored) {
    return () => {
      let newCurrentToBeDeleted = currentToDelete.filter(
        instructorRestoring =>
          instructorRestoring.id !== instructorToBeRestored.id
      );
      setCurrentToDelete(newCurrentToBeDeleted);
      let newCurrent = [...current, instructorToBeRestored];
      setCurrent(newCurrent);
    };
  }

  function addToDeleteCurrent(instructorToBeDeleted) {
    return () => {
      let newCurrent = current.filter(
        instructor => instructor.id !== instructorToBeDeleted.id
      );
      setCurrent(newCurrent);

      const currentToDeleteUpdate = [...currentToDelete, instructorToBeDeleted];
      setCurrentToDelete(currentToDeleteUpdate);
    };
  }

  function removeFromCurrent() {
    Axios.post("http://localhost:8080/api/clubProfile/removeFromCurrent", {
      currentToRemove: currentToDelete
    }).then(response => {
      console.log(response.data);
    });
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      {current && (
        <p
          style={{
            marginBottom: "8px",
            textAlign: "center",
            textDecoration: "underline"
          }}
        >
          Current Instructors
        </p>
      )}
      {current.map(currentInstructor => {
        return (
          <div
            style={{
              marginTop: "6px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <p>{currentInstructor.name}</p>
            <i
              onClick={addToDeleteCurrent(currentInstructor)}
              style={{ color: "red", marginRight: "40px" }}
              className="fas fa-trash-alt"
            ></i>
          </div>
        );
      })}
      {currentToDelete.map(instructorDeleted => {
        return (
          <div
            style={{
              marginTop: "6px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <p style={{ textDecoration: "line-through", color: "gray" }}>
              {instructorDeleted.name}
            </p>
            <i
              onClick={restore(instructorDeleted)}
              style={{ color: "green", marginRight: "40px" }}
              className="fas fa-trash-restore"
            ></i>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentInstructors;
