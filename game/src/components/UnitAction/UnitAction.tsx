//this component is used for action choice: type of action or defence
import React,  { Dispatch, ReactElement, SetStateAction } from "react";

interface IUnitAction {
  toSelectTarget: boolean;
  setToSelectTarget: Dispatch<SetStateAction<boolean>>;
  handleDefense: () => void;
  handleAction: () => void;
}

export const UnitAction = ({
  toSelectTarget,
  setToSelectTarget,
  handleDefense,
  handleAction,
}: IUnitAction): ReactElement => {
  return (
    <div className="turn-controller">
      <button onClick={() => handleAction()}>Deal</button>
      <button onClick={() => handleDefense()}>Defense</button>
    </div>
  );
};
