import React, {useEffect} from "react";

import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timer = setTimeout(() => {
      alert('Save data to cloud!');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] cleanup work 2nd in useEffect');
    return () => {
      
      console.log('[Cockpit.js] cleanup work 2nd in useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //assignedClasses = [red]
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //assignedClasses = [red,bold]
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        TogglePerson
      </button>
    </div>
  );
};

export default React.memo(Cockpit);