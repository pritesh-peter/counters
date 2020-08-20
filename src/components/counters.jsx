import React, { Component } from "react";
import Counter from "./counter";
import ReactDOM from "react-dom";

class Counters extends Component {
  constructor(props) {
    super(props);
    // this.totalIncrement = this.totalIncrement.bind(this);
    this.state = {
      total: 0,
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
      ],
    };
  }
  totalIncrement = (incr) => {
    if (incr) {
      this.setState({ total: this.state.total + 1 });
    } else {
      this.setState({ total: this.state.total - 1 });
    }
  };
  deleteCounter = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span style={{ margin: 20 }}>Total {this.state.total}</span>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            inc={this.totalIncrement}
            onDelete={this.deleteCounter}
            counter={counter}
          >
            <h6>Counter #{counter.id}</h6>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
