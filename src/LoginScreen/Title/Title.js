import React from "react";
import styles from "./Title.module.css";

class Title extends React.Component {
  render() {
    return (
      <div id={styles.TitleContainer}>
        <p className={styles.jello} id={styles.title}>
          Tennis Mate
        </p>
      </div>
    );
  }
}

export default Title;
