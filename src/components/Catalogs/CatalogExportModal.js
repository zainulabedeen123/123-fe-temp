import React from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";

const CatalogExportModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="top-center"
      className="bg-[#2D363D] rounded-3xl"
      style={{ maxWidth: '500px' }}
    >
      <ModalContent>
        <div className="relative bg-[#2D363D] rounded-3xl">
          <ModalBody className="space-y-6 p-6">
            <h2 className="text-center text-xl font-semibold text-white">Catalog Export</h2>
            <div className="text-center text-[#a3a3a3]">
              Send export file to
              You will receive the download link to these emails:
              <br />
              <span className="">(junalda@hotmail.com)</span>
            </div>
          </ModalBody>
          <ModalFooter className="pt-4 w-full flex justify-center space-x-4">
            <Button
              className="text-amber-600 border border-amber-600 bg-[#2D363D] rounded-md px-4 py-2"
              variant="flat"
              onPress={onClose}
            >
              Cancel
            </Button>
            <Button
              className="bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-md px-4 py-2"
              onPress={onClose}
            >
              Export Now
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default CatalogExportModal;
