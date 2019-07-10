import React from "react";
import styles from "./Backdrop.module.css";

class BackDrop extends React.Component {
  render() {
    return <div onClick={this.props.unShowConfirmModal} id={styles.Backdrop} />;
  }
}

export default BackDrop;
