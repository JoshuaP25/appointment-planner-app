import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      <option key={-1} value="selected">Select contact</option>
      {contacts.map(({ name }) => (
      <option key={name} value={name}>{name}</option>
      ))}
    </select>
  );
};
