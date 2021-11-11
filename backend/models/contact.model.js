const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  customername: { type: String, required: true },
  companyname: { type: String, required: true },
  companylocation: { type: String, required: true },
  phonenumber: { type: String, required: true },
  emailadress: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;