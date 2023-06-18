import React from "react";
import Home from "./Routes/Home";
import Practice from "./Routes/Practice";

export const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/test/:testId",
    element: <Practice/>,
  },
];