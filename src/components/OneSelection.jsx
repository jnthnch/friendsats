import React from 'react';

const OneSelection = ({ selection, addWin, addLoss, addPush }) => {
  return (
    <div className="single-selection">
      <p>{selection}</p>
      <div className="selection-result">
        <button onClick={addWin}>win</button>
        <button onClick={addLoss}>loss</button>
        <button onClick={addPush}>push</button>
      </div>
    </div>
  )
}

export default OneSelection;