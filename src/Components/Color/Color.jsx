import "./Color.css";

export default function Color({ color }) {
  return (
    <section
      className='color-card'
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className='color-card-headline'>{color.hex}</h3>
      <h4 className='color-card-role'>{color.role}</h4>
      <p className='color-card-contrast'>
        contrast: <strong>{color.contrastText}</strong>
      </p>
    </section>
  );
}
