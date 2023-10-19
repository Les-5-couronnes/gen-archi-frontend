import ModalAdd from "../modalAdd/modalAdd";
import "./header.css";
import React, {useState} from "react";

function Header({profiles, setProfiles}) {

    const [isModalAddVisible, setModalAddVisible] = useState(false);

    // Function to toggle the visibility of the modal
    const toggleModal = () => {
        setModalAddVisible(!isModalAddVisible);
    };

    return (
        <div className="Header">
            <div className="rectangle-bleu">
                <div className="title">
                    My Contacts
                </div>
                <button className="add-button" onClick={toggleModal}> 
                    Add Contact
                </button>
            </div>
            {isModalAddVisible && <ModalAdd setIsModalAddOpen={setModalAddVisible} 
            profiles={profiles} setProfiles={setProfiles} 
            />}
        </div>
    );
}

export default Header;