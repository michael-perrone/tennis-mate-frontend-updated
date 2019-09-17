import React from "react";
import styles from "./TennisClubSearchBar.module.css";

class TennisClubSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubSearch: "",
      matchingClubs: [],
      isSearchBeingUsed: false
    };
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
        console.log(club.clubs.className);
        console.log(event.target.value);
        matchesArray.push(club);
      }
    });
    this.setState({ matchingClubs: matchesArray });
  }

  render() {
    return (
      <div id={styles.searchBarNavContainer}>
        <p id={styles.logoLeftBar}>Tennis Mate</p>
        <div style={{ display: "flex" }}>
          <i
            style={{
              color: "white",
              fontSize: "26px",
              padding: "6px",
              border: "2px solid rgb(152, 241, 152)",
              backgroundColor: "rgb(82, 82, 82)"
            }}
            className="fas fa-search-location"
          ></i>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
                    key={element.clubs._id}
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      height: "40px"
                    }}
                  >
                    <p>{element.clubs.clubName}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default TennisClubSearchBar;
