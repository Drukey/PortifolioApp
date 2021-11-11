import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ContactList from "./components/contacts-list.component";
import EditContact from "./components/edit-contact.component";
import CreateContact from "./components/create-contact.component";
import CreateCustomer from "./components/create-customer.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
        <Routes>
          <Route path="/" exact element = { < ContactList />} />
          <Route path="/edit/:id" element = { < EditContact />} />
          <Route path="/create" element = { < CreateContact />} />
          <Route path="/user" element = { < CreateCustomer /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;