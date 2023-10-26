import { getContacts } from '../../services/services.js';
import ContactList from '../contactList/contactList.js';
import Header from '../header/header.js';
import React, {useState, useEffect} from "react";

function Page() {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
      async function fetchContacts() {
          try {
              const contacts = await getContacts();
              if (contacts) {
                setProfiles(contacts);
              }
          } catch (error) {
              console.error('Erreur lors de la récupération des contacts :', error);
          }
      }

      fetchContacts();
  }, []);

    const changeProfile = (childData) => {
      setProfiles(childData)
    }

    return (
      <div className="Page">
        {profiles !== undefined && <Header profiles={profiles} changeProfile={changeProfile}/>}
        {profiles !== undefined && <ContactList profiles={profiles} changeProfile={changeProfile}/>}
      </div>
    );
  }

  export default Page;
