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
import { PiDotsThreeFill } from "react-icons/pi";

const ThirdMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={menubuttonstyle}
      >
        Personal {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        p="10"
        maxW={"none"}
        minW={"300px"}
      >
        <Text style={menuitemtitle}>OUR PLANS</Text>
        <MenuItem style={menuitemstyle} _hover={menuitemhover}>
          Premium
        </MenuItem>
        <MenuItem style={menuitemstyle} _hover={menuitemhover}>
          Families
        </MenuItem>
        <MenuItem style={menuitemstyle} color={"red"}>
          <Icon as={PiDotsThreeFill} marginRight={"5px"} /> Try LastPass Free
        </MenuItem>
        <MenuItem
          style={menuitemstyle}
          color={"blue"}
          _hover={{ textDecoration: "underline" }}
        >
          Compare Plans
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ThirdMenu;
