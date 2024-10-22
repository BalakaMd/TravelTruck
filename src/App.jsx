import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>My Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p className="loading">Loading contacts...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && <ContactList />}
    </div>
  );
}

export default App;
