import React, { ReactElement, useEffect, useState } from 'react';
import {
  BoardLocation,
  QueueSwitcher,
  Team,
  TypeOfAction,
  PossibleUnit,
  UnitActionType
} from "./types/types";
import { Unit } from "./classes/Unit";
import { Game } from "./classes/Game";
import { GameOver } from "./components/GameOver/GameOver";
import { MultiTarget } from "./classes/targets/MultiTarget";
import { InfoPanel } from "./components/InfoPanel/InfoPanel";
import { GameField } from "./components/GameField/GameField";
import {ROWS, COLUMNS } from './constants/constants';

import './App.css';

let initialUnits: PossibleUnit[][] | null = null;

function App(): ReactElement {
  const [units, setUnits] = useState<PossibleUnit[][]>();
  const [queueSwitcher, setQueueSwitcher] = useState<QueueSwitcher>();
  const [unitAction, setUnitAction] = useState<UnitActionType>();
  const [toSelectTarget, setToSelectTarget] = useState<boolean>(false);
  const [currentUnit, setCurrentUnit] = useState<Unit>();
  const [turnsCount, setTurnsCount] = useState<number>(1);
  const [finish, setFinish] = useState<{ isFinished: boolean; currentTeam: Team }>();
  const [toStartNewGame, setToStartNewGame] = useState<boolean>(false);

  function handleNewGame(): void {
    setToStartNewGame(!toStartNewGame);
    setFinish(Game.finish(currentUnit as Unit));
  }

  function handleSelectTarget(unit: Unit): void {
    if (currentUnit && unitAction?.getPossibleTargetsOfUnit(currentUnit).findIndex((u) => u === unit) === -1) {
      return;
    }

    const unitBoardLocation = unitAction?.getBoardLocationOfTarget(unit);
    unitAction?.doAction(TypeOfAction.Action, currentUnit as Unit, unitBoardLocation as BoardLocation);
    setToSelectTarget(false);
    setTurnsCount(turnsCount + 1);
  }

  function handleAction(): void {
    setToSelectTarget(!toSelectTarget);
    if (currentUnit?.getCountTarget() instanceof MultiTarget) {
      unitAction?.doAction(TypeOfAction.Action, currentUnit);
      setToSelectTarget(false);
      setTurnsCount(turnsCount + 1);
    }
  }

  function handleDefense(): void {
    unitAction?.doAction(TypeOfAction.Defence, currentUnit as Unit);
    setTurnsCount(turnsCount + 1);
    setToSelectTarget(false);
  }

  useEffect(() => {
    const initialGameData = Game.start(ROWS, COLUMNS);
    setUnits(initialGameData.units);
    setQueueSwitcher(initialGameData.queueSwitcher);
    setUnitAction(initialGameData.unitAction);
    initialUnits = [...initialGameData.units.map((u) => [...u])];
  }, [toStartNewGame]);

  useEffect(() => {
    setCurrentUnit(queueSwitcher?.next());
  }, [queueSwitcher]);

  useEffect(() => {
    if (currentUnit) {
      setFinish(Game.finish(currentUnit));
    }
    setCurrentUnit(queueSwitcher?.getCurrentUnit());
  }, [turnsCount]);

  if (!units) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      {finish?.isFinished ? (
        <GameOver currentTeam={finish?.currentTeam} handleNewGame={handleNewGame} />
      ) : (
        <>
          <GameField
            units={units as Unit[][]}
            initialUnits={initialUnits as Unit[][]}
            toSelectTarget={toSelectTarget}
            handleSelectTarget={handleSelectTarget}
            currentUnit={currentUnit as Unit}
            unitAction={unitAction as UnitActionType}
          />
          <InfoPanel
            queueSwitcher={queueSwitcher as QueueSwitcher}
            toSelectTarget={toSelectTarget}
            setToSelectTarget={setToSelectTarget}
            currentUnit={currentUnit as Unit}
            handleDefense={handleDefense}
            handleAction={handleAction}
          />
        </>
      )}
    </div>
  );
}

export default App;
