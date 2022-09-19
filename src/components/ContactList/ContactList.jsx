import React from 'react';
import PropTypes from 'prop-types';
import { List, Wrapper, Item, Button } from './ContactList.styled';
import {MdContactPhone} from 'react-icons/md'

export default function ContactList({ items, removeContact }) {
    const elements = items.map(({ name, number, id }) => {
      return <Item key={id}>
        <MdContactPhone size={18}/>
        <Wrapper>
            <span>{name}: </span>
            <span>{number}</span>
       </Wrapper> 
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
