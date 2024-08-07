import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  menubuttonstyle,
  menuitemstyle,
  menuitemhover,
  menuitemtitle,
} from "../../../Style";

const SecondMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={menubuttonstyle}
      >
        Pricing {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p="10" maxW={"none"} minW={"300px"}>
            <Text style={menuitemtitle}>OUR PLANS</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
             Personal Plans
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Business Plans
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Contact Sales
            </MenuItem>
          
      </MenuList>
    </Menu>
  );
};

export default SecondMenu;
