import { getContacts } from '../../services/getContacts.js';
import ContactList from '../contactList/contactList.js';
import Header from '../header/header.js';
import React, {useState} from "react";

function Page() {
    const [profiles, setProfiles] = useState(getContacts())

    const changeProfile = (childData) => {
      setProfiles(childData)
    }

    return (
      <div className="Page">
        <Header profiles={profiles} changeProfile={changeProfile}/>
        <ContactList profiles={profiles} changeProfile={changeProfile}/>
      </div>
    );
  }

  export default Page;
