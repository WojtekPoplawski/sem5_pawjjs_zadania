import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Zadanie1 = () => {
  const navigate = useNavigate();
  var iterator = 1;
  const fun = () => {
    console.groupCollapsed("Zadanie 1");
    for (iterator = 1; iterator <= 100; iterator++) {
      if (iterator % 2 === 0 && iterator % 3 === 0) {
        console.log("FizBuz");
      } else {
        if (iterator % 2 === 0) {
          console.log("Fiz");
        } else {
          if (iterator % 3 === 0) {
            console.log("Buz");
          } else console.log(iterator);
        }
      }
    }
    console.groupEnd();
  };

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Powrót</Button>
      <Button onClick={() => fun()}>Start</Button>
    </div>
  );
};
export default Zadanie1;
