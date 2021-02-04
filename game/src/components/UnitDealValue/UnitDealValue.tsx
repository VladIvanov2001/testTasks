import { ReactElement } from "react";
import { IRoleAction } from "../../interfaces/IRoleAction";
import { Attack } from "../../classes/actions/attack/Attack";
import { Heal } from "../../classes/actions/health/Heal";
import { Paralyze } from "../../classes/actions/paralyze/Paralyze";

interface IUnitDealValueProps {
  heal: number;
  damage: number;
  roleAction: IRoleAction;
}

const defineRoleForPicture = (roleType: IRoleAction): string => {
  if (roleType instanceof Attack) {
    return "damage.png";
  } else if (roleType instanceof Heal) {
    return "heal.png";
  } else if (roleType instanceof Paralyze) {
    return "paralyze.png";
  }
  return "damage.png";
};

export const UnitDealValue = ({
  heal,
  damage,
  roleAction,
}: IUnitDealValueProps): ReactElement => {
  return (
    <div>
      <img
        alt="value"
        src={`../../assets/${defineRoleForPicture(roleAction)}`}
      />
      <span>{heal}</span>
      <span>{damage}</span>
    </div>
  );
};
