import { useState } from "react";

import { initialColors } from "./lib/colors";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Color from "./Components/Color/Color";
import ColourForm from "./Components/colourForm/ColourForm";
import "./App.css";

const App = () => {
  const [colours, setColours] = useState(initialColors);
  const [showWarning, setShowWarning] = useState(false);
  const [id, setId] = useState("");
  const [, setAction] = useState("");

  const handleAddColour = formData => {
    setColours([...colours, formData]);
  };

  const handleDeleteColour = e => {
    setId(e.target.id);
    setShowWarning(true);
  };

  const confirmDelete = () => {
    setColours(colours.filter(colour => colour.id !== id));
    setShowWarning(false);
    setAction("");
  };

  return (
    <>
      <Header />
      <main>
        <ColourForm onAddColour={handleAddColour} />
        <section className='colour-roles'>
          {colours.length > 0 ? (
            colours.map(color => {
              return (
                <Color
                  key={color.id}
                  color={color}
                  onDeleteColour={handleDeleteColour}
                  showWarning={showWarning}
                  setShowWarning={setShowWarning}
                  setAction={setAction}
                  confirmDelete={confirmDelete}
                  id={id}
                />
              );
            })
          ) : (
            <h3 className='add-colours-message'>
              Please add colours to your theme
            </h3>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
