import ContactList from '../contactList/contactList.js';
import Header from '../header/header.js';
import React, {useState} from "react";

function Page() {
    const [profiles, setProfiles] = useState([])

    return (
      <div className="Page">
        <Header profiles={profiles} setProfiles={setProfiles}/>
        <ContactList profiles={profiles} setProfiles={setProfiles}/>
      </div>
    );
  }
  
  export default Page;