import React from "react";
import {
  Box,
  Flex,
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

const SixthMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={menubuttonstyle}
      >
        Support {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p="10">
        <Flex
          gap={"50px"}
          direction={{ base: "column", md: "row" }}
          overflow={{ base: "auto", md: "unset" }}
          h={{ base: "300px", md: "unset" }}
        >
          <Box>
            <Text style={menuitemtitle}>HELP</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Support Center
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Business on-demand demos
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              LastPass University
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Product Status
            </MenuItem>
          </Box>
          <Box>
            <Text style={menuitemtitle}>RESOURCES </Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Resource Center
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              SSO App Catalog
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Webinars Events
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Blog
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Case Studies
            </MenuItem>
          </Box>
          <Box>
            <Text style={menuitemtitle}>Trust </Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Trust Center
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Security
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Privacy
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Compliance
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Case Studies
            </MenuItem>
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default SixthMenu;
