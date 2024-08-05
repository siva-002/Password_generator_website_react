import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const RecognitionItem = ({ title, image, content, desc }) => {

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={{ base: "100%", md: "20%" }}
     h={{base:"200px", md:"unset"}}
      marginTop={{ base: "10px", md: "80px" }}
    >
      {title ? (
        <Text fontWeight={"600"} fontSize={"2rem"} h="70px" marginTop={"30px"}>
          {title}
        </Text>
      ) : image ? (
        <Box h={"100px"}>
          <Image src={`images/${image}`} w={"80px"} />
        </Box>
      ) : (
        <Text fontWeight={"600"} fontSize={"2rem"} h="70px" marginTop={"30px"}>
          4.4 <StarIcon boxSize={"5"} color={"goldenrod"} />
        </Text>
      )}
      <Text w={"90%"} textAlign={"center"} marginTop={"10px"}>
        {content}
      </Text>
      <Text height={"100px"} fontWeight={"300"} marginTop={"10px"} textAlign={"center"}>
        {desc}
      </Text>
    </Flex>
  );
};

export default RecognitionItem;
