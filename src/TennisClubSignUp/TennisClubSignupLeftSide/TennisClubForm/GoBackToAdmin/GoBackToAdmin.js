import React from "react";
import styles from "./GoBackToAdmin.module.css";

class GoBackToAdmin extends React.Component {
  render() {
    return (
      <button id={styles.goBack} onClick={this.props.unEnterAdmin}>
        Back to Admin Form
      </button>
    );
  }
}

export default GoBackToAdmin;
