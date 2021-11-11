import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCustomer extends Component {
  constructor(props) {
    super(props);

    this.onChangeCustomername = this.onChangeCustomername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeCustomername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.customername
    }

    console.log(user);

    axios.post('http://localhost:5000/customers/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Customer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Customer name: </label>
            <input  type="text"
                required
                placeholder = "Enter Customer name"
                className="form-control"
                value={this.state.customername}
                onChange={this.onChangeCustomername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Customer" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}