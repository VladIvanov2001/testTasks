import React, { ReactElement } from "react";
import cn from "classnames";

import { Unit } from "../../classes/Unit";
import { GeneralUnitImage } from "../GeneralUnitImage/GeneralUnitImage";
import { UnitInfo } from "../UnitInfo/UnitInfo";

import './SingleUnit.css'

interface ISingleUnit {
  unit: Unit;
  isDead: boolean;
  isDefending: boolean;
  isCurrent: boolean;
  isTarget: boolean;
  handleSelectTarget: (arg: Unit) => void;
  currentUnit: Unit;
}

export const SingleUnit = ({
                             unit,
                             isDead,
                             isDefending,
                             isCurrent,
                             isTarget,
                             handleSelectTarget,
                             currentUnit
                           }: ISingleUnit): ReactElement => {
  return (
    <div
      className={cn({
        "unit-item": true,
        current: isCurrent,
        target: isTarget,
      })}
      onClick={() => handleSelectTarget(unit)}
    >
      <GeneralUnitImage
        name={unit.getName()}
        isDead={isDead}
        isDefending={isDefending}
        currentUnit={currentUnit}
      />
      <UnitInfo
        name={unit.getName()}
        hp={unit.getHP()}
        dealValue={unit.getDealValue()}
        roleAction={unit.getDealerType()}
      />
    </div>
  );
};
