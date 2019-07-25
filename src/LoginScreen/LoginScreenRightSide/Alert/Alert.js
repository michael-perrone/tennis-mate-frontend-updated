import React from "react";
import styles from "./Alert.module.css";
import { connect } from "react-redux";

class Alert extends React.Component {
  render() {
    console.log(this.props.alert.alertType);
    return (
      <div id={styles.alertContainer} style={{ height: "55px" }}>
        <div>
          {this.props.alert.alertType === "danger" && (
            <p id={styles.danger}>{this.props.alert.msg}</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  };
};

export default connect(mapStateToProps)(Alert);
