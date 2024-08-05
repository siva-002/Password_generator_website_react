import { ChevronRightIcon } from "@chakra-ui/icons";
import { Card, CardBody, Link, Text, Box } from "@chakra-ui/react";
import React from "react";

const PracticeItem = ({ head, title, content }) => {
  return (
    <Card w={{ base: "100%", md: "30%" }} padding={"20px"}>
      <CardBody>
        <Box minHeight="230px">
          <Text color={"#d22"} fontWeight={"800"}>
            {head}
          </Text>
          <Text mt="3" fontSize={"18px"} fontWeight={"500"}>
            {title}
          </Text>
          <Text mt="3">{content}</Text>
        </Box>
        <Link textDecoration={"underline"} fontWeight={"600"}>
          Learn more <ChevronRightIcon />
        </Link>
      </CardBody>
    </Card>
  );
};

export default PracticeItem;
