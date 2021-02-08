import React, { ReactElement } from "react";
import { UnitDealValue } from "../UnitDealValue/UnitDealValue";
import { UnitHP } from "../UnitHP/UnitHP";
import { IRoleAction } from "../../interfaces/IRoleAction";
import './UnitInfo.css'

interface IUnitInfoProps {
  hp: number;
  name: string;
  dealValue: number;
  roleAction: IRoleAction;
}

export const UnitInfo = ({
  hp,
  name,
  roleAction,
  dealValue
}: IUnitInfoProps): ReactElement => {
  return (
    <div className="user-info">
      <UnitDealValue dealValue={dealValue} roleAction={roleAction} />
      <span>{name}</span>
      <UnitHP hp={hp} />
    </div>
  );
};
