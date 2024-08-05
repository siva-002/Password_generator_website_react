import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  ModalCloseButton,
  Box,
  Heading,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { copystyle } from "../Style";
import DataContext from "../Context/DataContext";
const CopyPassword = () => {
    const {modalOpen,modalClose,copyMessage}=useContext(DataContext)
  return (
    <Modal isOpen={modalOpen} onClose={modalClose}>
      <ModalOverlay />
      <ModalContent padding={"20px"} maxW={"none"} w={{ base: "70%" }}>
        <ModalCloseButton />
        <ModalBody>
          <Flex >
            <Box w={{ base: "100%",md:"50%" }} margin={"20px 0"}>
              <Text style={copystyle}>
                <CheckCircleIcon color={"green"} marginRight={"10px"} />
                {copyMessage}
              </Text>
              <Heading lineHeight={"40px"} fontWeight={"500"} margin={"20px 0"}>
                Make that password easy to remember with LastPass
              </Heading>
              <Text margin={"20px 0"} fontSize={"18px"}>
                LastPass does more than generate secure passwords. Try Premium
                for 30 days and let LastPass remember and autofill passwords for
                you. Sign up for free – no credit card required.
              </Text>
              <Button colorScheme="pink">Get LastPass Free</Button>
            </Box>
            <Box w={{base:"0",md:"50%"}}>
              <Image src="images/copy_modal_img.svg" />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CopyPassword;
