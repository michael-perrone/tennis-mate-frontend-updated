import React from "react";
import styles from "./InstructorProfileCreate.module.css";
import InstructorProfileCreateForm from "./InstructorProfileCreateForm/InstructorProfileCreateForm";
import InstructorNav from "../../InstructorNav/InstructorNav";

class InstructorProfileCreate extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InstructorNav />
        <div id={styles.instructorProfileCreateContainer}>
          <div id={styles.paragraphContainer}>
            <p>
              We notice you haven't created a profile before. We recommend all
              of our instructors create a profile. It creates an easy way for
              customers at tennis clubs to find an instructor with an experience
              and coaching ability to their liking.
            </p>
            <p>
              Making a profile is not required for anyone. Check with your club
              if they want you to make a profile before you decide to skip this
              step. If you decide you want to make a profile later on or
              accidentally skip this page, don't worry, you can always create
              and update your profile later on.
            </p>
            <p>
              Creating your profile is easy, you just need to answer a few
              questions about yourself and you can upload a photo as well if you
              would like. Also writing a small bio about yourself can really go
              a long way with customers. It makes getting started with someone
              new much easier. Remember, creating a profile is not required, but
              it is reccomended.
            </p>
          </div>
          <InstructorProfileCreateForm />
        </div>
      </React.Fragment>
    );
  }
}

export default InstructorProfileCreate;
