import React, { Component } from "react";
import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <WithClass classes = {classes.Person}>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p key="i2"> {this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </WithClass>
    );
  }
}

export default Person;
