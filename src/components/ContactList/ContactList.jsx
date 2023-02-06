import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContact } from './../../Redux/contactsSlice';
import { useEffect } from 'react';
import { selectFilter } from './../../Redux/filterSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  let contactsArray;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filter.toLowerCase())
  );

  if (filteredContacts !== '') {
    contactsArray = filteredContacts;
  } else {
    contactsArray = contacts;
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.contacts}>
      <ul className={css.list}>
        {contactsArray.map(contact => {
          return (
            <li className={css.li} key={contact.id}>
              <div>
                <span className={css.name}>{contact.name}</span>
                <span className={css.number}>{contact.number}</span>
              </div>

              <button
                type="button"
                className={css.delete}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
