import React from "react";
import Modal from "react-modal";

const EditPetModal = ({ onCancel, pet, onSave }) => {
  return (
    <Modal isOpen={true} onRequestClose={onCancel}>
      <h2>Edit Item</h2>
    </Modal>
  );
};

export default EditPetModal;
