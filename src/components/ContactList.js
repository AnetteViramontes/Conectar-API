import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, searchTerm }) => {
  return (
    <div>
      <h2>Lista de Contactos</h2>
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
