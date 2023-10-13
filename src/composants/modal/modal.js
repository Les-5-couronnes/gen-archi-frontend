import "./modal.css";
import React, {useState} from "react";

function Modal(props) {
    const [lastname, setLastname] = useState('');
    const [Name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { setIsModalOpen } = props;

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

    const closeModal = () => {
        setIsModalOpen(false);
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
                    <button className='save-button'>Save contact</button>
                    <button className="close-button" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
