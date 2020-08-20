import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.counter.value,
    };
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  handleIncreament = () => {
    // console.log(product);
    this.setState({ count: this.state.count + 1 });
    this.props.inc(true);
  };

  handleDecreament = () => {
    if (this.state.count) {
      this.setState({ count: this.state.count - 1 });
      this.props.inc(false);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children};
        <span className={this.getBadgeClasses()}>
          {this.formatCount(this.state.count)}
        </span>
        <button
          onClick={() => {
            this.handleIncreament();
          }}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button
          style={{ margin: 10 }}
          onClick={() => {
            this.handleDecreament();
          }}
          className="btn btn-warning btn-sm"
        >
          Decreament
        </button>
        <button
          style={{ margin: 10 }}
          className="btn btn-danger btn-sm"
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
