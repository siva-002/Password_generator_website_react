import { useState } from "react";
import {
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Spacer,
  Box,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

import FirstMenu from "./menu/FirstMenu";
import SecondMenu from "./menu/SecondMenu";
import ThirdMenu from "./menu/ThirdMenu";
import FourthMenu from "./menu/FourthMenu";
import FifthMenu from "./menu/FifthMenu";
import SixthMenu from "./menu/SixthMenu";
import ContactMenu from "./menu/ContactMenu";
import { FaHamburger,FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [menuShow, setmenuShow] = useState(false);
  const listitemstyle = {
    fontWeight: "600",
    fontSize: "0.9rem",
  };

  return (
    <Container
      maxW={"none"}
      style={{ top: "0", position: "fixed", zIndex: "999" }}
      m="0"
      p="0"
    >
      <Card h={"70px"}>
        <CardBody
          display={"flex"}
          alignItems={"center"}
          justifyContent={{ base: "start", md: "center" }}
          m="0"
          p="0"
        >
          <Box
            style={{ top: "20px", position: "absolute", right: "40px" }}
            display={{ base: "block", md: "none" }}
          >
            <IconButton 
              style={{background:"none",cursor:"pointer"}}
              as={menuShow ? FaTimes : FaHamburger}
              onClick={() => setmenuShow(!menuShow)}
            />
          </Box>
          <Flex
            gap={"30px"}
            direction={{ base: "column", md: "row" }}
            background={"#fff"}
            height={{ base: "100vh", md: "unset" }}
            overflow={{ base: "auto", md: "unset" }}
            // style={menudisplay}
            display={{ base: menuShow ? "flex" : "none", md: "flex" }}
           
           
          >
            <Heading
              color={"darkred"}
              size={"lg"}
              justifyContent={"flex-start"}
              m={{ base: "10px 30px", md: "0" }}
            >
              LastPass
            </Heading>
            <List style={listitemstyle}>
              <Flex
                gap={"10px"}
                alignItems={"center"}
                height="100%"
                direction={{ base: "column", md: "row" }}
              >
                <ListItem>
                  <FirstMenu />
                </ListItem>
                <ListItem>
                  <SecondMenu />
                </ListItem>
                <ListItem>
                  <ThirdMenu />
                </ListItem>
                <ListItem>
                  <FourthMenu />
                </ListItem>
                <ListItem>
                  <FifthMenu />
                </ListItem>
                <ListItem>
                  <SixthMenu />
                </ListItem>
              </Flex>
            </List>
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <List style={listitemstyle}>
              <Flex
                gap={"30px"}
                alignItems={"center"}
                height={"100%"}
                direction={{ base: "column", md: "row" }}
              >
                <ListItem>Login</ListItem>
                <ListItem>
                  <ContactMenu />
                </ListItem>
                <ListItem>
                  <Button colorScheme="red" h={"50px"}>
                    Get LastPass Free
                  </Button>{" "}
                </ListItem>
              </Flex>
            </List>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Navbar;
