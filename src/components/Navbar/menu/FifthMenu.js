import React from "react";
import { Box, Flex, Menu,MenuButton, MenuItem, MenuList, useDisclosure,Text, Icon} from "@chakra-ui/react";
import { ChevronDownIcon,ChevronUpIcon } from "@chakra-ui/icons";
import { menubuttonstyle,menuitemstyle,menuitemhover,menuitemtitle } from "../../../Style";
import { FaRegCircleDot } from "react-icons/fa6";

const FifthMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={menubuttonstyle}
      >
        Partners {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p="10">
        <Flex
          gap={"50px"}
          direction={{ base: "column", md: "row" }}
          overflow={{ base: "auto", md: "unset" }}
          h={{ base: "300px", md: "unset" }}
        >
          <Box>
            <Text style={menuitemtitle}>ALLEGIANCE PARTNER PROGRAM</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Partner Program Overview
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Managed Service Providers
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Solution Providers
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Technology Partners
            </MenuItem>
          </Box>
          <Box>
            <Text style={menuitemtitle}>BECOME A PARTNER</Text>
            <MenuItem style={menuitemstyle} color={"red"}>
              <Icon as={FaRegCircleDot} marginRight={"5px"} /> Become LastPass
              Partner
            </MenuItem>
            <MenuItem
              style={menuitemstyle}
              color={"blue"}
              _hover={{ textDecoration: "underline" }}
            >
              Partner Login
            </MenuItem>
            <MenuItem
              style={menuitemstyle}
              color={"blue"}
              _hover={{ textDecoration: "underline" }}
            >
              Try LastPass for MSP
            </MenuItem>
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default FifthMenu;
