import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Box, Image, Text, Link, Card, CardBody } from "@chakra-ui/react";
import React from "react";

const ReviewItem = ({ content, image, authorname, authorprofession }) => {
  return (
    <Flex direction={"column"} w={{base:"100%",md:"30%"}}>
      <Card background={"rgba(0,0,255,0.07)"} padding={"20px"} minHeight={"450px"}>
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <Flex>
              <StarIcon color={"goldenrod"} />
              <StarIcon color={"goldenrod"} />
              <StarIcon color={"goldenrod"} />
              <StarIcon color={"goldenrod"} />
              <StarIcon color={"goldenrod"} />
            </Flex>
            <Image src="images/icon_review.svg" width={"25px"} />
          </Flex>
          <Text mt="2" margin={"20px 0 15px 0"} fontSize={"14px"}>{content}</Text>
          <Link
            isExternal
            textDecoration={"underline"}
            fontWeight={"800"}
            fontSize={"14px"}
            mt="2"
          >
            {" "}
            Read Full Review <ExternalLinkIcon color="darkblue" />
          </Link>
          <Flex margin={"20px 0"} gap={"20px"} flexWrap={"wrap"}>
            <Image src={`images/${image}`} width={"70px"} />
            <Box w={"60%"}>
              <Text fontWeight={"800"} >{authorname}</Text>
              <Text fontWeight={"400"} fontSize={"12px"} >{authorprofession}</Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default ReviewItem;
