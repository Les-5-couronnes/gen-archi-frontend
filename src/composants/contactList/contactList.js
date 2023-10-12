import "./contactList.css";
import * as React from "react";

function ContactList() {

    const profiles = [
        {
          name: 'John',
          surname: 'Doe',
          phone: '123-456-7890',
          email: 'john@example.com',
        },
        {
          name: 'Jane',
          surname: 'Smith',
          phone: '987-654-3210',
          email: 'jane@example.com',
        }
      ];
    
    return (
        <div className="profile-list">
        {profiles.map((profile, index) => (
            <div className="profile" key={index}>
                <div className="profile-details">
                    <p>Lastname : {profile.surname}</p>
                    <p>Name : {profile.name}</p>
                </div>
                <div className="contact-info">
                    <p>Phone number : {profile.phone}</p>
                    <p>E-mail : {profile.email}</p>
                </div>
                <div className="contact-button">
                    <p>
                        <button className="c-button">
                            Edit
                        </button>
                    </p>
                    <p>
                        <button className="c-button">
                            Delete
                        </button>
                    </p>
                </div>
            </div>
        ))}
    </div>
    );
}

export default ContactList;