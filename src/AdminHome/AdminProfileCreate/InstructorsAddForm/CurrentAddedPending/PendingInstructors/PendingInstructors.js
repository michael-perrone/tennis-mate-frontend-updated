import React from "react";
import Axios from "axios";

const PendingInstructors = props => {
  const [pendingToDelete, setPendingToDelete] = React.useState([]);
  const [pending, setPending] = React.useState(props.pending);

  function restore(instructorToBeRestored) {
    return () => {
      let newPendingToBeDeleted = pendingToDelete.filter(
        instructorRestoring =>
          instructorRestoring.id !== instructorToBeRestored.id
      );
      setPendingToDelete(newPendingToBeDeleted);
      let newPending = [...pending, instructorToBeRestored];
      setPending(newPending);
    };
  }

  function addToDeletePending(instructorToBeDeleted) {
    return () => {
      let newPending = pending.filter(
        instructor => instructor.id !== instructorToBeDeleted.id
      );
      setPending(newPending);

      const pendingToDeleteUpdate = [...pendingToDelete, instructorToBeDeleted];
      setPendingToDelete(pendingToDeleteUpdate);
    };
  }

  function removeFromPending() {
    Axios.post("http://localhost:8080/api/clubProfile/removeFromPending", {
      pendingToRemove: pendingToDelete
    }).then(response => {
      console.log(response.data);
    });
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      {pending && (
        <p
          style={{
            marginBottom: "8px",
            textAlign: "center",
            textDecoration: "underline"
          }}
        >
          Pending Instructors
        </p>
      )}
      {pending.map(pendingInstructor => {
        return (
          <div
            style={{
              marginTop: "6px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <p>{pendingInstructor.name}</p>
            <i
              onClick={addToDeletePending(pendingInstructor)}
              style={{ color: "red", marginRight: "40px" }}
              className="fas fa-trash-alt"
            ></i>
          </div>
        );
      })}
      {pendingToDelete.map(instructorDeleted => {
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

export default PendingInstructors;
