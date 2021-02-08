import React, { ReactElement, useEffect, useState } from 'react';
import {
  boardLocation,
  queueSwitcher,
  Team,
  TypeOfAction,
  unit,
  unitAction
} from "./types/types";
import { Unit } from "./classes/Unit";
import { Game } from "./Game";
import { GameOver } from "./components/GameOver/GameOver";
import { MultiTarget } from "./classes/targets/MultiTarget";
import { Sidebar } from "./components/InfoPanel/InfoPanel";
import { GameField } from "./components/GameField/GameField";
import {ROWS, COLUMNS} from "./constants";

let initialUnits: unit[][] | null = null;

function App(): ReactElement {
  const [units, setUnits] = useState<unit[][]>();
  const [queueSwitcher, setQueueSwitcher] = useState<queueSwitcher>();
  const [unitAction, setUnitAction] = useState<unitAction>();
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
    unitAction?.doAction(TypeOfAction.Action, currentUnit as Unit, unitBoardLocation as boardLocation);
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
            unitAction={unitAction as unitAction}
          />
          <Sidebar
            queueSwitcher={queueSwitcher as queueSwitcher}
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
