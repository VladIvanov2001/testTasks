import React, { ReactElement, useState } from 'react';
import { UnitImages } from "../UnitImage";
import './GeneralUnitImage.css'
import { useDispatch, useSelector } from 'react-redux';
import { setHoverIsTrue } from '../../redux/actions/action';
import cn from 'classnames';
import { IsActiveHover, IsActiveHoverAction } from "../../types/types";
import { Unit } from "../../classes/Unit";

interface IGeneralUnitImageProps {
  name: string;
  isDead?: boolean;
  isDefending?: boolean;
  currentUnit?: Unit;
}

export const GeneralUnitImage = ({
  name,
  isDead,
  isDefending,
  currentUnit
}: IGeneralUnitImageProps): ReactElement => {



  const showCurrentUser = () =>{

  }

  const formattedUnitName: string = name.split(' ').join('');
  const UnitImageComponent: React.FC = UnitImages[`${formattedUnitName}Image`];
  const dispatch = useDispatch();
  const isHover = useSelector((state: IsActiveHoverAction) => state.isHover);
  return (
    <div className={cn({
      "unit-image-container": true,
      hover: isHover.payload
    })} onMouseEnter={() => {
      dispatch(setHoverIsTrue(true))
    }
    } onMouseLeave={() => {
      dispatch(setHoverIsTrue(false))
    }
    }>
      <UnitImageComponent />
      {isDefending && !isDead && <img alt="defending" src='/roleActions/defence.png' className="status" />}
      {isDead && <img alt="dead" src='/roleActions/death.png' className="status" />}
    </div>
  );
};
