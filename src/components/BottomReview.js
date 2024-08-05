import { Flex } from "@chakra-ui/react";
import React from "react";
import ReviewItem from "./ReviewItem";

const BottomReview = () => {
  return (
    <Flex margin={"0 30px"} gap={"40px"} flexWrap={"wrap"} paddingBottom={"100px"} justifyContent={"center"}>
      <ReviewItem
        content="“I like that LastPass is easy to use and intuitive. It integrates well with all websites and allows me to keep secure encryption for all my personal and work-related accounts. It allows me to organize folders, share with others, and only memorizing one master password for all of those while keeping encryption secure is a relief.”"
        image="author_1.png"
        authorname="Kenny Kolijn"
        authorprofession="Independant business coach"
      />
      <ReviewItem
        content="“I use LastPass both corporately and personally. It allows me to securely store and share passwords with my family and co-workers in separate environments and happily generates random secure passwords for me, which prevents me from re-using the same one.”"
        image="author_2.png"
        authorname="Erik Eckert"
        authorprofession="System administrator, MPE Engineering Ltd."
      />
      <ReviewItem
        content="“If you deal with other people's information, as my company does, LastPass is a must. We use it to organize sensitive client credentials, which has never failed us. Its level of security offers us flexibility if we have a vendor or team member that needs access but don't want to share the actual password.”"
        image="author_3.png"
        authorname="Sarah Perry"
        authorprofession="Senior Marketing Director, Small business"
      />
    </Flex>
  );
};

export default BottomReview;
