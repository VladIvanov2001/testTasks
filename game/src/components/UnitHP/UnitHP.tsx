import React, { ReactElement } from "react";
import './UnitHP.css'

interface IUnitHPProps {
  hp: number;
}

export const UnitHP = ({ hp }: IUnitHPProps): ReactElement => {
  return (
    <div className="unit-hp-container">
      <img alt="hp" src="/roleActions/hp.jpg" />
      <span>{hp}</span>
    </div>
  );
};
