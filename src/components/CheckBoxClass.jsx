import { Checkbox } from "@mui/material";
import React, { Component } from "react";
import { AppContext } from "../context/context";

export default class CheckBoxClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handleChange = (context) => {
    this.setState((previous) => ({
      isChecked: !previous,
    }));

    const { setToggleCount } = context;
    setToggleCount((previous) => previous + 1);
  };

  componentDidMount() {
    console.log("Class Component Mounted!");
  }
  componentDidUpdate() {
    console.log("Class Component Check toggled!");
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <Checkbox
            checked={this.state.isChecked}
            onChange={() => this.handleChange(context)}
          />
        )}
      </AppContext.Consumer>
    );
  }
}
