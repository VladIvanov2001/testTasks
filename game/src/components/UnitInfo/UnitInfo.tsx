import {ReactElement} from "react";
import {UnitDealValue} from "../UnitDealValue/UnitDealValue";
import {UnitHP} from "../UnitHP/UnitHP";
import {IRoleAction} from "../../interfaces/IRoleAction";

interface IUnitInfoProps {
    hp: number;
    name: string;
    dealValue: number;
    roleAction: IRoleAction;
}

export const UnitInfo = ({hp, name, roleAction}: IUnitInfoProps): ReactElement =>{
    return(
        <div>
            <UnitDealValue dealValue={dealValue} roleAction={roleAction} />
            <span>{name}</span>
            <UnitHP hp={hp} />
        </div>
    )
}
