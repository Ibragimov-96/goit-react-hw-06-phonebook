import React, { useState } from 'react';
import { Forma, ButtonAdd } from './FormStyle.js';
import { useDispatch } from 'react-redux/es/exports.js';
import { addContact } from 'redux/contact/contactSlice';
import { nanoid } from 'nanoid';
const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.currentTarget.value);
    } else if (e.target.name === 'number') {
      setNumber(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContact(user));

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Forma onSubmit={handleSubmit}>
      <label>
        Name:
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number:
        <br />
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          required
        />
      </label>
      <br />
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </Forma>
  );
};
export default Form;

