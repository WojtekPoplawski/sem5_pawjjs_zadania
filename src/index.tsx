import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Zadanie1 from "./pages/tasks/Zadanie1";
import Zadanie2 from "./pages/tasks/Zadanie2";
import Zadanie3 from "./pages/tasks/Zadanie3";
import Zadanie4 from "./pages/tasks/Zadanie4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Zadanie1",
    element: <Zadanie1 />,
  },
  {
    path: "/Zadanie2",
    element: <Zadanie2 />,
  },
  {
    path: "/Zadanie3",
    element: <Zadanie3 />,
  },
  {
    path: "/Zadanie4",
    element: <Zadanie4 />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
