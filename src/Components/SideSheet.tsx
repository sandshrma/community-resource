import React from "react";
import Modal from "react-modal";
import ModalContent from "Pages/PatientSummary/ModalContent.js";
import { sidesheetProps } from "interfaces";

const customStyles = {
  content: {
    top: "0",
    left: "62%",
    right: "0",
    bottom: "0",
  },
};

const SideSheet = (params: sidesheetProps) => {
  return (
    <Modal
      isOpen={params.open}
      style={customStyles}
      onRequestClose={() => params.setOpen(false)}
    >
      <ModalContent data={params.data} />
    </Modal>
  );
};

export default SideSheet;
