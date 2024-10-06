import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <li>
      {contact.name} - {contact.phone}
    </li>
  );
};

export default ContactItem;
