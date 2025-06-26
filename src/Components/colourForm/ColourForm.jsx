import { useState, useEffect } from "react";
import ThemeAdd from "../themeAdd/ThemeAdd";
import { uid } from "uid";

const ColourForm = ({ onAddColour, title, colour }) => {
  const [role, setRole] = useState(colour?.role || "");
  const [hexColour, setHexColour] = useState(colour?.hex || "#670909");
  const [contrastColour, setContrastColour] = useState(
    colour?.contrast || "#670909"
  );

  const [data, setData] = useState({});
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            mode: "cors",
            method: "POST",
            body: JSON.stringify({ colors: [hexColour, contrastColour] }),
          }
        );
        const receivedData = await response.json();
        setData(receivedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contrastColour]);

  const handleSubmit = e => {
    e.preventDefault();
    const newColour = {
      role,
      hexText: hexColour,
      hex: hexColour,
      contrastText: contrastColour,
      contrast: contrastColour,
      id: colour?.id || uid(),
    };

    onAddColour(newColour);

    // reset form only if not editing
    if (!colour) {
      setRole("");
      setHexColour("#670909");
      setContrastColour("#670909");
    }
  };

  return (
    <section className='colour-creator-container'>
      <form className='colour-creator-form' onSubmit={handleSubmit}>
        <ThemeAdd showInput={showInput} setShowInput={setShowInput} />
        <aside className='colour-inputs'>
          <label className='colour-creator-label' htmlFor='role'>
            Role
          </label>
          <input
            required={!showInput}
            id='role'
            className='colour-creator-roleText'
            type='text'
            name='role'
            placeholder='Please enter a role'
            value={role}
            onChange={e => setRole(e.target.value)}
          />
          <label className='colour-creator-label' htmlFor='hexText'>
            Hex
          </label>
          <input
            id='hexText'
            className='colour-creator-hexText'
            type='text'
            name='hexText'
            placeholder='Please select a hex colour'
            value={hexColour}
            onChange={e => setHexColour(e.target.value)}
          />
          <input
            required
            className='colour-creator-hex'
            type='color'
            name='hex'
            value={hexColour}
            onChange={e => setHexColour(e.target.value)}
          />
          <label className='colour-creator-label' htmlFor='contrastText'>
            Contrast Colour
          </label>
          <input
            required
            id='contrastText'
            className='colour-creator-contrastText'
            type='text'
            name='contrastText'
            placeholder='Please select a contrast colour'
            value={contrastColour}
            onChange={e => setContrastColour(e.target.value)}
          />
          <input
            required
            className='colour-creator-contrast'
            type='color'
            name='contrast'
            value={contrastColour}
            onChange={e => setContrastColour(e.target.value)}
          />

          {data.overall ? (
            <p className='contrast-message'>{`Overall contrast score ${data.overall}`}</p>
          ) : (
            ""
          )}
        </aside>
        <button className='colour-creator-button'>{title}</button>
      </form>
    </section>
  );
};

export default ColourForm;
