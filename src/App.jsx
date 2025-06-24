import { useState } from "react";

import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColourForm from "./Components/colourForm/ColourForm";
import "./App.css";

const App = () => {
  const [colours, setColours] = useState(initialColors);

  const handleAddColour = formData => {
    setColours([...colours, formData]);
  };

  return (
    <main>
      <h1>Theme Creator</h1>
      <ColourForm onAddColour={handleAddColour} />
      {colours.map(color => {
        return <Color key={color.id} color={color} />;
      })}
    </main>
  );
};

export default App;
