import React from "react";
import axios from "axios";

class TennisCourts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCourts: "",
      clubName: "",
      bookings: "",
      whosBooking: "",
      courts: "",
      times: ""
    };
  }

  componentDidMount() {
    axios.get();
  }

  render() {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}

export default TennisCourts;
