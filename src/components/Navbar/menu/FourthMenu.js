import React from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Image,
  Text,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  menubuttonstyle,
  menuitemstyle,
  menuitemhover,
  menuitemtitle,
} from "../../../Style";
import { PiDotsThreeFill } from "react-icons/pi";

const FourthMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={menubuttonstyle}
      >
        Business {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p="10">
        <Flex
          gap={"50px"}
          direction={{ base: "column", md: "row" }}
          overflow={{ base: "auto", md: "unset" }}
          h={{ base: "300px", md: "unset" }}
        >
          <Box>
            <Text style={menuitemtitle}>Business Plans</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Business
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Teams
            </MenuItem>
            <MenuItem style={menuitemstyle} color={"red"}>
              <Icon as={PiDotsThreeFill} marginRight={"5px"} /> Try LastPass
              Business
            </MenuItem>
            <MenuItem
              style={menuitemstyle}
              color={"blue"}
              _hover={{ textDecoration: "underline" }}
            >
              Request a Demo
            </MenuItem>
          </Box>
          <Box>
            <Text style={menuitemtitle}>Admin Features</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Single Sign-On (SSO)
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Multifactor Authentication (MFA)
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Administrator Controls
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Security Dashboard
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Password sharing
            </MenuItem>
          </Box>
          <Box>
            <Text style={menuitemtitle}>Solutions</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Passwordless
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Identity Protection
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Integrations
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Authentication Solutions
            </MenuItem>
          </Box>
          <Box>
            <Image src="images/menu/navigation1.svg" marginBottom={"10px"} />
            <Text style={menuitemtitle}>Business on-demand demos</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Watch LastPass in action
            </MenuItem>
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default FourthMenu;
