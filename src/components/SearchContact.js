import React from 'react';

const SearchContact = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar contacto"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchContact;
