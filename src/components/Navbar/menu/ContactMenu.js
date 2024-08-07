import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Text,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  menubuttonstyle,
  menuitemstyle,
  menuitemhover,
  menuitemtitle,
} from "../../../Style";
import {FaPhoneAlt,FaPlay} from "react-icons/fa"
import { IoMdMail, IoIosChatboxes } from "react-icons/io";

const ContactMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={menubuttonstyle}
      >
        Contact Sales {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        p="10"
        maxW={"none"}
        minW={"300px"}
      >
        <Text style={menuitemtitle}>Contact Sales</Text>
        <MenuItem style={menuitemstyle} _hover={menuitemhover}>
          <Icon as={IoIosChatboxes} boxSize={5} marginRight={"5px"} /> Chat with
          Sales
        </MenuItem>
        <MenuItem style={menuitemstyle} _hover={menuitemhover}>
          <Icon as={FaPhoneAlt} boxSize={5} marginRight={"5px"} /> Call Sales
          000 800 050 3462
        </MenuItem>
        <MenuItem style={menuitemstyle} _hover={menuitemhover}>
          <Icon as={IoMdMail} boxSize={5} marginRight={"5px"} /> Email Sales
        </MenuItem>
        <MenuItem style={menuitemstyle} _hover={menuitemhover}>
          <Icon as={FaPlay} boxSize={5} marginRight={"5px"} /> Request a Demo
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ContactMenu;
