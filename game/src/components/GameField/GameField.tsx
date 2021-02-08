import React, { ReactElement, useEffect, useState } from 'react';
import { Unit } from "../../classes/Unit";
import { unit, unitAction } from "../../types/types";
import { SingleUnit } from "../SingleUnit/SingleUnit";
import './GameField.css'

interface IBoardProps {
  initialUnits: Unit[][];
  units: Unit[][];
  toSelectTarget: boolean;
  handleSelectTarget: (unit: Unit) => void;
  currentUnit: Unit;
  unitAction: unitAction;
}

export const GameField = ({
                        initialUnits,
                        units,
                        currentUnit,
                        toSelectTarget,
                        unitAction,
                        handleSelectTarget,
                      }: IBoardProps): ReactElement => {
  const [possibleTargets, setPossibleTargets] = useState<unit[]>();

  useEffect(() => {
    if (currentUnit) {
      setPossibleTargets(unitAction.getPossibleTargetsOfUnit(currentUnit));
    }
  }, [currentUnit]);

  return (
    <div className="board-container">
      {initialUnits.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((unit, columnIndex) => {
            return (
              <SingleUnit
                key={columnIndex}
                unit={unit}
                isDead={Boolean(!units[rowIndex][columnIndex])}
                isDefending={Boolean(unit.getDefence())}
                isCurrent={unit === currentUnit}
                isTarget={
                  toSelectTarget && possibleTargets?.findIndex((unit) => unit === units[rowIndex][columnIndex]) !== -1
                }
                handleSelectTarget={handleSelectTarget}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
