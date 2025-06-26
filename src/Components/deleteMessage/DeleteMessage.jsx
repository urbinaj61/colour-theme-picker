//This component handles the confirmation delete or cancel logic

const DeleteMessage = ({ setAction, confirmDelete, onCancel }) => {
  return (
    <>
      <button
        className='cancel-button'
        onClick={() => {
          setAction("cancel");
          onCancel();
        }}
      >
        Cancel
      </button>
      <button
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
