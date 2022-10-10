import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { start } from "repl";

const Zadanie4 = () => {
  const navigate = useNavigate();
  var array: Array<string> = [
    "Ania",
    "Ignacy",
    "Krzysztof",
    "Paulina",
    "Ewewlina",
  ];
  let outArray: Array<string> = [];
  let finArray: Array<string> = [];

  const charSwap = (text: string) => {
    let temp1 = text.replace("a", "4");
    let temp2 = temp1.replace("A", "4");
    let temp3 = temp2.replace("e", "3");
    let temp4 = temp3.replace("E", "3");
    return temp4;
  };

  const sliceMiddle = (text: string) => {
    if (text.length > 6) {
      const start = text.slice(0, 3);
      const end = text.slice(-3);
      const dots = text.length - 6;
      var dotsText = "";
      for (var i = 0; i < dots; i++) {
        dotsText = dotsText + ".";
      }
      return start + dotsText + end;
    } else return text;
  };

  const subGroup = (label: string, info: any) => {
    console.groupCollapsed(label);
    console.log(info);
    console.groupEnd();
  };

  const fun = () => {
    console.groupCollapsed("Zadanie 4");
    subGroup("Tablica przed zmianami", array);
    array.forEach((element) => {
      outArray.push(charSwap(element));
      charSwap(element);
    });
    outArray.forEach((element) => {
      finArray.push(sliceMiddle(element));
    });
    subGroup("Tablica po zmianach", finArray);
    console.groupEnd();
  };

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Powrót</Button>
      <Button onClick={() => fun()}>Start</Button>
    </div>
  );
};
export default Zadanie4;
