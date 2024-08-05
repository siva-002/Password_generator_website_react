import React, { useContext} from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Flex,
  Container,
  Tooltip,
  Input
} from "@chakra-ui/react";
import { CopyIcon, RepeatIcon } from "@chakra-ui/icons";
import { inputstyle, tooltipstyle } from "../Style";
import DataContext from "../Context/DataContext";
import CopyPassword from "./CopyPassword";
const Showpassword = () => {
  const { generatedPassword, generatePass, handleCopy, modalOpen } =
    useContext(DataContext);
  const securepassstyle = {
    width: `${
      generatedPassword.length >= 11
        ? "100%"
        : generatedPassword.length >= 10
        ? "75%"
        : generatedPassword.length >= 8
        ? "50%"
        : generatedPassword.length >= 4
        ? "25%"
        : "0"
    }`,
    background: `${
      generatedPassword.length >= 11
        ? "darkgreen"
        : generatedPassword.length >= 10
        ? "lightgreen"
        : generatedPassword.length >= 8
        ? "yellow"
        : generatedPassword.length >= 4
        ? "orangered"
        : "none"
    }`,
    borderRadius: "3px",
    height: "10px",
    transition: "all 1s ease",
    position: "absolute",
    bottom: "1px",
  };
  return (
    <>
      {modalOpen && <CopyPassword />}
      <Container maxW="800px" marginTop={"30px"}>
        <Box marginBottom={"30px"}>
          <Heading textAlign={"center"} fontWeight={"500"} padding={"5px"}>
            Instantly generate a secure, random password with the LastPass
            online tool
          </Heading>
          <Text textAlign={"center"}>
            Use our online password generator tool to instantly create a secure,
            random password.
          </Text>
        </Box>
        <Card height={"130px"} zIndex={"1"}>
          <CardBody padding={"0"}>
            <Flex margin={"40px 5px 37px 40px"}>
                <Input value={ generatedPassword } style={inputstyle} readOnly/>
              <Box zIndex={"6"}>
                <Tooltip label="copy" placement="right" {...tooltipstyle}>
                  <CopyIcon
                    margin={"5px"}
                    boxSize={"8"}
                    cursor={"pointer"}
                    zIndex={"-1"}
                    onClick={handleCopy}
                    color="grey"
                  />
                </Tooltip>
                <Tooltip label="generate" placement="right" {...tooltipstyle}>
                  <RepeatIcon
                    boxSize={"8"}
                    cursor={"pointer"}
                    zIndex={"-1"}
                    onClick={generatePass}
                    color="grey"
                  />
                </Tooltip>
              </Box>
            </Flex>
            <Box style={securepassstyle}></Box>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Showpassword;
