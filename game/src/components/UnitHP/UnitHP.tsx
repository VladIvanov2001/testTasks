import { ReactElement } from "react";

interface IUnitHP {
  hp: number;
}

export const UnitHP = ({ hp }: IUnitHP): ReactElement => {
  return (
    <div>
      <img alt="hp" src="../../assets/roleActions/hp.jpg" />
      <span>{hp}</span>
    </div>
  );
};
