import React, { ReactElement } from "react";
import { UnitImages } from "../UnitImage";
import './GeneralUnitImage.css'

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

  return (
    <div className="unit-image-container">
      <UnitImageComponent />
      {isDefending && !isDead && <img alt="defending" src='/roleActions/defence.png' className="status" />}
      {isDead && <img alt="dead" src='/roleActions/death.png' className="status" />}
    </div>
  );
};
