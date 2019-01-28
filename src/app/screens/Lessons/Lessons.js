import React, { Component } from "react";
import LessonsSection from "../../components/LessonsSection/LessonsSection";

class Lessons extends Component {
  render() {
    return (
      <div>
        <LessonsSection lessons={[{ id: "1" }]} />
      </div>
    );
  }
}

export default Lessons;
