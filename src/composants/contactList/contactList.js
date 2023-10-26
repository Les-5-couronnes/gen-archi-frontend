import { deleteContact } from "../../services/services.js";
import ModalEdit from "../modalEdit/modalEdit";
import "./contactList.css";
import React, {useState} from "react";

function ContactList({profiles, changeProfile}) {
    const [isModalEditVisible, setModalEditVisible] = useState(false);

    const toggleModalEdit = () => {
        setModalEditVisible(!isModalEditVisible);
    };

    const deleteProfile = (emailToDelete) => {
        // Filter profiles to keep
        const updatedProfiles = profiles.filter(profile => profile.mail !== emailToDelete);

        changeProfile(updatedProfiles);

        deleteContact({mail: emailToDelete});
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
                    <p>Phone number : {profile.phoneNumber}</p>
                    <p>E-mail : {profile.mail}</p>
                </div>
                <div className="contact-button">
                    <p>
                        <button className="c-button" onClick={toggleModalEdit}>
                            Edit
                        </button>
                    </p>
                    <p>
                        <button className="c-button" onClick={() => deleteProfile(profile.mail)}>
                            Delete
                        </button>
                    </p>
                </div>
                {isModalEditVisible && <ModalEdit setIsModalEditOpen={setModalEditVisible} profile={profile} profiles={profiles} changeProfile={changeProfile} />}
            </div>
        ))}
    </div>
    );
}

export default ContactList;
