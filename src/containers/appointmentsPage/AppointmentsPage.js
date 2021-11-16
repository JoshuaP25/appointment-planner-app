import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';
import './AppointmentsPage.css';

export const AppointmentsPage = ({ appointments, contacts, addAppointments }) => {
  /*
  Define state variables for 
  appointment info
  */

  const [inputTitle, setinputTitle] = useState('');
  const [inputContacts, setinputContacts] = useState('');
  const [inputDate, setinputDate] = useState('');
  const [inputTime, setinputTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
  addAppointments(inputTitle, inputContacts, inputDate, inputTime);
  setinputTitle('');
  setinputContacts('');
  setinputDate('');
  setinputTime('');

  };

  return (
    <div className="container">
      <section className="form">
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={inputTitle}
          contact={inputContacts}
          date={inputDate}
          time={inputTime}
          setTitle={setinputTitle}
          setContact={setinputContacts}
          setDate={setinputDate}
          setTime={setinputTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section className="tile">
        <h2>Appointments</h2>
        <TileList 
          tiles={appointments}
        />
      </section>
    </div>
  );
};
