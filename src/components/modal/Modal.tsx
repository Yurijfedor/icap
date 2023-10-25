import ReactDOM from "react-dom";

import {
  ModalOverlay,
  ModalContent,
  ModalWrapper,
  ModalHeader,
  ModalBody,
} from "./Modal.styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        <ModalWrapper>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalWrapper>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root") as Element
  );
};
