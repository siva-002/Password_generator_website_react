import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const BottomInfo = () => {
  return (
    <Flex
      paddingTop={"80px"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
    >
      <Box w={{ base: "100%", md: "50%" }} order={{ base: "2", md: "1" }}>
        <Image src="images/account_create.svg" />
      </Box>
      <Box
        w={{ base: "100%", md: "40%" }}
        marginTop={"60px"}
        order={{ base: "1", md: "2" }}
      >
        <Text
          fontWeight={"800"}
          textTransform={"uppercase"}
          color={"red"}
          m="1"
        >
          More than a password generator
        </Text>
        <Heading
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight={"500"}
          m="1"
        >
          Your passwords, from any device
        </Heading>
        <Box p="2" lineHeight={"30px"}>
          With{" "}
          <Text
            textDecoration={"underline"}
            display={"inline"}
            fontWeight={"800"}
          >
            LastPass Premium
          </Text>{" "}
          and{" "}
          <Text
            textDecoration={"underline"}
            display={"inline"}
            fontWeight={"800"}
          >
            Families
          </Text>{" "}
          plans, you can create secure passwords and store them across all your
          devices on the fly.
        </Box>
        <Text p="2">
          Once saved, all your passwords, shipping info, credit cards become
          available across all your devices and browsers.
        </Text>
        <Button colorScheme="pink" h={"50px"} w={"200px"} m="2">
          Try Personal Free
        </Button>
      </Box>
    </Flex>
  );
};

export default BottomInfo;
