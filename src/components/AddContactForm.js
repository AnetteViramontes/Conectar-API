import React, { useState } from 'react';

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo objeto de contacto
    const newContact = {
      id: Date.now(), 
      name,
      phone
    };

    // Llamar a la funcin para agregar el contacto
    addContact(newContact);

    // Limpiar el formulario
    setName('');
    setPhone('');
  };

  return (
    <div>
      <h2>Añade el Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre Completo" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder="Numero de Teléfono" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Añadir contacto</button>
      </form>
    </div>
  );
};

export default AddContactForm;
