import { useState, useEffect } from "react";
import DeleteMessage from "../deleteMessage/DeleteMessage.jsx";
import EditButton from "../editButton/EditButton.jsx";
import CopyToClipBoard from "../copyToClipBoard/CopyToClipBoard.jsx";

const Colour = ({
  color,
  onDeleteColour,
  setAction,
  confirmDelete,
  onEdit,
  isDeleteTarget,
  id,
  cancelDelete,
}) => {
  const [copyHex, setCopyHex] = useState("");

  const writeToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(color.hex);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCopyHex = () => {
    setCopyHex(<span className='success'>success!</span>);
    writeToClipBoard();
  };

  useEffect(() => {
    if (copyHex !== "") {
      const timer = setTimeout(() => {
        setCopyHex("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [copyHex]);

  return (
    <section className='colour-card-container'>
      <aside
        className='colour-card'
        style={{
          background: color.hex,
          color: color.contrastText,
        }}
      >
        <span className='colour-card-theme'>Theme for now</span>
        <h3 className='colour-card-headline'>{color.hex}</h3>
        <CopyToClipBoard onCopyHex={handleCopyHex} copyHex={copyHex} />
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
        {isDeleteTarget ? "Delete?" : "Delete"}
      </button>
      {isDeleteTarget && (
        <DeleteMessage
          setAction={setAction}
          confirmDelete={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      <EditButton onEdit={onEdit} id={id} />
    </section>
  );
};

export default Colour;
