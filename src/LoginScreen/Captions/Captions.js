import React from "react";
import styles from "./Captions.module.css";
class Captions extends React.Component {
  render() {
    return (
      <div id={styles.captionsContainerMain}>
        <div id={styles.captionsContainerSub}>
          <p className={styles.captions}>
            Get connected to tennis clubs and instructors.
          </p>
          <p className={styles.captions}>Find other tennis players near you.</p>

          <p className={styles.captions}>
            Improve your game while having fun.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Captions;
