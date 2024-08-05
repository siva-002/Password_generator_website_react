import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Securityitem from "./Securityitem";

const BottomSecutity = () => {
  return (
    <Box paddingTop={"50px"} marginBottom={"100px"}>
      <Heading textAlign={"center"} fontWeight={"500"} fontSize={"2.5rem"}>
        Take your security to the next level
      </Heading>
      <Flex flexWrap={"wrap"} marginTop={"50px"} justifyContent={"center"}>
        <Securityitem
          image="security_1.svg"
          title="Zero-knowledge security"
          content="Your data is kept secret, even from us. Learn how LastPass protects your data with a local-only encryption model."
          link="Learn more about encryption"
        />
        <Securityitem
          image="security_2.svg"
          title="Be aware of digital threats"
          content="LastPass Premium’s data breach monitoring immediately notifies you if your data has been compromised online."
          link="Dark web monitoring"
        />
        <Securityitem
          image="security_3.svg"
          title="Nurture your habits"
          content="LastPass Premium helps you find and update weak, reused passwords with ones created by our password generator."
          link="Security dashboard"
        />
        <Securityitem
          image="security_4.svg"
          title="Multifactor authentication"
          content="Enable additional authentication, like a one-time passcode or fingerprint scan, to protect your account against hackers."
          link="Multifactor options"
        />
      </Flex>
    </Box>
  );
};

export default BottomSecutity;
