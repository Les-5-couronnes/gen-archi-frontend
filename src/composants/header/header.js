import Modal from "../modal/modal";
import "./header.css";
import React, {useState} from "react";

function Header() {

    const [isModalVisible, setModalVisible] = useState(false);

    // Function to toggle the visibility of the modal
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
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
            {isModalVisible && <Modal setIsModalOpen={setModalVisible} />}
        </div>
    );
}

export default Header;