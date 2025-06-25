import { useState } from "react";
import { uid } from "uid";

const ColourForm = ({ onAddColour }) => {
  const [hexColour, setHexColour] = useState("#670909");
  const [contrastColour, setContrastColour] = useState("#670909");

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("id", uid());
    onAddColour(Object.fromEntries(formData));
    e.target.reset();
    e.target[0].focus();
  };

  return (
    <section className='colour-creator-container'>
      <form className='colour-creator-form' onSubmit={handleSubmit}>
        <label className='colour-creator-label' htmlFor='role'>
          Role
        </label>
        <input
          required
          id='role'
          className='colour-creator-roleText'
          type='text'
          name='role'
          placeholder='Please enter a role'
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
        <button className='colour-creator-button'>Add Colour</button>
      </form>
    </section>
  );
};

export default ColourForm;
