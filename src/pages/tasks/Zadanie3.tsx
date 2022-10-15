import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Zadanie3 = () => {
  const navigate = useNavigate();
  var array: Array<number> = [];

  const sum = (array: Array<number>) => {
    var summary = 0;
    array.forEach((element) => (summary = summary + element));
    return summary;
  };

  const add = (array: Array<number>, max: number) => {
    if (max > 10) {
      array.push(Math.floor(Math.random() * 10) + 1);
    } else {
      array.push(Math.floor(Math.random() * max) + 1);
    }
  };

  const max = (array: Array<number>) => {
    var maxVal = array[0];
    var maxValIndex = 0;
    var maxValCount = 0;
    array.forEach((element, index) => {
      if (element > maxVal) {
        maxVal = element;
        maxValIndex = index;
      }
    });
    array.splice(maxValIndex, 1);
    array.forEach((element) => {
      if (element === maxVal) {
        maxValCount++;
      }
    });
    return maxValCount;
  };

  const min = (array: Array<number>) => {
    var minVal = array[0];
    var minValIndex = 0;
    var minValCount = 0;
    array.forEach((element, index) => {
      if (element <= minVal) {
        minVal = element;
        minValIndex = index;
      }
    });
    array.splice(minValIndex, 1);
    array.forEach((element) => {
      if (element === minVal) {
        minValCount++;
      }
    });
    return minValCount;
  };

  const swap = (array: Array<number>) => {
    var temp = array.slice(0, 10);
    array.splice(0, 10);
    return array.concat(temp);
  };

  const subGroup = (label: string, info: any) => {
    console.groupCollapsed(label);
    console.log(info);
    console.groupEnd();
  };

  const fun = () => {
    console.groupCollapsed("Zadanie 3");
    if (array.length === 0) {
      array.push(Math.floor(Math.random() * 10) + 1);
    }
    while (sum(array) < 200) {
      add(array, 200 - sum(array));
    }
    subGroup("Tablica po wygenerowaniu", array);
    subGroup("Suma wartości tablicy", sum(array));
    subGroup("Ilość liczb o maksymalnej wartości", max(array));
    subGroup("Ilość liczb o minimalnej wartości", min(array));
    subGroup("Tablica przed operacją zamiany", array);
    array = swap(array);
    subGroup("Tablica po operacji zamiany", array);
    console.groupEnd();
  };

  return (
    <div>
      <Grid item sx={{ margin: "8px", padding: "8px" }}>
        <Typography variant="h3" sx={{ margin: "8px" }}>
          Zadanie 3
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
export default Zadanie3;
