const CopyToClipBoard = ({ onCopyHex, copyHex }) => {
  return (
    <button className='colour-copy-hex-button' onClick={onCopyHex}>
      {copyHex ? copyHex : "Copy"}
    </button>
  );
};

export default CopyToClipBoard;
