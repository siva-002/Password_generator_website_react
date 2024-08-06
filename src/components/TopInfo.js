import {
  Container,
  Card,
  CardBody,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";

const TopInfo = () => {
  return (
    <Container maxW={{base:"95%",xl:"max-content"}}>
      <Card background={"#D0DEED"} >
        <CardBody margin={"0"} padding={"0"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box
              w={{ base: "80%", md: "60%" }}
              m={{ base: "20px", md: "50px" }}
            >
              <Heading fontWeight={"500"} margin={"10px 0"}>
                Need a unique, secure password?
              </Heading>
              <Text margin={"20px 0"}>
                Automatically generate, save and sync your passwords across all
                your devices at any time with LastPass.
              </Text>
              <Flex gap={"10px"} flexWrap={"wrap"}>
                <Button
                  backgroundColor={"black"}
                  color={"white"}
                  height={"50px"}
                  w={{ base: "100%", xl: "30%" }}
                  _hover={{background:"rgba(0,0,0,0.7)"}}
                >
                  Try Business Free
                </Button>
                <Button
                  colorScheme="pink"
                  height={"50px"}
                  w={{ base: "100%", xl: "30%" }}
                >
                  Try Personal Free
                </Button>
              </Flex>
            </Box>
            <Flex justifyContent={"flex-end"} alignItems={"flex-end"}>
              <Image src="images/video_top.svg" />
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  );
};

export default TopInfo;
