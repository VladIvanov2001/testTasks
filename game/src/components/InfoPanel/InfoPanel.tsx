import React, { Dispatch, ReactElement, SetStateAction } from 'react';

import { queueSwitcher } from "../../types/types";
import { Unit } from "../../classes/Unit";
import { Turn } from "../Turn/Turn";
import { UnitAction } from "../UnitAction/UnitAction";

interface ISidebarProps {
  queueSwitcher: queueSwitcher;
  toSelectTarget: boolean;
  setToSelectTarget: Dispatch<SetStateAction<boolean>>;
  currentUnit: Unit;
  handleDefense: () => void;
  handleAction: () => void;
}

export const Sidebar = ({
                          toSelectTarget,
                          setToSelectTarget,
                          currentUnit,
                          queueSwitcher,
                          handleDefense,
                          handleAction,
                        }: ISidebarProps): ReactElement | null => {
  if (!currentUnit) {
    return null;
}

  return (
    <div className="sidebar">
    <Turn
      currentUnit={currentUnit}
  unitOrder={queueSwitcher.getUnitOrder().filter((u) => u)}
  />
  <UnitAction
  toSelectTarget={toSelectTarget}
  setToSelectTarget={setToSelectTarget}
  handleDefense={handleDefense}
  handleAction={handleAction}
  />
  </div>
);
};
