import React from "react";
import Home from "../components/Home";
import Speakers from "../components/Speakers";

const App = ({ pageName }) => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

export default App;
