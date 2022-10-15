import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
      <Grid item sx={{ margin: "8px", padding: "8px" }}>
        <Typography variant="h3" sx={{ margin: "8px" }}>
          Zadanie 4
        </Typography>
        <Paper>
          <Grid sx={{ margin: "2px", padding: "2px" }}>
            <Button
              sx={{ marginRight: "2px" }}
              variant="outlined"
              onClick={() => navigate("/")}
            >
              Powrót
            </Button>
            <Button
              sx={{ marginRight: "2px" }}
              variant="outlined"
              onClick={() => fun()}
            >
              Start
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
export default Zadanie4;
