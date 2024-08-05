import React, { useContext, useState} from "react";
import DataContext from "../Context/DataContext";
import { Checkbox } from "@chakra-ui/react";
const CheckBoxes = () => {
  const {
    handleoptionsChange,
    selectedRadio,
    CheckboxReadonly,
    selectedCheckbox
  } = useContext(DataContext);

  

  return (
    <>
      <Checkbox
        colorScheme="red"
        size={"lg"}
        value={"upper"}
        isChecked={selectedCheckbox.upper || selectedRadio.all ? true : false}
        onChange={handleoptionsChange}
        defaultChecked
        readOnly={CheckboxReadonly.upper}
      >
        UpperCase
      </Checkbox>
      <Checkbox
        colorScheme="red"
        size={"lg"}
        value={"lower"}
        isChecked={selectedCheckbox.lower || selectedRadio.all ? true : false}
        onChange={handleoptionsChange}
        readOnly={CheckboxReadonly.lower}
      >
        Lowercase
      </Checkbox>
      <Checkbox
        colorScheme="red"
        size={"lg"}
        value={"number"}
        onChange={handleoptionsChange}
        isChecked={selectedCheckbox.number || selectedRadio.all ?true:false}
        isDisabled={
          selectedRadio.say && !selectedCheckbox.number ? true : false
        }
        readOnly={CheckboxReadonly.number}
      >
        Numbers
      </Checkbox>
      <Checkbox
        colorScheme="red"
        size={"lg"}
        value={"symbol"}
        onChange={handleoptionsChange}
        isChecked={selectedRadio.all || selectedCheckbox.symbol?true:false}
        isDisabled={
          selectedRadio.say && !selectedCheckbox.symbol ? true : false
        }
        readOnly={CheckboxReadonly.symbol}
      >
        Symbols
      </Checkbox>
    </>
  );
};

export default CheckBoxes;
