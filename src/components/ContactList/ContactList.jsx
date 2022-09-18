import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

export default function ContactList({ items, removeContact }) {
    const elements = items.map(({ name, number, id }) => {
        return <Item key={id}>
            <span>{name}: </span>
            <span>{number}</span>
            <Button type='button' onClick={() => removeContact(id)}>Delete</Button>
        </Item>
    })
  return (
      <List>{elements}</List>
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