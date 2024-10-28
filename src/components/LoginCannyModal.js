import React from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { FaFacebookF, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const LoginCannyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="top-center"
      className="bg-[#2D363D] rounded-3xl"
      style={{ maxWidth: '400px' }}
    >
      <ModalContent>
        <div className="relative bg-[#2D363D] rounded-3xl">
          <ModalBody className="space-y-2 p-6">
            <h2 className="text-center text-xl font-semibold text-white">Log in to Canny with:</h2>
            <div className="flex justify-center space-x-4 py-4">
              <Button className="bg-[#3A4249] p-1 h-[45px] w-[45px] min-w-[45px] rounded-lg">
                <FaFacebookF size={20} color="#0080FF" />
              </Button>
              <Button className="bg-[#3A4249] p-1 h-[45px] w-[45px] min-w-[45px] rounded-lg">
                <FcGoogle  size={20} color="#fff" />
              </Button>
              <Button className="bg-[#3A4249] p-1 h-[45px] w-[45px] min-w-[45px] rounded-lg">
                <FaGithub size={20} color="#000000" />
              </Button>
              <Button className="bg-[#3A4249] p-1 h-[45px] w-[45px] min-w-[45px] rounded-lg">
                <FaEnvelope size={20} color="#000000" />
              </Button>
            </div>
            <div className="text-center text-[#a3a3a3]">OR</div>
            <div className="text-center text-[#a3a3a3]">Need an account? <span className="underline cursor-pointer">Sign up</span></div>
          </ModalBody>
          <ModalFooter className="pt-3 mt-3 w-full border-t">
            <div className='flex w-full justify-center'>
              <Button
                className="text-[#F9F9F9] bg-transparent border-none"
                variant="flat"
                onPress={onClose}
              >
                Continue without logging in or signing up
              </Button>
            </div>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default LoginCannyModal;
