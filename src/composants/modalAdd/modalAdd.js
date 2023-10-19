import "./modalAdd.css";
import React, {useState} from "react";

function ModalAdd({setIsModalAddOpen, profiles, setProfiles}) {
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

    const handleProfilesAdd = () => {
        // Create a new profile object with the current values of the input fields
        const newProfile = {
            name: name,
            surname: lastname,
            phone: phone,
            email: email,
        }
    
        // Add the newProfile to the existing profiles array
        setProfiles([...profiles, newProfile]);
    
        // Clear the input fields
        setLastname('');
        setName('');
        setPhone('');
        setEmail('');
        setIsModalAddOpen(false);
    }; 

    const closeModalAdd = () => {
        setIsModalAddOpen(false);
    };
    
    return (
        <div className="Modal">
            <div className='Modal-content'>
                <div className='Modal-header'>
                    <h4 className='Modal-title'>Mon contact</h4>
                </div>
                <div className='Modal-body'>
                    <input placeholder='Lastname' maxLength={20} onChange={handleLastnameChange}></input>
                    <input placeholder='Name' maxLength={20} onChange={handleNameChange}></input>
                    <input placeholder='Phone number' maxLength={20} onChange={handlePhoneChange}></input>
                    <input placeholder='E-mail' maxLength={20} onChange={handleEmailChange}></input>
                    <button className='save-button' onClick={handleProfilesAdd} >Save contact</button>
                    <button className="close-button" onClick={closeModalAdd}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ModalAdd;
