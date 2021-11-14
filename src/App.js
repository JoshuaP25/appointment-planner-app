import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import './App.css';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const [contacts, setContacts] = useState([]);
  const addContacts = (name, phoneNumber, email) => {
    setContacts(contact => [...contact, { name, phoneNumber, email }]);
  }
  
  const [appointments, setAppointments] = useState([]);
  const addAppointments = (title, contact, date, time) => {
    setAppointments(appointment => [...appointment, { title, contact, date, time }])
  }

  return (
    <>
      <h1>Appointment Planner</h1>
      <nav>
          <NavLink to={ROUTES.CONTACTS} activeClassName="active">
            <p>Contacts</p>
          </NavLink>
          <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
            <p>Appointments</p>
          </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             <ContactsPage contacts={contacts} addContacts={addContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointments={addAppointments} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
