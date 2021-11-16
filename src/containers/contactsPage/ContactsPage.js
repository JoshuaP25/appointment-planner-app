import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';
import './ContactsPage.css';

export const ContactsPage = ({ contacts, addContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    function nameExists(name) {
      return contacts.some(function(el) {
        return el.name === name;
      }); 
    }

    if(nameExists(inputName)) {
      setDuplicate(true)
    }

    return () => {
      if(!nameExists(inputName)) {
        setDuplicate(false)
      }
    }

  }, [contacts, inputName])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(duplicate === true) {
     return;
   }
   else {
    addContacts(inputName, inputPhone, inputEmail);
    setInputName('');
    setInputPhone('');
    setInputEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div className="container">
      <section className="form">
        <div className="form-title">
          <h2>Add Contact</h2>
        </div>
        <ContactForm 
          name={inputName}
          phone={inputPhone}
          email={inputEmail}
          setName={setInputName}
          setPhone={setInputPhone}
          setEmail={setInputEmail}
          duplicate={duplicate}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section className="tile">
        <h2>Contacts</h2>
        <TileList 
          tiles={contacts}
        />
      </section>
    </div>
  );
};
