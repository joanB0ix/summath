import { Problem } from "interfaces/Problem.interface";

export enum ActionType {
  SET_NEW_PROBLEM = "SET_NEW_PROBLEM",
  SET_GAME_RUNNING = "SET_GAME_RUNNING",
}

interface setNewProblem {
  type: ActionType.SET_NEW_PROBLEM;
  payload: Problem;
}

interface setGameRunning {
  type: ActionType.SET_GAME_RUNNING;
  payload: boolean;
}

export type Action = setNewProblem | setGameRunning;
