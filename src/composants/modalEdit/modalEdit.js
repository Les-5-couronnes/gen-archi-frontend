import "./modalEdit.css";
import React, {useState} from "react";

function ModalEdit({setIsModalEditOpen, profile, profiles, changeProfile}) {
    const [lastname, setLastname] = useState(profile.surname);
    const [name, setName] = useState(profile.name);
    const [phone, setPhone] = useState(profile.phone);
    const [email, setEmail] = useState(profile.email);
    const oldEmail = profile.email;

    const handleLastnameChange = (event) => {
        setLastname(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleProfileEdit = (emailToChange) => {
        const updatedProfiles = profiles.filter(profile => profile.email !== emailToChange);

        // Create a new profile object with the current values of the input fields
        const newProfile = {
            name: name,
            surname: lastname,
            phone: phone,
            email: email,
        };

        // Add the newProfile to the existing profiles array
        changeProfile([...updatedProfiles, newProfile]);

        // Clear the input fields
        setLastname('');
        setName('');
        setPhone('');
        setEmail('');
        setIsModalEditOpen(false);
    };

    const closeModalEdit = () => {
        setIsModalEditOpen(false);
    };

    return (
        <div className="Modal">
            <div className='Modal-content'>
                <div className='Modal-header'>
                    <h4 className='Modal-title'>Contact: {name} {lastname}</h4>
                </div>
                <div className='Modal-body'>
                    <input placeholder='Lastname' maxLength={20} onChange={handleLastnameChange} value={lastname}></input>
                    <input placeholder='Name' maxLength={20} onChange={handleNameChange} value={name}></input>
                    <input placeholder='Phone number' maxLength={20} onChange={handlePhoneChange} value={phone}></input>
                    <input placeholder='E-mail' maxLength={20} onChange={handleEmailChange} value={email}></input>
                    <button className='save-button' onClick={() => handleProfileEdit(oldEmail)} >Save contact</button>
                    <button className="close-button" onClick={() => closeModalEdit}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ModalEdit;
