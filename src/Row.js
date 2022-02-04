import React from "react";

const Row = ({ rowNumber }) => {
  return (
    <div className="row">
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 0)`}/>
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 1)`}/>
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 2)`}/>
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 3)`}/>
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 4)`}/>
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 5)`}/>
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 6)`}/>
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 7)`}/>
      <input type="text" className="cell" maxLength={1} pattern="[1-9]" id={`(${rowNumber}, 8)`}/>
    </div>
  );
};

export default Row;