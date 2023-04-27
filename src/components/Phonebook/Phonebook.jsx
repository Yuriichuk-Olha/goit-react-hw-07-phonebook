import Contacts from 'components/Contacts/Contacts';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';


function Phonebook() {
    //   const dispatch = useDispatch()
    
    // useEffect(() => {
    //   dispatch(getContactsThunk())
    // }, [dispatch])

    
    return (
      <div>
        <h1>Phonebook</h1>
        <Contacts />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
 
}

export default Phonebook;