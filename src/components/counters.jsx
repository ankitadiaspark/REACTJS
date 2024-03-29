import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    const {
      onReset,
      onAdd,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onHandleChange,
      onHandleQuantityChange
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            onHandleChange={onHandleChange}
            onHandleQuantityChange={onHandleQuantityChange}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
