import DeleteMessage from "../deleteMessage/DeleteMessage.jsx";
import EditButton from "../editButton/EditButton.jsx";

export default function Color({
  color,
  onDeleteColour,
  setShowWarning,
  showWarning,
  setAction,
  confirmDelete,
  id,
  onEdit,
}) {
  return (
    <section className='colour-card-container'>
      <aside
        className='colour-card'
        style={{
          background: color.hex,
          color: color.contrastText,
        }}
      >
        <h3 className='colour-card-headline'>{color.hex}</h3>
        <h4 className='colour-card-role'>{color.role}</h4>
        <p className='colour-card-contrast'>
          contrast: <strong>{color.contrastText}</strong>
        </p>
      </aside>
      <button
        id={color.id}
        className='colour-card-delete-button'
        onClick={e => onDeleteColour(e)}
      >
        {showWarning ? "Delete?" : "Delete"}
      </button>
      {showWarning && (
        <DeleteMessage
          setAction={setAction}
          confirmDelete={confirmDelete}
          showWarning={showWarning}
          setShowWarning={setShowWarning}
          id={id}
        />
      )}
      <EditButton onEdit={onEdit} id={id} />
    </section>
  );
}
