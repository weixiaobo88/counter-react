import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.initArray = this.initArray.bind(this);
  }

  initArray(size) {
    return Array.from(Array(size).keys());;
  }

  render() {
    let counters = this.initArray(100);
    return (
      <div>
        {counters.map((value) => (
          <Counter key={value} />
        ))}
      </div>
    );
  }
}

CounterGroup.propTypes = {};

export default CounterGroup;
