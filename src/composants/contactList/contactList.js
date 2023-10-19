import ModalEdit from "../modalEdit/modalEdit";
import "./contactList.css";
import React, {useState} from "react";

function ContactList({profiles, setProfiles}) {
    const [isModalEditVisible, setModalEditVisible] = useState(false);

    const toggleModalEdit = () => {
        setModalEditVisible(!isModalEditVisible);
    };

    // const profiles = [
    //     {
    //       name: 'John',
    //       surname: 'Doe',
    //       phone: '123-456-7890',
    //       email: 'john@example.com',
    //     },
    //     {
    //       name: 'Jane',
    //       surname: 'Smith',
    //       phone: '987-654-3210',
    //       email: 'jane@example.com',
    //     }
    //   ];
    
    const deleteProfile = (emailToDelete) => {
        const updatedProfiles = profiles.filter(profile => profile.email !== emailToDelete);
  
        // Update the profiles state with the filtered array
        setProfiles(updatedProfiles);
    };

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
                {isModalEditVisible && <ModalEdit setIsModalEditOpen={setModalEditVisible} profiles={profiles} setProfiles={setProfiles} />}
            </div>
        ))}
    </div>
    );
}

export default ContactList;