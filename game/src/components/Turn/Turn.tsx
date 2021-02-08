import React, { ReactElement, useEffect, useState } from "react";
import { Unit } from "../../classes/Unit";
import { COUNT_UNIT_FOR_TURN } from "../../constants/constants";
import { GeneralUnitImage } from "../GeneralUnitImage/GeneralUnitImage";
import './Turn.css';

interface ITurn{
  currentUnit: Unit;
  unitOrder: Unit[];
}

export const Turn = ({currentUnit, unitOrder}:ITurn):ReactElement =>{
  const [currentUnitOrder, setCurrentUnitOrder] = useState<Unit[]>(unitOrder);

  useEffect(()=>{
    const currentUnitIndex = unitOrder.findIndex((unit) => unit === currentUnit);
    if (currentUnitIndex !== -1) {
      setCurrentUnitOrder([
        unitOrder[currentUnitIndex],//current unit in order
        ...[
          ...unitOrder.slice(currentUnitIndex + 1),
          ...unitOrder.slice(0, currentUnitIndex),//circle move
        ].slice(0, COUNT_UNIT_FOR_TURN+1),
      ]);
    }
  }, [currentUnit]);

  return (
    <div className="turn">
      {currentUnitOrder.map((unit, idx)=>{
        return(
        <div className="turn-item" key={idx}>
         <GeneralUnitImage name={unit.getName()} />
        </div>
        )
      })}
    </div>
  );
};
