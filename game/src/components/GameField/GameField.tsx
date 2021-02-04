import { Cell } from "../Cell/Cell";
import "./GameField.css";

export const GameField = () => {
  const renderSquare = (i: number) => {
    return <Cell value={i} />;
  };
  const genericField = () => {
    const rows = [];
    const columnNumber = 3;
    const rowNumber = 4;
    let counter = 0;
    for (let x = 0; x < rowNumber; x++) {
      const rowSquares = [];
      for (let y = 0; y < columnNumber; y++) {
        rowSquares.push(renderSquare(counter));
        counter++;
      }
      rows.push(
        <div className="board-row" key={x}>
          {rowSquares}
        </div>
      );
    }
    return rows;
  };

  return <div>{genericField()}</div>;
};
