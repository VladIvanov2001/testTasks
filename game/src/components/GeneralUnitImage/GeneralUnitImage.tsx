import React, { ReactElement } from "react";
import { UnitImages } from "../UnitImage";

interface IGeneralUnitImage {
  name: string;
  isDead?: boolean;
  isDefending?: boolean;
}

export const GeneralUnitImage = ({
  name,
  isDead,
  isDefending,
}: IGeneralUnitImage): ReactElement => {
  const unitNameForComponent: string = name.split(" ").join("");
  const UnitImageComponent: React.FC =
    UnitImages[`${unitNameForComponent}Image`];
  return (
    <div className="unit-image-container">
      <UnitImageComponent />n
      {isDefending && !isDead && (
        <img alt="defence" src="../../assets/roleActions/defence.png" />
      )}
      {isDead && <img alt="dead" src="../../assets/roleActions/death.png" />}
    </div>
  );
};
