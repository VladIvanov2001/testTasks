import React, { ReactElement } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { UnitImages } from "../UnitImage";
import './GeneralUnitImage.css'
import { Unit } from '../../classes/Unit';
import { IsActiveHoverAction } from '../../types/types';
import cn from 'classnames';
import { setHoverIsTrue } from '../../redux/actions/action';

interface IGeneralUnitImageProps {
  name: string;
  isDead?: boolean;
  isDefending?: boolean;
  currentUnit: Unit;
}

export const GeneralUnitImage = ({
                                   name,
                                   isDead,
                                   isDefending,
                                   currentUnit
                                 }: IGeneralUnitImageProps): ReactElement => {
  const formattedUnitName: string = name.split(' ').join('');
  const UnitImageComponent: React.FC = UnitImages[`${formattedUnitName}Image`];
  const dispatch = useDispatch();
  const isHover = useSelector((state: IsActiveHoverAction) => state.isHover);

  return (
    <div className={cn({
      "unit-image-container": true,
      hover: isHover.payload === currentUnit.getUnitID(),
    })} onMouseEnter={() => {
      dispatch(setHoverIsTrue(currentUnit.getUnitID()))
    }}
         onMouseLeave={() => {
           dispatch(setHoverIsTrue(-1))
         }
         }>
      <UnitImageComponent />
      {isDefending && !isDead && <img alt="defending" src='/roleActions/defence.png' className="status" />}
      {isDead && <img alt="dead" src='/roleActions/death.png' className="status" />}
      <div className="hp" style={{height: `${Math.round(100 - 100 * (currentUnit.getHP() / currentUnit.getMaxHp()))}%`}}>`{Math.round( 100 * (currentUnit.getHP() / currentUnit.getMaxHp()))}%`</div>
    </div>
  );
};
