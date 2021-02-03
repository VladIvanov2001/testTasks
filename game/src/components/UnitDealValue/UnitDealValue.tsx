import {ReactElement} from "react";
import {IRoleAction} from "../../interfaces/IRoleAction";
import {Attack} from "../../classes/actions/attack/Attack";
import {Heal} from "../../classes/actions/health/Heal";
import {PerformParalyze} from "../../classes/actions/paralyze/PerformParalyze";

interface IUnitDealValueProps {
    dealValue: number;
    roleAction: IRoleAction;
}

const defineRoleForPicture = (roleType: IRoleAction): string => {
    if (roleType instanceof Attack) {
        return 'damage.png';
    } else if (roleType instanceof Heal) {
        return 'heal.png';
    } else if (roleType instanceof PerformParalyze) {
        return 'paralyze.png';
    }
    return 'damage.png'
}

export const UnitDealValue = ({dealValue, roleAction}: IUnitDealValueProps): ReactElement => {
    return (
        <div>
            <img alt="value" src={`../../assets/${defineRoleForPicture(roleAction)}`}/>
            <span>{dealValue}</span>
        </div>
    )
}
