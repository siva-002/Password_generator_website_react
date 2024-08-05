import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const BottomCompanyInfo = () => {
  return (
    <Flex
      paddingTop={"80px"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      marginBottom={"50px"}
    >
      <Box w={{ base: "100%", md: "40%" }} marginTop={"60px"}>
        <Text
          fontWeight={"800"}
          textTransform={"uppercase"}
          color={"red"}
          m="1"
        >
          LastPass for businesses
        </Text>
        <Heading
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight={"500"}
          m="1"
        >
          Simply secure your business
        </Heading>
        <Box p="2" lineHeight={"30px"}>
          Eliminate poor password practices and employee password fatigue across
          your teams and organization, all while reducing IT’s burden, with
          LastPass
          <Text
            textDecoration={"underline"}
            display={"inline"}
            fontWeight={"800"}
          >
            Business
          </Text>{" "}
          and{" "}
          <Text
            textDecoration={"underline"}
            display={"inline"}
            fontWeight={"800"}
          >
            Teams
          </Text>{" "}
          plans.
        </Box>
        <Button
          backgroundColor={"black"}
          color={"#fff"}
          h={"50px"}
          w={"200px"}
          m="2"
          _hover={{ background: "rgba(0,0,0,0.7)" }}
        >
          Try Personal Free
        </Button>
      </Box>
      <Box w={{ base: "100%", md: "50%" }}>
        <Image src="images/business.svg" />
      </Box>
    </Flex>
  );
};

export default BottomCompanyInfo;
