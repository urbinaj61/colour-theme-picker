const ThemeAdd = ({ showInput, setShowInput }) => {
  return (
    <>
      <label className='colour-creator-label' htmlFor='select'>
        Theme
      </label>
      <select className='colour-creator-select' name='select' id='select'>
        <option value=''>Default Theme</option>
      </select>
      <button
        className='theme-buttons'
        onClick={() => setShowInput(!showInput)}
      >
        Add
      </button>
      <button className='theme-buttons'>Edit</button>
      <button className='theme-buttons'>Delete</button>

      {showInput && (
        <input
          type='text'
          className='theme-input'
          name='themeInput'
          id='themeINput'
          placeholder='Please enter a theme'
        />
      )}
    </>
  );
};

export default ThemeAdd;
