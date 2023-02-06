import React from "react";
import Home from "../components/Home";
import Speakers from "../components/Speakers";
import Custom404 from "./404";

const App = ({ pageName }) => {
  if (pageName === "Home") {
    return <Home />
  } else if (pageName === "Speakers") {
    return <Speakers />;
  } else {
    return <Custom404 />;
  }
};

export default App;
