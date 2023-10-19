import "./modalEdit.css";
import React, {useState} from "react";

function ModalEdit({setIsModalEditOpen, profiles, setProfiles}) {
    const [lastname, setLastname] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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
  
        // Update the profiles state with the filtered array
        setProfiles(updatedProfiles);

        // Create a new profile object with the current values of the input fields
        const newProfile = {
            name: name,
            surname: lastname,
            phone: phone,
            email: email,
        };
    
        // Add the newProfile to the existing profiles array
        setProfiles([...profiles, newProfile]);
    
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
                    <input placeholder='Lastname' maxLength={20} onChange={handleLastnameChange}>{lastname}</input>
                    <input placeholder='Name' maxLength={20} onChange={handleNameChange}>{name}</input>
                    <input placeholder='Phone number' maxLength={20} onChange={handlePhoneChange}>{phone}</input>
                    <input placeholder='E-mail' maxLength={20} onChange={handleEmailChange}>{email}</input>
                    <button className='save-button' onClick={handleProfileEdit(email)} >Save contact</button>
                    <button className="close-button" onClick={closeModalEdit}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ModalEdit;
