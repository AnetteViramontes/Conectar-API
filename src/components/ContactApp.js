import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddContactForm from './AddContactForm';
import SearchContact from './SearchContact';
import ContactList from './ContactList';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  // Función para agregar un nuevo contacto
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <h1>Contactos</h1>
      <AddContactForm addContact={addContact} />
      <SearchContact onSearch={handleSearch} />
      <ContactList contacts={contacts} searchTerm={searchTerm} />
    </div>
  );
};

export default ContactApp;
