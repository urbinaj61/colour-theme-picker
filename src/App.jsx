import { useState } from "react";
import { initialColours } from "./lib/colours";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Colour from "./Components/colour/Colour";
import ColourForm from "./Components/colourForm/ColourForm";
import useLocalStorageState from "use-local-storage-state";
import "./App.css"; //Main App css

const App = () => {
  const [colours, setColours] = useLocalStorageState("colours", {
    defaultValue: initialColours,
  });
  const [, setId] = useState("");
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [, setAction] = useState("");
  const [edit, setEdit] = useState(false);
  const [colour, setColour] = useState({});

  const handleAddColour = formData => {
    if (colours.find(colour => colour.id === formData.id)) {
      setColours(
        colours.map(colour => (colour.id === formData.id ? formData : colour))
      );
      setEdit(false);
      setColour({});
    } else {
      setColours([...colours, formData]);
    }
  };

  const handleDeleteColour = e => {
    setDeleteTargetId(e.target.id);
  };

  const confirmDelete = () => {
    setColours(colours.filter(colour => colour.id !== deleteTargetId));
    setDeleteTargetId(null);
    setAction("");
  };

  const cancelDelete = () => {
    setDeleteTargetId(null);
  };

  const handleEdit = e => {
    setId(e.target.id);
    setEdit(!edit);
    setColour(colours.find(colour => colour.id === e.target.id));
  };

  return (
    <>
      <Header />
      <main>
        <ColourForm onAddColour={handleAddColour} title='Add Colour' />

        {edit && (
          <ColourForm
            onAddColour={handleAddColour}
            title='Update Colour'
            colour={colour}
          />
        )}

        <section className='colour-roles'>
          {colours.length > 0 ? (
            colours.map(color => {
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
