import React from "react";
import styles from "./InstructorSignup.module.css";
import { connect } from "react-redux";
import { SHOW_MODAL } from "../../../../actions/actions";

class InstuctorSignup extends React.Component {
  render() {
    console.log(window.innerHeight);
    return (
      <div id={styles.instructorSignupContainer}>
        <p onClick={this.props.showModalHandler} id={styles.instructorSignup}>
          {" "}
          OR signup as instructor here
        </p>
      </div>
    );
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
    showModalHandler: () => dispatch({ type: SHOW_MODAL })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InstuctorSignup);
