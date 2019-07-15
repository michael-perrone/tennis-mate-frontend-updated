import React from "react";

class CourtColumns extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.courtNumber}</p>
      </div>
    );
  }
}

export default CourtColumns;
