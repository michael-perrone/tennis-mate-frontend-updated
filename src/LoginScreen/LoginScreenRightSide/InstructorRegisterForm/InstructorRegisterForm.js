import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";
import AlertInstructorFirstName from "../../../AlertInstructor/AlertInstructorFirstName";
import AlertInstructorLastName from "../../../AlertInstructor/AlertInstructorLastName";
import AlertInstructorEmail from "../../../AlertInstructor/AlertInstructorEmail";
import AlertInstructorPhoneNumber from "../../../AlertInstructor/AlertInstructorPhoneNumber";
import AlertInstructorPassword from "../../../AlertInstructor/AlertInstructorPassword";
import AlertInstructorPasswordConfirm from "../../../AlertInstructor/AlertInstructorPasswordConfirm";
import AlertInstructorAge from "../../../AlertInstructor/AlertInstructorAge";
import otherStyles from "../UserRegisterForm/UserRegisterForm.module.css";
import AlertInstructorGender from "../../../AlertInstructor/AlertInstructorGender";
import styles from "./InstructorRegisterForm.module.css";
import {
  INSTRUCTOR_WANTS_TO_REGISTER,
  INSTRUCTOR_REGISTER_SUCCESS
} from "../../../actions/actions";
import decoder from "jwt-decode";

class InstructorRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.registerInstructor = this.registerInstructor.bind(this);
    this.getInstructorInput = this.getInstructorInput.bind(this);
    this.signingUp = this.signingUp.bind(this);

    this.state = {
      instructor: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        createPassword: "",
        passwordConfirm: "",
        tennisClub: "",
        age: "",
        gender: ""
      },
      signingUpState: false,
      dirty: {
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        createPassword: false,
        passwordConfirm: false,
        age: false,
        gender: false,
        tennisClub: false
      },
      showOptionals: false
    };
    this.setDirty = this.setDirty.bind(this);
  }

  hideOptionals = () => {
    this.setState({ showOptionals: false });
  };

  setDirty(event) {
    console.log(event.target.name);
    const newObject = { ...this.state.dirty };
    newObject[event.target.name] = true;
    this.setState({ dirty: newObject });
  }

  getInstructorInput(event) {
    const newInstructorStateObject = { ...this.state.instructor };
    newInstructorStateObject[event.target.name] = event.target.value;
    console.log(newInstructorStateObject);

    this.setState({ instructor: newInstructorStateObject });
  }

  validatePhone = phone => {
    let newRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return newRe.test(phone);
  };

  validateEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  registerInstructor(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/instructorSignup", this.state.instructor)
      .then(response => {
        if (response.status === 200) {
          this.props.instructorRegisterSuccess(response.data.token);
          this.props.history.push(`/instructor/${this.props.instructor.id}`);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  signingUp() {
    this.setState({ signingUpState: true });
  }

  showOptionals = () => {
    this.setState({ showOptionals: !this.state.showOptionals });
  };

  render() {
    let id = "";
    if (this.props.instructorRegister) {
      id = styles.animation;
    }
    return (
      <div className={styles.registerFormContainer} id={id}>
        <p
          style={{
            opacity: this.state.signingUpState ? "0" : 1,
            position: "relative",
            left: "40px",
            color: "yellowgreen"
          }}
          id={otherStyles.registerP}
        >
          Register as an Instructor
        </p>
        <div
          onMouseEnter={this.showOptionals}
          onMouseLeave={this.hideOptionals}
          className={styles.registerForm}
          style={{
            height: this.state.signingUpState ? "630px" : "510px",
            transform: this.state.signingUpState
              ? "translateY(-100px)"
              : "translateY(0px)"
          }}
        >
          <form
            id={styles.form}
            style={{ height: this.state.signingUpState ? "610px" : "510px" }}
          >
            <div className={otherStyles.divWidthControl}>
              <label
                style={{ color: "yellowgreen" }}
                className={otherStyles.labels}
              >
                First Name:
              </label>
              <input
                style={{ border: "2px solid yellowgreen" }}
                onBlur={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getInstructorInput}
                value={this.state.instructor.firstName}
                name="firstName"
                placeholder="First Name"
                id={otherStyles.input1}
                className={otherStyles.inputs}
                type="text"
              />
            </div>
            {this.state.dirty.firstName === true &&
              this.state.instructor.firstName === "" && (
                <AlertInstructorFirstName />
              )}
            <div className={otherStyles.divWidthControl}>
              <label
                style={{ color: "yellowgreen", letterSpacing: "0.6px" }}
                className={otherStyles.labels}
              >
                Last Name:
              </label>
              <input
                style={{
                  border: "2px solid yellowgreen"
                }}
                onBlur={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getInstructorInput}
                value={this.state.instructor.lastName}
                name="lastName"
                placeholder="Last Name"
                id={otherStyles.input1}
                className={otherStyles.inputs}
                type="text"
              />
            </div>
            {this.state.dirty.lastName === true &&
              this.state.instructor.lastName === "" && (
                <AlertInstructorLastName />
              )}
            <div className={otherStyles.divWidthControl}>
              <label
                style={{ color: "yellowgreen", letterSpacing: "0.6px" }}
                className={otherStyles.labels}
              >
                Email Address:
              </label>
              <input
                style={{
                  border: "2px solid yellowgreen"
                }}
                onBlur={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getInstructorInput}
                value={this.state.instructor.email}
                name="email"
                placeholder="Email Address"
                id={otherStyles.input2}
                className={otherStyles.inputs}
                type="text"
              />
            </div>
            {this.validateEmail(this.state.instructor.email) === false &&
              this.state.dirty.email === true && <AlertInstructorEmail />}
            <div className={otherStyles.divWidthControl}>
              <label
                style={{ color: "yellowgreen" }}
                className={otherStyles.labels}
              >
                Phone Number:
              </label>
              <input
                style={{ border: "2px solid yellowgreen" }}
                onBlur={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getInstructorInput}
                value={this.state.instructor.phoneNumber}
                name="phoneNumber"
                placeholder="Phone Number"
                id={otherStyles.input2}
                className={otherStyles.inputs}
                type="text"
              />
            </div>
            {this.validatePhone(this.state.instructor.phoneNumber) === false &&
              this.state.dirty.phoneNumber === true && (
                <AlertInstructorPhoneNumber />
              )}
            <div className={otherStyles.divWidthControl}>
              <label
                style={{ color: "yellowgreen", letterSpacing: "1.4px" }}
                className={otherStyles.labels}
              >
                Create Password:
              </label>
              <input
                style={{ border: "2px solid yellowgreen" }}
                onKeyDown={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getInstructorInput}
                value={this.state.instructor.createPassword}
                name="createPassword"
                placeholder="Create Password"
                id={otherStyles.ml4}
                className={otherStyles.inputs}
                type="password"
              />
            </div>
            {this.state.dirty.createPassword === true &&
              this.state.instructor.createPassword.length < 7 && (
                <AlertInstructorPassword />
              )}
            <div className={otherStyles.divWidthControl}>
              <label
                style={{ color: "yellowgreen" }}
                className={otherStyles.labels}
              >
                Password Confirm:
              </label>
              <input
                style={{ border: "2px solid yellowgreen" }}
                onKeyDown={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getInstructorInput}
                value={this.state.instructor.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
                id={otherStyles.ml8}
                className={otherStyles.inputs}
                type="password"
              />
            </div>
            {this.state.dirty.passwordConfirm === true &&
              this.state.instructor.passwordConfirm !==
                this.state.instructor.createPassword && (
                <AlertInstructorPasswordConfirm />
              )}
            <div className={otherStyles.divWidthControl}>
              <label
                style={{ color: "yellowgreen", letterSpacing: "0.4px" }}
                className={otherStyles.labels}
              >
                Current Employer:
              </label>
              <input
                style={{
                  border: "2px solid yellowgreen"
                }}
                onFocus={this.signingUp}
                onChange={this.getInstructorInput}
                value={this.state.instructor.tennisClub}
                name="tennisClub"
                placeholder="Tennis Club Name"
                id={otherStyles.ml8}
                className={otherStyles.inputs}
                type="text"
              />
            </div>

            <div id={otherStyles.ageGenderDiv}>
              <div className={otherStyles.mediaAgeGenderDiv}>
                <label
                  style={{ color: "yellowgreen" }}
                  className={otherStyles.selectorLabels}
                >
                  Age:
                </label>
                <div>
                  <select
                    onFocus={this.signingUp}
                    id={otherStyles.selecter}
                    value={this.state.instructor.age}
                    onChange={this.getInstructorInput}
                    name="age"
                  >
                    <option />
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>20</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                    <option>45</option>
                    <option>46</option>
                    <option>47</option>
                    <option>48</option>
                    <option>49</option>
                    <option>50</option>
                    <option>51</option>
                    <option>52</option>
                    <option>53</option>
                    <option>54</option>
                    <option>55</option>
                    <option>56</option>
                    <option>57</option>
                    <option>58</option>
                    <option>59</option>
                    <option>60</option>
                    <option>61</option>
                    <option>62</option>
                    <option>63</option>
                    <option>64</option>
                    <option>65</option>
                    <option>66</option>
                    <option>67</option>
                    <option>68</option>
                    <option>69</option>
                    <option>70</option>
                    <option>71</option>
                    <option>72</option>
                    <option>73</option>
                    <option>74</option>
                    <option>75</option>
                    <option>76</option>
                    <option>77</option>
                    <option>78</option>
                    <option>79</option>
                    <option>80</option>
                    <option>81</option>
                    <option>82</option>
                    <option>83</option>
                    <option>84</option>
                    <option>85</option>
                    <option>86</option>
                    <option>87</option>
                    <option>88</option>
                    <option>89</option>
                    <option>90</option>
                    <option>91</option>
                    <option>92</option>
                    <option>93</option>
                    <option>94</option>
                    <option>95</option>
                    <option>96</option>
                    <option>97</option>
                    <option>98</option>
                    <option>99</option>
                    <option>100</option>
                    <option>101</option>
                    <option>102</option>
                    <option>103</option>
                    <option>104</option>
                    <option>105</option>
                    <option>106</option>
                    <option>107</option>
                    <option>108</option>
                    <option>109</option>
                    <option>110</option>
                    <option>111</option>
                    <option>112</option>
                    <option>113</option>
                    <option>114</option>
                    <option>115</option>
                    <option>116</option>
                    <option>117</option>
                    <option>118</option>
                    <option>119</option>
                  </select>
                  {this.state.showOptionals && <AlertInstructorAge />}
                </div>
              </div>
              <div
                style={{ marginLeft: "15px" }}
                className={otherStyles.mediaAgeGenderDiv}
              >
                <label
                  style={{ color: "yellowgreen" }}
                  className={otherStyles.selectorLabels}
                >
                  Gender:
                </label>

                <div>
                  {" "}
                  <select
                    onFocus={this.signingUp}
                    style={{ width: "100px" }}
                    id={otherStyles.selecter}
                    value={this.state.gender}
                    onChange={this.getInstructorInput}
                    name="gender"
                  >
                    <option />
                    <option>Male</option>
                    <option style={{ width: "100px" }}>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                {this.state.showOptionals && <AlertInstructorGender />}
              </div>
            </div>
            <button
              style={{
                backgroundColor: "yellowgreen",
                top: this.state.signingUpState ? "-63px" : "-50px"
              }}
              onClick={this.registerInstructor}
              id={otherStyles.signUpButton}
            >
              Sign Up
            </button>
          </form>
          <p
            id={styles.headBack}
            onClick={this.props.instructorRegisterHandler}
          >
            Go back to user signup form
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    instructor: state.authReducer.instructor,
    instructorRegister: state.booleanReducers.instructorRegister
  };
};

const mapDispatchToProps = dispatch => {
  return {
    instructorRegisterSuccess: instructorToken =>
      dispatch({
        type: INSTRUCTOR_REGISTER_SUCCESS,
        payload: { instructorToken }
      }),
    instructorRegisterHandler: () =>
      dispatch({ type: INSTRUCTOR_WANTS_TO_REGISTER })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(InstructorRegisterForm)
);
