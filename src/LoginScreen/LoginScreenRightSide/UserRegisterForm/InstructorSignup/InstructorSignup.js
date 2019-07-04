import React from "react";
import styles from "./InstructorSignup.module.css";
import { connect } from "react-redux";
import { FLIP_FORM } from "../../../../actions/actions";

class InstuctorSignup extends React.Component {
  render() {
    console.log(window.innerHeight);
    return (
      <div id={styles.instructorSignupContainer}>
        <p onClick={this.props.flipFormHandler} id={styles.instructorSignup}>
          {" "}
          OR register as instructor here
        </p>
      </div>
    );
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
    flipFormHandler: () => dispatch({ type: FLIP_FORM })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InstuctorSignup);
