import React from "react";
import axios from "axios";
import styles from "./TennisClub.module.css";
import CourtContainer from "./CourtContainer/CourtContainer";

class TennisClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      club: "",
      showCourts: false
    };
    this.showCourtsHandler = this.showCourtsHandler.bind(this);
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

  showCourtsHandler() {
    this.setState({ showCourts: true });
  }

  render() {
    console.log(this.state.club);
    return (
      <div id={styles.mainContainer}>
        <p>{this.state.club.clubName}</p>
        <button onClick={this.showCourtsHandler} />
        {this.state.showCourts && (
          <CourtContainer numberCourts={this.state.club.numberCourts} />
        )}
      </div>
    );
  }
}

export default TennisClub;
