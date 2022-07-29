import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import JoinServerForm from './JoinServerForm';


function JoinServerModal({ server }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
            >
                {server.name}
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <JoinServerForm server={server} hideForm={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default JoinServerModal;
