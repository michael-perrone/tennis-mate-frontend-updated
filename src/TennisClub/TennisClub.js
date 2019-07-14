import React from "react";
import axios from "axios";

class TennisClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      club: ""
    };
  }
  componentDidMount() {
    axios
      .post("http://localhost:8080/api/club", {
        clubName: this.props.match.params.clubName
      })
      .then(response => {
        console.log(response.data.tennisClub);
      });
  }

  render() {
    console.log();
    return <div />;
  }
}

export default TennisClub;
