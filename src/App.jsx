// General imports

import { useState } from "react";
import { initialColours } from "./lib/colours";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Colour from "./Components/colour/Colour";
import ColourForm from "./Components/colourForm/ColourForm";
import useLocalStorageState from "use-local-storage-state";
import "./App.css"; //Main App css

const App = () => {
  //Save the colours array to state and local storage using this external library
  const [colours, setColours] = useLocalStorageState("colours", {
    defaultValue: initialColours,
  });

  //General state handling
  const [, setId] = useState("");
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [, setAction] = useState("");
  const [edit, setEdit] = useState(false);
  const [colour, setColour] = useState({});
  const [showInput, setShowInput] = useState(false);

  //Add colour and edit role functionality
  const handleAddColour = (formData) => {
    if (colours.find((colour) => colour.id === formData.id)) {
      setColours(
        colours.map((colour) => (colour.id === formData.id ? formData : colour))
      );
      setEdit(false);
      setColour({});
    } else {
      setColours([...colours, formData]);
    }
  };

  //Delete the role
  const handleDeleteColour = (e) => {
    setDeleteTargetId(e.target.id);
  };

  //Handles the confirmation delete or cancel functionality
  const confirmDelete = () => {
    setColours(colours.filter((colour) => colour.id !== deleteTargetId));
    setDeleteTargetId(null);
    setAction("");
  };

  //Cancel delete
  const cancelDelete = () => {
    setDeleteTargetId(null);
  };

  //Edit role
  const handleEdit = (e) => {
    setId(e.target.id);
    setEdit(!edit);
    setColour(colours.find((colour) => colour.id === e.target.id));
  };

  return (
    <>
      <Header />
      <main>
        {/* Display the add role component */}
        {!edit && (
          <ColourForm
            onAddColour={handleAddColour}
            title="Add Colour"
            showInput={showInput}
            setShowInput={setShowInput}
            colour={colour}
          />
        )}
        {/* Display the edit role component. Same as add but with different props */}
        {edit && (
          <ColourForm
            onAddColour={handleAddColour}
            title="Update Colour"
            colour={colour}
          />
        )}
        {/* Map through the colours array to display each role as a card. */}
        <section className="colour-roles">
          {colours.length > 0 ? (
            colours.map((color) => {
              return (
                <Colour
                  key={color.id}
                  color={color}
                  onDeleteColour={handleDeleteColour}
                  isDeleteTarget={deleteTargetId === color.id}
                  setAction={setAction}
                  confirmDelete={confirmDelete}
                  id={color.id}
                  onEdit={handleEdit}
                  cancelDelete={cancelDelete}
                />
              );
            })
          ) : (
            // If no roles in the colours array display message
            <h3 className="add-colours-message">
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
