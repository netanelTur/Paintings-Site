import "./App.css";
import renderWhatButton from "./components/renderWhatButton/renderWhatButton";
import { useState } from "react";

const App = () => {
  const [selectedButton, setSelectedButton] = useState("My paintings");

  return (
    <div>
      <h1 className="name">Yehudit Englard</h1>
      <renderWhatButton />
    </div>
  );
};

export default App;
