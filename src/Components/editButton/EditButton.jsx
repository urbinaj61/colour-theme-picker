const EditButton = ({ onEdit, id }) => {
  return (
    <button
      id={id}
      className='colour-card-edit-button'
      onClick={id => onEdit(id)}
    >
      Edit
    </button>
  );
};

export default EditButton;
