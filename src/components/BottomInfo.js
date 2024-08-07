import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const BottomInfo = () => {
  return (
    <Flex paddingTop={"80px"} justifyContent={"center"} flexWrap={"wrap"}>
      <Box
        w={{ base: "100%", md: "50%", "2xl": "35%" }}
        // minH={{base:"450px"}}
        order={{ base: "2", md: "1" }}
        margin={"0"}
        padding={"0"}
      >
        <Image src="images/account_create.svg" />
      </Box>
      <Flex
        w={{ base: "100%", md: "40%" }}
        // marginTop={"60px"}
        order={{ base: "1", md: "2" }}
        direction={"column"}
        justifyContent={{ base: "center" }}
        marginTop={"-40px"}
      >
        <Text
          fontWeight={"800"}
          textTransform={"uppercase"}
          color={"red"}
          m="1"
          // fontSize={{ base: "1rem", "2xl": "2rem" }}
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
        <Box p="2">
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
      </Flex>
    </Flex>
  );
};

export default BottomInfo;
