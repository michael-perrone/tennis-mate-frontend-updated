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
    return (
      <div id={styles.mainContainer}>
        <p>{this.state.club.clubName}</p>
        <button onClick={this.showCourtsHandler}>click me for courts</button>
        {this.state.showCourts && (
          <CourtContainer
            clubOpenTimeNumber={this.state.club.clubOpenTimeNumber}
            clubCloseTimeNumber={this.state.club.clubCloseTimeNumber}
            clubOpenTimeAMPM={this.state.club.clubOpenTimeAMPM}
            clubCloseTimeAMPM={this.state.club.clubCloseTimeAMPM}
            numberCourts={this.state.club.numberCourts}
          />
        )}
      </div>
    );
  }
}

export default TennisClub;
