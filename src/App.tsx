import React from "react";
import "./App.css";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Typography variant="h1">Zestaw 1</Typography>
      <Grid
        container
        item
        sx={{ margin: "8px", padding: "8px" }}
        justifyContent="center"
      >
        <Paper>
          <Grid
            container
            item
            sx={{ margin: "2px", padding: "2px" }}
            justifyContent="center"
          >
            <Button
              sx={{ marginRight: "2px" }}
              variant="outlined"
              onClick={() => {
                navigate("/Zadanie1");
              }}
            >
              Zadanie 1
            </Button>
            <Button
              sx={{ marginLeft: "2px", marginRight: "2px" }}
              variant="outlined"
              onClick={() => {
                navigate("/Zadanie2");
              }}
            >
              Zadanie 2
            </Button>
            <Button
              sx={{ marginLeft: "2px", marginRight: "2px" }}
              variant="outlined"
              onClick={() => {
                navigate("/Zadanie3");
              }}
            >
              Zadanie 3
            </Button>
            <Button
              sx={{ marginLeft: "2px" }}
              variant="outlined"
              onClick={() => {
                navigate("/Zadanie4");
              }}
            >
              Zadanie 4
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default App;
