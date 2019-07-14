import React from "react";
import axios from "axios";

class TennisClubsList extends React.Component {
  constructor() {
    super();
    this.state = {
      tennisClubs: ""
    };
  }

  componentDidMount() {
    axios.get();
  }

  render() {
    return <div />;
  }
}

export default TennisClubsList;
