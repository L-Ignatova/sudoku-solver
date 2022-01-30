import React from "react";
import Row from "./Row";

const Grid = () => {
  return (
    <form className="grid">
      <Row rowNumber={0} />
      <Row rowNumber={1} />
      <Row rowNumber={2} />
      <Row rowNumber={3} />
      <Row rowNumber={4} />
      <Row rowNumber={5} />
      <Row rowNumber={6} />
      <Row rowNumber={7} />
      <Row rowNumber={8} />
    </form>
  );
};

export default Grid;