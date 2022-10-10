import React from "react";
import "./App.css";
import { Button, Grid } from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Grid container item>
        <Button
          onClick={() => {
            navigate("/Zadanie1");
          }}
        >
          Zadanie 1
        </Button>
        <Button
          onClick={() => {
            navigate("/Zadanie2");
          }}
        >
          Zadanie 2
        </Button>
        <Button
          onClick={() => {
            navigate("/Zadanie3");
          }}
        >
          Zadanie 3
        </Button>
        <Button
          onClick={() => {
            navigate("/Zadanie4");
          }}
        >
          Zadanie 4
        </Button>
      </Grid>
    </div>
  );
}

export default App;
