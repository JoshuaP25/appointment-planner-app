import React from "react";
import './ContactForm.css';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  duplicate,
  handleSubmit
}) => {
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          style={duplicate ? {borderColor: "red"} : {borderColor: ""}}
          value={name}
          type="text"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
        <span>{duplicate ? "Name Already Exist" : ""}</span>
        <input 
          value={phone}
          type="tel"
          placeholder="Phone e.g. +639#########"
          pattern="^(09|\+639)\d{9}$"
          onChange={e => setPhone(e.target.value)}
        />
        <input 
          value={email}
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
