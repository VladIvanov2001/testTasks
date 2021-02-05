import { ReactElement, useEffect, useState } from "react";
import { Unit } from "../../classes/Unit";
import { COUNT_UNIT_FOR_TURN } from "../../constants/constants";
import { GeneralUnitImage } from "../GeneralUnitImage/GeneralUnitImage";

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
        ].slice(0, COUNT_UNIT_FOR_TURN),
      ]);
    }
  }, [currentUnit]);

  return (
    <div>
      {currentUnitOrder.map((unit, idx)=>{
        return(
        <div key={idx}>
         <GeneralUnitImage name={unit.name} />
        </div>
        )
      })}
    </div>
  );
};
