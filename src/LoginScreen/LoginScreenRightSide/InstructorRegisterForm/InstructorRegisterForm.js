import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./InstructorRegisterForm.module.css";
import { INSTRUCTOR_REGISTER } from "../../../actions/actions";

class InstructorRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.registerInstructor = this.registerInstructor.bind(this);
    this.getInstructorInput = this.getInstructorInput.bind(this);

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
      }
    };
  }

  getInstructorInput(event) {
    const newInstructorStateObject = { ...this.state.instructor };
    newInstructorStateObject[event.target.name] = event.target.value;
    console.log(newInstructorStateObject);

    this.setState({ instructor: newInstructorStateObject });
  }

  registerInstructor(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/instructorSignup", this.state.instructor)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let id = "";
    if (this.props.instructorRegister) {
      id = styles.animation;
    }
    return (
      <div className={styles.registerFormContainer} id={id}>
        <p id={styles.registerP}>Register as an Instructor</p>
        <div className={styles.registerForm}>
          <form id={styles.form}>
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>First Name:</label>
              <input
                onChange={this.getInstructorInput}
                value={this.state.instructor.firstName}
                name="firstName"
                placeholder="First Name"
                id={styles.input1}
                className={styles.inputs}
                type="text"
              />
            </div>
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Last Name:</label>
              <input
                onChange={this.getInstructorInput}
                value={this.state.instructor.lastName}
                name="lastName"
                placeholder="Last Name"
                id={styles.input15}
                className={styles.inputs}
                type="text"
              />
            </div>
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Email Address:</label>
              <input
                onChange={this.getInstructorInput}
                value={this.state.instructor.email}
                name="email"
                placeholder="Email Address"
                id={styles.input2}
                className={styles.inputs}
                type="text"
              />
            </div>
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Phone Number:</label>
              <input
                onChange={this.getInstructorInput}
                value={this.state.instructor.phoneNumber}
                name="phoneNumber"
                placeholder="Phone Number"
                id={styles.input2}
                className={styles.inputs}
                type="text"
              />
            </div>
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Create Password:</label>
              <input
                onChange={this.getInstructorInput}
                value={this.state.instructor.createPassword}
                name="createPassword"
                placeholder="Create Password"
                id={styles.ml26}
                className={styles.inputs}
                type="password"
              />
            </div>
            <div className={styles.divWidthControl}>
              <label className={styles.labels}>Password Confirm:</label>
              <input
                onChange={this.getInstructorInput}
                value={this.state.instructor.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
                id={styles.ml8}
                className={styles.inputs}
                type="password"
              />
            </div>
            <div>
              <label className={styles.labels}>Current Employer:</label>
              <input
                onChange={this.getInstructorInput}
                value={this.state.instructor.tennisClub}
                name="tennisClub"
                placeholder="Tennis Club Name"
                id={styles.ml8}
                className={styles.inputs}
                type="text"
              />
            </div>
            <div id={styles.ageGenderDiv}>
              <div className={styles.mediaAgeGenderDiv}>
                <label className={styles.selectorLabels}>Age:</label>
                <div>
                  <select
                    id={styles.selecter}
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
                </div>
              </div>
              <div
                style={{ marginLeft: "15px" }}
                className={styles.mediaAgeGenderDiv}
              >
                <label className={styles.selectorLabels}>Gender:</label>

                <div>
                  {" "}
                  <select
                    style={{ width: "100px" }}
                    id={styles.selecter}
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
              </div>
            </div>
            <button
              onClick={this.registerInstructor}
              id={styles.instructorSignUpButton}
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
    instructorRegister: state.booleanReducers.instructorRegister
  };
};

const mapDispatchToProps = dispatch => {
  return {
    instructorRegisterHandler: () => dispatch({ type: INSTRUCTOR_REGISTER })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstructorRegisterForm);
