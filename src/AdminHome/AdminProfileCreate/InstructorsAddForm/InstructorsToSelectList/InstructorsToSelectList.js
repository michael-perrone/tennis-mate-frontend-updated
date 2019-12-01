import React from "react";
import styles from "./InstructorsToSelectList.module.css";

const InstructorsToSelectList = props => {
  return (
    <div id={styles.listContainer}>
      {props.instructorsFound.map(instructor => {
        return (
          <div id={styles.mainList}>
            <div>
              <p className={styles.listItem}>Name: {instructor.name}</p>
              <p className={styles.listItem}>Club: {instructor.tennisClub}</p>
              <p className={styles.listItem}>Age: 24</p>
            </div>
            <button
              onClick={props.addInstructorToList(instructor)}
              id={styles.addButton}
            >
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default InstructorsToSelectList;
