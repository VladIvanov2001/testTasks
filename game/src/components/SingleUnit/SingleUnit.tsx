import React, { ReactElement } from "react";
import cn from "classnames";

import { Unit } from "../../classes/Unit";
import { GeneralUnitImage } from "../GeneralUnitImage/GeneralUnitImage";
import { UnitInfo } from "../UnitInfo/UnitInfo";

interface IUnitItemProps {
  unit: Unit;
  isDead: boolean;
  isDefending: boolean;
  isCurrent: boolean;
  isTarget: boolean;
  handleSelectTarget: (arg: Unit) => void;
}

export const SingleUnit = ({
  unit,
  isDead,
  isDefending,
  isCurrent,
  isTarget,
  handleSelectTarget,
}: IUnitItemProps): ReactElement => {
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
