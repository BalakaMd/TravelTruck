import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = async contactId => {
    try {
      await dispatch(deleteContact(contactId)).unwrap();
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  if (filteredContacts.length === 0) {
    return <p className={styles.noContacts}>No contacts found</p>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <span className={styles.name}>{contact.name}</span>
          <span className={styles.phone}>{contact.number}</span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
