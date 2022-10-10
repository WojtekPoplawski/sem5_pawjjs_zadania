import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Zadanie2 = () => {
  const fun = () => {
    const r = prompt("Podaj wartość ");
    console.groupCollapsed("Zadanie 2");
    if (r !== "") {
      console.log("Obwód = " + Number(r) * Number(Math.PI.toFixed(2)));
      console.log(
        "Pole = " + Number(r) * Number(r) * Number(Math.PI.toFixed(2))
      );
    } else {
      console.log("Należy podać wartość");
    }
    console.groupEnd();
  };

  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(-1)}>Powrót</Button>
      <Button onClick={() => fun()}>Start</Button>
    </div>
  );
};
export default Zadanie2;
