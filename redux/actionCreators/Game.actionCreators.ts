import { Problem } from "interfaces/Problem.interface";
import { Dispatch } from "redux";
import { Action, ActionType } from "redux/actionTypes/Game.actionTypes";

export const getNewProblem = () => {
  return async (dispatch: Dispatch<Action>) => {
    let problem: Problem = {
      firstFactor: Math.floor(Math.random() * 50 + 1),
      operation: Math.floor(Math.random() * 2) ? "+" : "-",
      secondFactor: 0,
      solution: 0,
    };
    problem.secondFactor =
      problem.operation == "+"
        ? Math.floor(Math.random() * 50 + 1)
        : Math.floor(Math.random() * problem.firstFactor + 1);
    problem.solution =
      problem.operation == "+"
        ? problem.firstFactor + problem.secondFactor
        : problem.firstFactor - problem.secondFactor;
    dispatch({
      type: ActionType.SET_NEW_PROBLEM,
      payload: problem,
    });
  };
};

export const setIsGameRunning = (isGameRunning: boolean) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_GAME_RUNNING,
      payload: isGameRunning,
    });
  };
};
