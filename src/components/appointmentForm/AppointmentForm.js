import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
import './AppointmentForm.css';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div className="appointment-form">
      <form onSubmit={handleSubmit}>
        <input 
          value={title}
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <input 
          value={date}
          type="date"
          placeholder="Date"
          min={getTodayString()}
          onChange={e => setDate(e.target.value)}
        />
        <input 
          value={time}
          type="time"
          placeholder="Time"
          onChange={e => setTime(e.target.value)}
        />
        <ContactPicker 
          contacts={contacts}
          onChange={e => setContact(e.target.value)}
        />
        <input type="submit" value="Add"/>
      </form>
    </div>
  );
};
