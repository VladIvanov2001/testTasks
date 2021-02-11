import React, { ReactElement, useState } from 'react';
import { UnitImages } from "../UnitImage";
import './GeneralUnitImage.css'
import { useDispatch, useSelector } from 'react-redux';
import { setHoverIsTrue } from '../../redux/actions/action';
import cn from 'classnames';
import { IsActiveHover } from '../../types/types';

interface IGeneralUnitImageProps {
  name: string;
  isDead?: boolean;
  isDefending?: boolean;
}

export const GeneralUnitImage = ({
  name,
  isDead,
  isDefending,
}: IGeneralUnitImageProps): ReactElement => {
  const formattedUnitName: string = name.split(' ').join('');
  const UnitImageComponent: React.FC = UnitImages[`${formattedUnitName}Image`];
  const dispatch = useDispatch();
  const isHover = useSelector((state: IsActiveHover) => state.isHover);
  console.log(isHover);
  return (
    <div className={cn({
      "unit-image-container": true,
      hover: isHover,
    })} onMouseEnter={() => dispatch(setHoverIsTrue(true))} onMouseLeave={() => dispatch(setHoverIsTrue(false))}>
      <UnitImageComponent />
      {isDefending && !isDead && <img alt="defending" src='/roleActions/defence.png' className="status" />}
      {isDead && <img alt="dead" src='/roleActions/death.png' className="status" />}
    </div>
  );
};
