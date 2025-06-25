const DeleteMessage = ({ setAction, setShowWarning, confirmDelete, id }) => {
  return (
    <>
      <button
        id={id}
        className='cancel-button'
        onClick={() => {
          setAction("cancel");
          setShowWarning(false);
        }}
      >
        Cancel
      </button>
      <button
        id={id}
        className='delete-button'
        onClick={() => {
          setAction("delete");
          confirmDelete();
        }}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteMessage;
