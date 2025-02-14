import React from 'react';

const Ticket = ({ type, price, selected, onSelect }) => {
  return (
    <div
      style={{
        border: selected ? '2px solid blue' : '1px solid gray',
        padding: '10px',
        margin: '10px',
        cursor: 'pointer',
      }}
      onClick={onSelect}
    >
      <h3>{type}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Ticket;