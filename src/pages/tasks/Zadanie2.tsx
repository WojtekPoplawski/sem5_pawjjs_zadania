import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
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
      <Grid item sx={{ margin: "8px", padding: "8px" }}>
        <Typography variant="h3" sx={{ margin: "8px" }}>
          Zadanie 2
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
export default Zadanie2;
