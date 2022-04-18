import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('items/add', (name, number) => ({
  payload: { id: nanoid(), name, number },
}));

const deleteContact = createAction('items/delete');

const changeFilter = createAction('filter/change');

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
