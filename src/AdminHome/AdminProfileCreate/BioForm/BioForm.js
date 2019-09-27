import React from "react";
import axios from "axios";
import {connect} from 'react-redux';
class BioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: ""
    };
    this.submitBio = this.submitBio.bind(this);
    this.getTextAreaInput = this.getTextAreaInput.bind(this);
  }

  submitBio(event) {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8080/api/clubprofile/",
        { bio: this.state.bio },
        {
          headers: { "x-auth-token": this.props.adminToken }
        }
      )
      .then(response => {
        console.log(response);
      });
    this.setState({ bio: "" });
  }

  getTextAreaInput(event) {
    this.setState({ bio: event.target.value });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "500px",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <p style={{ fontSize: "20px" }}>Please enter a bio about your club.</p>
        <textarea
          style={{
            marginTop: "70px",
            fontFamily: "Times New Roman",
            letterSpacing: ".5px",
            fontSize: "18px"
          }}
          rows="12"
          cols="70"
          value={this.state.bio}
          onChange={this.getTextAreaInput}
        />
        <button
          onClick={this.submitBio}
          style={{
            marginTop: "70px",
            width: "140px",
            height: "30px",
            fontSize: "20px"
          }}
        >
          Submit Bio
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminToken: state.authReducer.adminToken
  }
}

export default connect(mapStateToProps)(BioForm);
