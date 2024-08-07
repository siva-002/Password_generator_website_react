import React from "react";
import { Box, Flex, Menu,MenuButton, MenuItem, MenuList, useDisclosure,Image,Text, Icon, Spacer} from "@chakra-ui/react";
import { ChevronDownIcon,ChevronUpIcon } from "@chakra-ui/icons";
import { menubuttonstyle,menuitemstyle,menuitemhover,menuitemtitle } from "../../../Style";
import { PiDotsThreeFill } from "react-icons/pi";

const FirstMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={menubuttonstyle}
      >
        Why LastPass {!isOpen?<ChevronDownIcon />:<ChevronUpIcon/>}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p="10">
        <Flex gap={"50px"} direction={{base:"column",md:"row"}} overflow={{base:"auto",md:"unset"}} h={{base:"300px",md:"unset"}}>
          <Box>
            <Text style={menuitemtitle}>Overview</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Why LastPass
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              What is a Password Manager
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Password Vault
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Security Architecture
            </MenuItem>
            <MenuItem style={menuitemstyle} color={"red"}>
              <Icon as={PiDotsThreeFill} marginRight={"5px"} /> Try LastPass
              Free
            </MenuItem>
            <MenuItem style={menuitemstyle} color={"blue"} _hover={{textDecoration:"underline"}} >
              Download LastPass Apps
            </MenuItem>
          </Box>
          <Box>
            <Text style={menuitemtitle}>Key Features</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Save and Auto Fill
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Password Generator
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Dark Web Monitoring
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Security Dashboard
            </MenuItem>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              Passwordless Authentication
            </MenuItem>
          </Box>
          <Box>
            <Image src="images/menu/navigation.jpeg" marginBottom={"10px"} />
            <Text style={menuitemtitle}>LastPass Security</Text>
            <MenuItem style={menuitemstyle} _hover={menuitemhover}>
              How is LastPass Secure
            </MenuItem>
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default FirstMenu;
