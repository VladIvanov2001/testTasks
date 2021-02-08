//this component is used for action choice: type of action or defence
import React,  { Dispatch, ReactElement, SetStateAction } from "react";

interface IUnitActionProps {
  toSelectTarget: boolean;
  setToSelectTarget: Dispatch<SetStateAction<boolean>>;
  handleDefense: () => void;
  handleAction: () => void;
}

export const UnitAction = ({ handleDefense, handleAction }: IUnitActionProps): ReactElement => {
  return (
    <div className="turn-controller">
      <button onClick={() => handleAction()}>Show possible targets</button>
      <button onClick={() => handleDefense()}>Defense</button>
    </div>
  );
};
