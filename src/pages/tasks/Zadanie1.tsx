import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
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
      <Grid item sx={{ margin: "8px", padding: "8px" }}>
        <Typography variant="h3" sx={{ margin: "8px" }}>
          Zadanie 1
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
export default Zadanie1;
