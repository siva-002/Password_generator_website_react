import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [generatedPassword, setgeneratedPassword] = useState("");
  const [passwordlength, setpasswordlength] = useState(1);
  const [selectedRadio, setselectedRadio] = useState({ say: true });
  const [selectedCheckbox, setselectedCheckbox] = useState({
    upper: true,
    lower: false,
    number: false,
    symbol: false,
  });
  const [CheckboxReadonly, setcheckboxReadonly] = useState({});
  const [modalOpen, setmodalOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  //handling input and slider changes
  const handlelengthchange = (e) => {
    setpasswordlength(e);
    // setgeneratedPassword(e);
  };

  //handling checkbox and radio button changes

  useEffect(() => {
    readOnly();
  },[selectedCheckbox]);

  //handling chcekboxes readonly
  const readOnly = () => {
    const keys = getselectedCheckboxes();
    let active = "upper";
    if (keys.length === 1) {
      // console.log(`changing ${keys[0]} true`)
      setcheckboxReadonly({ [keys[0]]: true });
      active = keys[0];
    } else {
      setcheckboxReadonly({ [active]: false });
    }
    // console.log(e.target.value)
  };

  const handleoptionsChange = (e) => {
    switch (e.target.type) {
      // managing input radio change
      case "radio":
        if (e.target.value === "say") {
          setselectedCheckbox({
            ...selectedCheckbox,
            number: false,
            symbol: false,
          });
        }
        if(e.target.value==="all"){
          setselectedCheckbox({upper:true,lower:true,number:true,symbol:true})
        }else{
          setselectedRadio({
            [e.target.value]: e.target.checked,
          })
        };
        break;
      // managing input checkbox change
      case "checkbox":
        const checked=selectedCheckbox[e.target.value]
        setselectedCheckbox({
          ...selectedCheckbox,
          [e.target.value]: !checked,
        });
        break;
        default:
          break;
    }
  };

  //   const getRandomText=(values)=>{
  //         return values[Math.floor(Math.random()*values.length)]
  //   }

  //getting random text in the particular selected criteria
  const getRandomText = (values, count) => {
    let char = "";
    for (let i = 1; i <= count; i++) {
      char += values[Math.floor(Math.random() * values.length)];
    }
    return char;
  };

  const getRandomValue = (text) => {
    return Math.floor(Math.random() * text.length);
  };

  const swapValues = (text) => {
    let char = "";
    let values = [];
    for (let i = 1; i <= text.length; i++) {
      let rnd = getRandomValue(text);
      while (values.includes(rnd)) {
        rnd = getRandomValue(text);
      }
      values.push(rnd);
      char += text[rnd];
    }
    return char;
  };

  const removeAmbiguity = (value) => {
    const ambiguous = ["I", "1", "O", "0"];
    let removed = "";
    for (let i = 0; i < value.length; i++) {
      if (!ambiguous.includes(value[i])) {
        removed += value[i];
      }
    }
    return removed;
  };

  //getting selected checkboxes
  const getselectedCheckboxes = () => {
    return Object.keys(selectedCheckbox).filter(
      (key) => selectedCheckbox[key] === true
    );
  };
  const generatePass = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    // console.log("generating");
    const userChoices = []; //for storing user selected checkbox values

    //getting checked checkbox values
    const keys = getselectedCheckboxes();

    //pushing selecetd checkboxes
    keys.forEach((item) => {
      switch (item) {
        case "upper":
          if (selectedRadio.read) userChoices.push(removeAmbiguity(uppercase));
          else userChoices.push(uppercase);
          break;
        case "lower":
          userChoices.push(lowercase);
          break;
        case "number":
          if (selectedRadio.read) userChoices.push(removeAmbiguity(numbers));
          else userChoices.push(numbers);
          break;
        case "symbol":
          userChoices.push(specialChars);
          break;
          default:
            break
      }
    });
    // console.log(userChoices);

    let generatetext = "";

    const perItem = Math.floor(passwordlength / keys.length);
    const excessItem = passwordlength % keys.length;

    //for getting exact divided characters on each criteria
    for (let i = 0; i < keys.length; i++) {
      generatetext += getRandomText(userChoices[i], perItem);
    }
    //for getting  random characters on remaining criteria
    for (let i = 1; i <= excessItem; i++) {
      let randomKey = Math.floor(Math.random() * keys.length);
      generatetext += getRandomText(userChoices[randomKey], 1);
    }

    //swapping values after generating text on each criteria
    const swap = swapValues(generatetext);
    setgeneratedPassword(swap);
  };

  useEffect(() => {
    generatePass();
  }, [passwordlength, selectedCheckbox, selectedRadio]);

  // Handling models for copy page
  const modalClose = () => {
    setmodalOpen(false);
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText(generatedPassword)
      .then(() => setCopyMessage("Copied"))
      .catch((err) => setCopyMessage("Error in Copying"));
    setmodalOpen(true);
  };

  return (
    <DataContext.Provider
      value={{
        handlelengthchange,
        passwordlength,
        handleoptionsChange,
        selectedCheckbox,
        selectedRadio,
        generatedPassword,
        generatePass,
        modalOpen,
        modalClose,
        handleCopy,
        copyMessage,
        CheckboxReadonly,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
