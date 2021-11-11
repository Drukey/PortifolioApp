import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateContact extends Component {
  constructor(props) {
    super(props);

    this.onChangeCustomername = this.onChangeCustomername.bind(this);
    this.onChangeCompanyname = this.onChangeCompanyname.bind(this);
    this.onChangeCompanylocation = this.onChangeCompanylocation.bind(this);
    this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
    this.onChangeEmailaddress = this.onChangeEmailaddress.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      customername: '',
      companyname: '',
      companylocation: '',
      phonenumber: '',
      emailaddress: '',
      date: new Date(),
      customers: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/customername/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            customers: response.data.map(customer => customer.customername),
            customername: response.data[0].customername
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeCustomername(e) {
    this.setState({
      customername: e.target.value
    })
  }

  onChangeCompanyname(e) {
    this.setState({
      description: e.target.value
    })
  }


  onChangeCompanylocation(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangePhonenumber(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeEmailaddress(e) {
    this.setState({
      duration: e.target.value
    })
  }


  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const contact = {
      customername: this.state.customername,
      companyname: this.state.companyname,
      companylocation: this.state.companylocation,
      phonenumber: this.state.phonenumber,
      emailaddress: this.state.emailaddress,
      date: this.state.date
    }

    console.log(contact);

    axios.post('http://localhost:5000/contacts/add', contact)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Company Contact</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Customer Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.customername}
              onChange={this.onChangeCustomername}>
              {
                this.state.customers.map(function(customer) {
                  return <option 
                    key={ customer }
                    value={customer}>{customer}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Company name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.companyname}
              onChange={this.onChangeCompanyname}
              />
        </div>
        <div className="form-group"> 
          <label>Company Location: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.companylocation}
              onChange={this.onChangeCompanylocation}
              />
        </div>

        <div className="form-group"> 
          <label>Company Phoneno: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Contact" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}