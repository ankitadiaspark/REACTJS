import React, { Component } from "react";
class newItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Item: "",
      Quantity: "",
      redirectToReferrer: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
  handleChange(event) {
    this.setState({ Item: event.target.value });
  }

  handleQuantityChange(event) {
    this.setState({ Quantity: event.target.value });
  }

  handleSubmit = event => {
    alert("Item added successfully.");
    console.log("submitted");
    event.preventDefault();
    this.props.history.push("/cart");
    this.setState({
      Item: this.state.Item.value,
      Quantity: this.state.Quantity.value,
      redirectToReferrer: true
    });
    console.log("item", this.state.Item);
    console.log("quantity", this.state.Quantity);
    console.log("state", this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add New Item to the Cart</h1>
        <label>
          Item:
          <input
            type="text"
            value={this.state.Item}
            onChange={this.handleChange}
            ref={this.input}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={this.state.Quantity}
            onChange={this.handleQuantityChange}
            ref={this.input}
          />
        </label>
        <button
          // type="submit"
          onClick={() => this.handleSubmit}
          className="btn  btn-info btn-secondary btn-sm"
        >
          Add
        </button>
      </form>
    );
  }
}

export default newItemForm;
