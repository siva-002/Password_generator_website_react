import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import PracticeItem from "./PracticeItem";

const BottomPractice = () => {
  return (
    <Box>
      <Heading textAlign={"center"} margin={"50px 0"}>
        Dive deep into password best practices
      </Heading>
      <Flex gap={"40px"} justifyContent={"center"} flexWrap={"wrap"}>
        <PracticeItem
          head="FAQ"
          title="How Does the Random Password Generator Work?"
          content="What defines a strong password, and how does the LastPass password generator create unique, random passwords every time?"
        />
        <PracticeItem
          head="LEARNING"
          title="Tips for Creating Strong Passwords"
          content="Learn how to create passwords which protect your accounts – and how the LastPass password generator does it best."
        />
        <PracticeItem
          head="COMPARISON"
          title="LastPass vs built-in password managers"
          content="Learn how standalone password manager like LastPass compares to free built-on solutions."
        />
      </Flex>
    </Box>
  );
};

export default BottomPractice;
