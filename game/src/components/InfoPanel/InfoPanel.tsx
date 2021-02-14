import React, { Dispatch, ReactElement, SetStateAction } from 'react';

import { QueueSwitcher } from "../../types/types";
import { Unit } from "../../classes/Unit";
import { Turn } from "../Turn/Turn";
import { UnitAction } from "../UnitAction/UnitAction";
import './InfoPanel.css'

interface IInfoPanelProps {
  queueSwitcher: QueueSwitcher;
  toSelectTarget: boolean;
  setToSelectTarget: Dispatch<SetStateAction<boolean>>;
  currentUnit: Unit;
  handleDefense: () => void;
  handleAction: () => void;
}

export const InfoPanel = ({
                            toSelectTarget,
                            setToSelectTarget,
                            currentUnit,
                            queueSwitcher,
                            handleDefense,
                            handleAction,
                          }: IInfoPanelProps): ReactElement | null => {
  if (!currentUnit) {
    return null;
  }

  return (
    <div className="info-panel">
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
