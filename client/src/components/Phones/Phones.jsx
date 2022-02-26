import React, { Component } from "react";
import axios from "axios";

export default class Phones extends Component {
  state = {
    phones: [],
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/phones");
    this.setState({ phones: res.data });
    console.log(this.state.phones);
  }

  render() {
    return (
      <>
        {this.state.phones.map((phone) => (
          <>
            <img src={phone.image} />
            <p>{phone.brand}</p>
            <p>{phone.name}</p>
            <p>{phone.price}</p>
          </>
        ))}
      </>
    );
  }
}
