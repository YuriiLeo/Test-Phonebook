import { Container } from "./App.styled";
import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Section from "components/Section/Section";
import { nanoid } from 'nanoid';
import Notification from "components/Notification/Notification";
import Contacts from "components/Contacts/Contacts"; 

export default class App extends Component {

    state = {
        contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }

    addContact = (contact) => {
        if (this.inDuplicate(contact)) {
             return  alert(`${contact.name}  is already in contacts.`);
        }
        this.setState((prev) => {
            const newContact = {
                id: nanoid(),
                ...contact
            }
            return {
                contacts: [...prev.contacts, newContact]
            }
        }) 
    }

    removeContact = ( id) => {
        // evt.preventDefault();
        this.setState((prev ) => {
            const newContacts = prev.contacts.filter((item) => item.id !== id);
            return {
                contacts: newContacts
            }
      })
    }
    handleChange = (evt) => {
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        })
    }

    inDuplicate({ name }) {
        const { contacts } = this.state;
        const result = contacts.find((item) => item.name === name);
        // const result = contacts.find((item) => item.name === name || item.number === number);
        return result;
    }

    getFilterContacts() {
        const { contacts, filter } = this.state;
        if (!filter) {
            return contacts;  
        }

        const normalizedFilter = filter.toLocaleLowerCase();
        const filterContacts = contacts.filter(({ name, number }) => {
            const normalizedName = name.toLocaleLowerCase();
            const normalizedNumber = number.toLocaleLowerCase();
            const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
            return result;
        }) 
        return filterContacts;
    }

    render() {
        const { addContact, removeContact,  handleChange } = this;
        const { filter } = this.state;
        const contacts = this.getFilterContacts();

        return (
            <Container>
                <Section title="Phonebook">
                  <ContactForm  onSubmit={addContact}/>
            </Section>
            <Contacts>
              {contacts.length === 0 ?
                <Notification message="There is no contacts"></Notification> :
                <Section title="Contacts">
                  <Filter onChange={handleChange} filter={filter} />
                  <ContactList items={contacts} removeContact={removeContact} />
                </Section>}
            </Contacts>
            </Container>
  )}
}