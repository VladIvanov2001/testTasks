import React, { ReactElement } from "react";
import { Team } from "../../types/types";

interface IGameOver {
  currentTeam: Team;
  handleNewGame: () => void;
}

export const GameOver = ({ currentTeam, handleNewGame }: IGameOver): ReactElement => {
  return (
    <div>
      <p>The game is over. The winner is:
        <span>{currentTeam === Team.RedTeam ? "Red Team" : "Orange Team"}</span>
      </p>
      <button onClick={() => handleNewGame()}>New game</button>
    </div>
)
}
