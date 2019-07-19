import React from "react";
import styles from "./TryingToBookModal.module.css";

class TryingToBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.booking !== prevProps.booking) {
      console.log(this.props.booking);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div id={styles.tryingToBookModal}>
        <button
          style={{ width: "100px", height: "100px" }}
          onClick={this.props.bookCourt}
        />
      </div>
    );
  }
}

export default TryingToBookModal;
