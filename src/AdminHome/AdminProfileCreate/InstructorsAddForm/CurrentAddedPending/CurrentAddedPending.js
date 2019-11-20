import React from "react";
import styles from "./CurrentAddedPending.module.css";
import CurrentInstructors from "./CurrentInstructors/CurrentInstructors";
import AddedInstructors from "./AddedInstructors/AddedInstructors";
import PendingInstructors from "./PendingInstructors/PendingInstructors";

const CurrentAddedPending = props => {
  const [currentSelected, setCurrentSelected] = React.useState(true);
  const [addedSelected, setAddedSelected] = React.useState(false);
  const [pendingSelected, setPendingSelected] = React.useState(false);

  console.log(props);

  function selectCurrent() {
    if (!currentSelected) {
      setCurrentSelected(true);
      setAddedSelected(false);
      setPendingSelected(false);
      props.hideAdded();
    } else {
      setCurrentSelected(false);
    }
  }

  function selectAdded() {
    if (!addedSelected) {
      setAddedSelected(true);
      setCurrentSelected(false);
      setPendingSelected(false);
    } else {
      setAddedSelected(false);
    }
  }

  function selectPending() {
    if (!pendingSelected) {
      setPendingSelected(true);
      setCurrentSelected(false);
      setAddedSelected(false);
      props.hideAdded();
    } else if (props.showAddedOveride && pendingSelected) {
      setPendingSelected(true);
      setCurrentSelected(false);
      setAddedSelected(false);
      props.hideAdded();
    } else {
      props.hideAdded();
      setPendingSelected(false);
    }
  }

  return (
    <div>
      <div id={styles.mainContainer}>
        {props.current.length > 0 && (
          <button
            onClick={selectCurrent}
            style={{
              border:
                currentSelected && !props.showAddedOveride
                  ? "2px solid black"
                  : ""
            }}
            className={styles.buttonSelectors}
          >
            Current
          </button>
        )}
        {props.added.length > 0 && (
          <button
            style={{
              border:
                addedSelected || props.showAddedOveride ? "2px solid black" : ""
            }}
            onClick={selectAdded}
            className={styles.buttonSelectors}
          >
            Added
          </button>
        )}
        {props.pending.length > 0 && (
          <button
            style={{
              border:
                pendingSelected && !props.showAddedOveride
                  ? "2px solid black"
                  : ""
            }}
            onClick={selectPending}
            className={styles.buttonSelectors}
          >
            Pending
          </button>
        )}
      </div>
      {props.current.length > 0 &&
        currentSelected &&
        !props.showAddedOveride && (
          <CurrentInstructors current={props.current} />
        )}
      {props.pending.length > 0 &&
        pendingSelected &&
        !props.showAddedOveride && (
          <PendingInstructors pending={props.pending} />
        )}
      {(addedSelected || props.showAddedOveride) && (
        <AddedInstructors addedInstructors={props.added} />
      )}
    </div>
  );
};

export default CurrentAddedPending;
