import React from 'react';
import PropTypes from 'prop-types';


export default function ContactList({ items, removeContact }) {
    const elements = items.map(({ name, number, id }) => {
        return <li key={id}>
            <span>{name}: </span>
            <span>{number}</span>
            <button onClick={() => removeContact(id)}>Delete</button>
        </li>
    })
  return (
      <ul>{elements}</ul>
  )
}


ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  })),
    onSubmit: PropTypes.func,
}