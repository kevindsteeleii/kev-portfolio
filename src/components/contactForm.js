import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import '../css/Contact.css';

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    disabled: true
  };

  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key)+ '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    const copyState = { ...this.state };
    let { name, email, message, subject } = copyState;
    name = email = message = subject = '';
    this.setState({ name, email, message, subject });
    e.preventDefault();
  };

  handleChange = evt => {
    evt.preventDefault();
    let targetName = evt.target.name;
    let value = evt.target.value;
    if (targetName === 'subject' && value === 'subject') {
      value = '';
    }

    this.setState({ [targetName]: value }, () => {
      this.canSubmit()
    });
  }

  canSubmit = () => {
    let disabled = true;
    const { name, email, subject, message } = this.state;
    disabled = ( name === ''|| email === '' || subject === '' || message === '' || this.checkVals())
    // console.log('\n Check vals is:\n', this.checkVals());
    this.setState({ disabled })
  }

  checkVals = () => {
    const { name, email, message } = this.state;
    let disabled = true
    disabled = (name.length < 8 || !(isEmail(email)) || message.length < 15);
    return disabled;
  }

  render() {
    const { name, email, message, disabled } = this.state;
    return (
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" onSubmit={this.handleSubmit}>
        <div className="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </div>
        <div className="form-body">
          <div className="form-inputs">
            <input onChange={this.handleChange} type="text" name="name" id="name" value={name} placeholder="Your Name Here..." maxLength="30"/>
            <input onChange={this.handleChange} type="email" name="email" id="email" value={email} placeholder="me@idk.com" maxLength="30"/>
            
            <select className="subject" name="subject" id="subject" onChange={this.handleChange}>
              <option value="subject">Subject:</option>
              <option value="freelance">Freelance</option>
              <option value="tutoring">Tutoring</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-textarea">
            <textarea className="message"  name="message" id="message" value={message} cols="30" rows="10" maxLength="500" onChange={this.handleChange} placeholder="message of at least 15 characters and no more than 500..."/>
            <button type="submit" disabled={disabled} className="submit-button">Submit</button>
          </div>
        </div>
      </form>
  ); 
  }
  
}
