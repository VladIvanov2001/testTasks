import { ReactElement } from "react";
import { UnitDealValue } from "../UnitDealValue/UnitDealValue";
import { UnitHP } from "../UnitHP/UnitHP";
import { IRoleAction } from "../../interfaces/IRoleAction";

interface IUnitInfoProps {
  hp: number;
  name: string;
  damage: number;
  heal: number;
  roleAction: IRoleAction;
}

export const UnitInfo = ({
  hp,
  name,
  roleAction,
  damage,
  heal,
}: IUnitInfoProps): ReactElement => {
  return (
    <div>
      <UnitDealValue damage={damage} heal={heal} roleAction={roleAction} />
      <span>{name}</span>
      <UnitHP hp={hp} />
    </div>
  );
};
