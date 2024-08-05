import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import RecognitionItem from "./RecognitionItem";

const BottomRecognition = () => {
  return (
    <Box>
      <Heading textAlign={"center"}>
        Trusted by millions, recognized by experts
      </Heading>
      <Flex justifyContent={"center"} margin={"0 30px"} flexWrap={"wrap"}>
        <RecognitionItem
          title="Millions"
          content="Customers secure their passwords with LastPass"
        />
        <RecognitionItem
          image="recognition_1.png"
          content="Best Software Awards for Best Security Product"
          desc="G2"
        />
        <RecognitionItem
          image="recognition_2.png"
          content="Password Management Solution of the Year"
          desc="CyberSecurity Breakthrough"
        />
        <RecognitionItem
          image="recognition_3.png"
          content="Leader in Password Management"
          desc="Based on 1,305 reviews"
        />
        <RecognitionItem
          number="4.4"
          content="Chrome Web Store and App Store rating"
          desc="Based on 79,300+ reviews"
        />
      </Flex>
    </Box>
  );
};

export default BottomRecognition;
