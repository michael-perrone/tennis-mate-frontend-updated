import React from "react";
import axios from "axios";
import styles from "./TennisClub.module.css";

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
        this.setState({ club: response.data.tennisClub });
      });
  }

  render() {
    console.log(this.state.club);
    return (
      <div id={styles.mainContainer}>
        <p>{this.state.club.clubName}</p>
      </div>
    );
  }
}

export default TennisClub;
