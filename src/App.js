import { Button, Container, Divider, Flex } from "@chakra-ui/react";
import GeneratePassword from "./components/GeneratePassword";
import Showpassword from "./components/Showpassword";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
import TopInfo from "./components/TopInfo";
import BottomInfo from "./components/BottomInfo";
import BottomCompanyInfo from "./components/BottomCompanyInfo";
import BottomSecutity from "./components/BottomSecutity";
import BottomRecognition from "./components/BottomRecognition";
import BottomReview from "./components/BottomReview";
import BottomPractice from "./components/BottomPractice";

function App() {
  const { handleCopy } = useContext(DataContext);

  return (
    <div className="App" style={{ margin: "50px 0" }}>
      <TopInfo />
      <Showpassword />
      <GeneratePassword />
      <Flex justifyContent={"center"} marginBottom={"50px"}>
        <Button colorScheme="red" onClick={handleCopy} height={"50px"}>
          Copy Password
        </Button>
      </Flex>
      <Container maxW={"100%"} margin={"0"} background={"#fff"}>
        <BottomInfo />
        <BottomCompanyInfo />
        <Divider />
        <BottomSecutity />
        <BottomRecognition />
        <BottomReview />
      </Container>
      <Container maxW={"100%"} margin={"0"} background={""}>
        <BottomPractice />
      </Container>
    </div>
  );
}

export default App;
