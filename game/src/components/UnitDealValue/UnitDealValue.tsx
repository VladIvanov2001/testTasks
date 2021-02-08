import React,  { ReactElement } from "react";
import { IRoleAction } from "../../interfaces/IRoleAction";
import { Attacker } from "../../classes/actions/attack/Attacker";
import { Healer } from "../../classes/actions/health/Healer";
import { Paralyze } from "../../classes/actions/paralyze/Paralyze";

interface IUnitDealValueProps {
  dealValue:number;
  roleAction: IRoleAction;
}

const defineRoleForPicture = (roleType: IRoleAction): string => {
  if (roleType instanceof Attacker) {
    return "damage.png";
  } else if (roleType instanceof Healer) {
    return "heal.png";
  } else if (roleType instanceof Paralyze) {
    return "paralyze.png";
  }
  return "damage.png";
};

export const UnitDealValue = ({ dealValue,
                                roleAction,
}: IUnitDealValueProps): ReactElement => {
  return (
    <div>
      <img
        alt="value"
        src={`../../assets/${defineRoleForPicture(roleAction)}`}
      />
      <span>{dealValue}</span>
    </div>
  );
};
