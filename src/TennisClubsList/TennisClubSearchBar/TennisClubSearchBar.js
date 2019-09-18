import React from "react";
import styles from "./TennisClubSearchBar.module.css";
import { withRouter } from "react-router-dom";
import NameDropDown from "./NameDropDown/NameDropDown";

class TennisClubSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubSearch: "",
      matchingClubs: [],
      isSearchBeingUsed: false
    };
    this.selectPane = this.selectPane.bind(this);
    this.getClubValue = this.getClubValue.bind(this);
  }

  getClubValue(event) {
    if (event.target.value !== "") {
      this.setState({ isSearchBeingUsed: true });
    }
    this.setState({ clubSearch: event.target.value });

    const matchesArray = [];
    this.props.clubs.forEach(club => {
      if (club.clubs.clubName.includes(event.target.value)) {
        matchesArray.push(club);
      }
    });
    this.setState({ matchingClubs: matchesArray });
  }

  selectPane(secondPartUrlClubName) {
    this.props.history.push(`/clubs/${secondPartUrlClubName}`);
  }

  render() {
    return (
      <div id={styles.searchBarNavContainer}>
        <p id={styles.logoLeftBar}>Tennis Mate</p>
        <div
          style={{
            position: "relative",
            display: "flex",
            top: "14px",
            left: "80px"
          }}
        >
          <i
            style={{
              height: "26px",
              color: "lightgreen",
              fontSize: "26px",
              padding: "6px",
              border: "2px solid rgb(152, 241, 152)",
              backgroundColor: "rgb(82, 82, 82)"
            }}
            className="fas fa-search-location"
          ></i>
          <div>
            <input
              onChange={this.getClubValue}
              value={this.state.clubSearch}
              id={styles.searchBar}
              placeholder="Find Your Tennis Club"
            />
            {this.state.matchingClubs.length > 0 &&
              this.state.clubSearch.length > 0 &&
              this.state.matchingClubs.map(element => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.selectPane(element.clubs.clubNameAllLower)
                    }
                    key={element.clubs._id}
                    id={styles.searchPane}
                  >
                    <img
                      style={{
                        height: "75px",
                        width: "120px",
                        borderRadius: "14px",
                        padding: "8px"
                      }}
                      src="data:image/jpeg;base64,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"
                    ></img>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                    >
                      <p style={{ paddingTop: "10px", paddingLeft: "25px" }}>
                        {element.clubs.clubName}
                      </p>
                      <p style={{ paddingTop: "10px", paddingLeft: "25px" }}>
                        {element.clubs.city}, {element.clubs.state}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <NameDropDown />
      </div>
    );
  }
}

export default withRouter(TennisClubSearchBar);
