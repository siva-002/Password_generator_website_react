import React, { useContext } from "react";
import {
  Box,
  Card,
  CardBody,
  Text,
  Flex,
  CardHeader,
  Heading,
  Container,
  Radio,
  RadioGroup,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { tooltipstyle } from "../Style";
import DataContext from "../Context/DataContext";
import CheckBoxes from "./CheckBoxes";
const GeneratePassword = () => {
  const {
    handlelengthchange,
    passwordlength,
    handleoptionsChange,
  } = useContext(DataContext);
  return (
    <Container marginTop={"30px"} marginBottom={"30px"} maxW="800px">
      <Card>
        <CardHeader>
          <Heading paddingBottom={"10px"} fontWeight={"500"}>
            Customize your password
          </Heading>
          <Divider />
        </CardHeader>
        <CardBody>
          <Flex>
            <Box>
              <Flex gap={"50px"} marginTop={"20px"} flexWrap={"wrap"}>
                {/* Number input component */}
                <Box>
                  <Text paddingBottom={"4px"}>Password Length</Text>
                  <Flex gap={"20px"} flexWrap={"wrap"}>
                    <NumberInput
                      width={"80px"}
                      onChange={handlelengthchange}
                      min={0}
                      max={50}
                      value={passwordlength}
                    >
                      <NumberInputField height={"50px"} />
                      <NumberInputStepper boxSize={"5"} marginTop={"15px"}>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>

                    {/* Slider component */}
                    <Slider
                      aria-label="slider-ex-2"
                      colorScheme="red"
                      defaultValue={passwordlength}
                      value={passwordlength}
                      min={0}
                      max={50}
                      width={"200px"}
                      onChange={handlelengthchange}
                    >
                      <SliderTrack boxSize={3} borderRadius={"30px"}>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb boxSize={8} />
                    </Slider>
                  </Flex>
                </Box>
                {/* Radio button components  */}
                <RadioGroup defaultValue="say">
                  <Stack spacing={5}>
                    <Flex gap={"8px"}>
                      <Radio
                        colorScheme="red"
                        value="say"
                        size={"lg"}
                        onChange={handleoptionsChange}
                      >
                        Easy to say
                      </Radio>
                      <Tooltip
                        label="Avoid numbers and special characters"
                        {...tooltipstyle}
                        placement={"right"}
                      >
                        <InfoIcon cursor={"pointer"} color={"grey"} />
                      </Tooltip>
                    </Flex>
                    <Flex gap={"8px"}>
                      <Radio
                        colorScheme="red"
                        value="read"
                        size={"lg"}
                        onChange={handleoptionsChange}
                      >
                        Easy to read
                      </Radio>
                      <Tooltip
                        label="Avoid ambiguous characters like I,1,0,O"
                        {...tooltipstyle}
                        placement={"right"}
                      >
                        <InfoIcon cursor={"pointer"} color={"grey"} />
                      </Tooltip>
                    </Flex>
                    <Flex gap={"8px"}>
                      <Radio
                        colorScheme="red"
                        value="all"
                        size={"lg"}
                        onChange={handleoptionsChange}
                      >
                        All characters
                      </Radio>
                      <Tooltip
                        label="Any Character combinations like !, 7, h, k and 1"
                        {...tooltipstyle}
                        placement={"right"}
                      >
                        <InfoIcon cursor={"pointer"} color={"grey"} />
                      </Tooltip>
                    </Flex>
                  </Stack>
                </RadioGroup>

                {/* checkbox component */}
                <Stack spacing={5}>
                  <CheckBoxes />
                </Stack>
              </Flex>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  );
};

export default GeneratePassword;
