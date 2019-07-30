import React from "react";
import styles from "./UserRegisterForm.module.css";
import axios from "axios";
import { connect } from "react-redux";
import AlertUserFirstName from "../../../Alert/AlertUserFirstName";
import AlertUserLastName from "../../../Alert/AlertUserLastName";
import AlertUserEmail from "../../../Alert/AlertUserEmail";
import AlertUserPhoneNumber from "../../../Alert/AlertUserPhoneNumber";
import AlertUserPassword from "../../../Alert/AlertUserPassword";
import AlertUserPasswordConfirm from "../../../Alert/AlertUserPasswordConfirm";
import AlertUserAge from "../../../Alert/AlertUserAge";
import AlertUserGender from "../../../Alert/AlertUserGender";
import InstructorSignup from "./InstructorSignup/InstructorSignup";
import { registered } from "../../../actions/authActions";
import decoder from "jwt-decode";

class UserRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
    this.signingUp = this.signingUp.bind(this);
    this.state = {
      token: "",
      user: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        createPassword: "",
        passwordConfirm: "",
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
        gender: false
      },
      showOptionals: false,
      loggingInError: false
    };
    this.setDirty = this.setDirty.bind(this);
  }

  setDirty(event) {
    console.log(event.target.name);
    const newObject = { ...this.state.dirty };
    newObject[event.target.name] = true;
    this.setState({ dirty: newObject });
  }

  validatePhone = phone => {
    let newRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return newRe.test(phone);
  };

  validateEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  signingUp() {
    this.setState({ signingUpState: true });
  }

  getUserInput(event) {
    const newUserStateObject = { ...this.state.user };
    newUserStateObject[event.target.name] = event.target.value;
    console.log(this.validateEmail(newUserStateObject.firstName));
    this.setState({ user: newUserStateObject });
  }

  showOptionals = () => {
    this.setState({ showOptionals: true });
  };

  hideOptionals = () => {
    this.setState({ showOptionals: false });
  };

  registerUser(event) {
    event.preventDefault();
    if (
      this.state.user.firstName === "" ||
      this.state.user.lastName === "" ||
      this.state.user.email === "" ||
      this.state.user.createPassword.length < 7 ||
      this.state.user.passwordConfirm !== this.state.user.createPassword ||
      this.state.user.phoneNumber === ""
    ) {
      this.setState({ loggingInError: true });
    } else {
      axios
        .post("http://localhost:8080/api/usersSignup", this.state.user)
        .then(response => {
          console.log(response.data);
          this.props.registered(response.data);
          this.setState({ token: decoder(response.data.token) });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    console.log(this.state.token);
    let className = "";
    if (this.props.instructorRegister) {
      className = styles.animator;
    } else {
      className = styles.animator2;
    }

    return (
      <div className={styles.registerFormContainer} id={className}>
        <p
          style={{ opacity: this.state.signingUpState ? "0" : 1 }}
          id={styles.registerP}
        >
          Register for Tennis Mate
        </p>

        <div
          onMouseEnter={this.showOptionals}
          onMouseLeave={this.hideOptionals}
          id={styles.registerForm}
          style={{
            height: this.state.signingUpState ? "580px" : "450px",
            transform: this.state.signingUpState
              ? "translateY(-100px)"
              : "translateY(0px)"
          }}
        >
          <form
            id={styles.form}
            style={{ height: this.state.signingUpState ? "580px" : "450px" }}
          >
            <div
              style={{ position: "relative" }}
              className={styles.divWidthControl}
            >
              <label className={styles.labels}>First Name:</label>
              <input
                onBlur={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getUserInput}
                value={this.state.user.firstName}
                name="firstName"
                placeholder="First Name"
                id={styles.input1}
                className={styles.inputs}
                type="text"
              />
            </div>
            {this.state.dirty.firstName === true &&
              this.state.user.firstName === "" && <AlertUserFirstName />}
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Last Name:</label>
              <input
                onBlur={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getUserInput}
                value={this.state.user.lastName}
                name="lastName"
                placeholder="Last Name"
                id={styles.input15}
                className={styles.inputs}
                type="text"
              />
            </div>
            {this.state.dirty.lastName === true &&
              this.state.user.lastName === "" && <AlertUserLastName />}
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Email Address:</label>
              <input
                onBlur={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getUserInput}
                value={this.state.user.email}
                name="email"
                placeholder="Email Address"
                id={styles.input2}
                className={styles.inputs}
                type="text"
              />
            </div>
            {this.validateEmail(this.state.user.email) === false &&
              this.state.dirty.email === true && <AlertUserEmail />}
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Phone Number:</label>
              <input
                onBlur={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getUserInput}
                value={this.state.user.phoneNumber}
                name="phoneNumber"
                placeholder="Phone Number"
                id={styles.input25}
                className={styles.inputs}
                type="text"
              />
            </div>
            {this.validatePhone(this.state.user.phoneNumber) === false &&
              this.state.dirty.phoneNumber === true && <AlertUserPhoneNumber />}
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Create Password:</label>
              <input
                onKeyDown={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getUserInput}
                value={this.state.user.createPassword}
                name="createPassword"
                placeholder="Create Password"
                id={styles.ml26}
                className={styles.inputs}
                type="password"
              />
            </div>
            {this.state.dirty.createPassword === true &&
              this.state.user.createPassword.length < 7 && (
                <AlertUserPassword />
              )}
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Password Confirm:</label>
              <input
                onKeyDown={this.setDirty}
                onFocus={this.signingUp}
                onChange={this.getUserInput}
                value={this.state.user.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
                id={styles.ml8}
                className={styles.inputs}
                type="password"
              />
            </div>
            {this.state.dirty.passwordConfirm === true &&
              this.state.user.passwordConfirm !==
                this.state.user.createPassword && <AlertUserPasswordConfirm />}
            <div id={styles.ageGenderDiv}>
              <div className={styles.mediaAgeGenderDiv}>
                <label className={styles.selectorLabels}>Age:</label>
                <div>
                  <select
                    onFocus={this.signingUp}
                    id={styles.selecter}
                    value={this.state.user.age}
                    onChange={this.getUserInput}
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
                  {this.state.showOptionals && <AlertUserAge />}
                </div>
              </div>

              <div
                style={{ marginLeft: "15px" }}
                className={styles.mediaAgeGenderDiv}
              >
                <label className={styles.selectorLabels}>Gender:</label>
                <div>
                  <select
                    onFocus={this.signingUp}
                    style={{ width: "100px" }}
                    id={styles.selecter}
                    value={this.state.gender}
                    onChange={this.getUserInput}
                    name="gender"
                  >
                    <option />
                    <option>Male</option>
                    <option style={{ width: "100px" }}>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                {this.state.showOptionals && <AlertUserGender />}
              </div>
            </div>
            <button
              style={{ top: this.state.signingUpState ? "-63px" : "-50px" }}
              onClick={this.registerUser}
              id={styles.userSignUpButton}
            >
              Sign Up
            </button>
          </form>
          <InstructorSignup />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    instructorRegister: state.booleanReducers.instructorRegister,
    authenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { registered }
)(UserRegisterForm);
