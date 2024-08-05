import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Securityitem = ({image,title,content,link}) => {
  return (
    <Flex
      direction={"column"}
      w={{ base: "100%", md: "40%", lg: "23%" }}
      m="2"
      p="2"
    >
      <Image src={`images/${image}`} w={"70px"} />
      <Text fontWeight={"500"} fontSize={"18px"} margin={"10px 0"}>
        {title}
      </Text>
      <Text fontSize={"13px"} lineHeight={"20px"}>
        {content}
      </Text>
      <Link margin={"10px 0"} fontWeight={"700"} fontSize={"15px"} textDecoration={"underline"}>{link} <ChevronRightIcon  boxSize={"4"}/> </Link>
    </Flex>
  );
};

export default Securityitem;
