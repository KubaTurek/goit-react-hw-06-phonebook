import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './../../Redux/contactsSlice';
import { selectFilter, selectContact } from './../../Redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filter.toLowerCase())
  );

  return (
    <div className={css.contacts}>
      <ul className={css.list}>
        {filteredContacts.map(contact => {
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
