import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit.js";
import Persons from "../components/Persons/Persons.js";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    //constructor
    persons: [
      { id: "asdasd", name: "Max", age: 28 },
      { id: "sdfsdf", name: "Manu", age: 29 },
      { id: "dfgdfg", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  /*
  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }
  */
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      // find index of person in Arrays
      return p.id === id;
    });

    const person = {
      // create new Person from personIndex
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value; // get data from textfield and set to person.name

    const persons = [...this.state.persons]; // create new Arrays
    persons[personIndex] = person; //set data from person to Arrays

    this.setState({ persons: persons }); //set data from new Arrays to defaut Arrays
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.splice(); //coppy element to new Arrays
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // delete element
    this.setState({ persons: persons }); //set each element from new Arrays to defaut Array
  };

  TogglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); //Hide/Unhide Persons
  };

  render() {
    let persons = null;
    console.log("[App.js] render");

    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }
    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.TogglePerson}
          />
        ) : null}

        {persons}
      </div>
    );
  }
}

export default App;
